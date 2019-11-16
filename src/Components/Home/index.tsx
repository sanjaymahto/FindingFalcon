import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button, Icon, message } from 'antd'
import { bindActionCreators, Dispatch } from 'redux'
import { PlanetDropdown } from '../PlanetDropdown'
import * as actions from './actions'
import './index.scss'
import { VehicleRadioComp } from '../VehicleRadioComponent'

class Home extends React.Component<any, any> {
  static propTypes: {
    planets_metadata: PropTypes.Requireable<Array<any>>
    vehicles_metadata: PropTypes.Requireable<Array<any>>
    authentication_token: PropTypes.Requireable<string>
  }
  total_time: number

  constructor(props: any) {
    super(props)
    this.total_time = 0
    this.state = {
      selected_planets: {},
      disabled_planets: {},
      selected_vehicles: {},
      disabled_vehicles: {
        1: false,
        2: false,
        3: false,
        4: false,
      },
      vehicles_options_visibility: {
        1: false,
        2: false,
        3: false,
        4: false,
      },
      vehicles: [],
      planets: [],
    }
  }

  async componentDidMount() {
    await this.props.setPlanetsData()
    await this.props.setVehiclesData()
    await this.props.setAuthenticationToken()
    this.setState({
      planets: this.props.planets_metadata,
      vehicles: this.props.vehicles_metadata,
    })
  }

  onPlanetSelect = (event: any, planet: any) => {
    this.setState(
      (prevState: {
        selected_planets: any
        disabled_planets: any
        vehicles_options_visibility: any
      }) => {
        return {
          selected_planets: Object.assign(prevState.selected_planets, {
            [planet]: event,
          }),
          disabled_planets: Object.assign(
            {
              [planet]: true,
            },
            prevState.disabled_planets
          ),
          vehicles_options_visibility: Object.assign(
            prevState.vehicles_options_visibility,
            {
              [planet]: true,
            }
          ),
        }
      },
      () => {
        this.PlanetsFilter(planet)
      }
    )
  }

  PlanetsFilter = (i: string | number) => {
    const planets = this.state.planets.filter(
      (planet: { name: React.ReactText }) => {
        if (!(this.state.selected_planets[i] === planet.name)) {
          return planet
        } else {
          return null
        }
      }
    )
    this.setState({
      planets,
    })
  }

  vehiclesFilter = (i: string | number) => {
    const vehicles = this.state.vehicles.filter(
      (vh: { name: React.ReactText; total_no: number }) => {
        if (vh.name === this.state.selected_vehicles[i]) {
          return Object.assign({ ...vh }, { total_no: --vh.total_no })
        } else {
          return vh
        }
      }
    )
    this.setState({
      vehicles,
    })
  }

  onVehicleSelect = (event: any, vehicle: any) => {
    this.setState(
      (prevState: { selected_vehicles: any; disabled_vehicles: any }) => {
        return {
          selected_vehicles: Object.assign(prevState.selected_vehicles, {
            [vehicle]: event.target.value,
          }),
          disabled_vehicles: Object.assign(prevState.disabled_vehicles, {
            [vehicle]: true,
          }),
        }
      },
      () => {
        this.vehiclesFilter(vehicle)
        this.calculateTimeTaken(vehicle)
      }
    )
  }

  calculateTimeTaken = (i: string | number) => {
    const vehicle = this.state.selected_vehicles[i]
    const vehicleMetaData = this.props.vehicles_metadata.find(
      (vh: { name: any }) => {
        return vh.name === vehicle
      }
    )
    const planet = this.state.selected_planets[i]
    const planetMetaData = this.props.planets_metadata.find(
      (pl: { name: any }) => {
        return pl.name === planet
      }
    )

    if (planetMetaData.distance > vehicleMetaData.max_distance) {
      message.error("Sorry! This vehicle can't reach the planet you selected")
      this.setState(
        (prevState: { selected_vehicles: any; disabled_vehicles: any }) => {
          return {
            disabled_vehicles: Object.assign(prevState.disabled_vehicles, {
              [i]: false,
            }),
          }
        },
        () => {
          const vehicles = this.state.vehicles.filter(
            (vh: { name: React.ReactText; total_no: number }) => {
              if (vh.name === this.state.selected_vehicles[i]) {
                return Object.assign({ ...vh }, { total_no: ++vh.total_no })
              } else {
                return vh
              }
            }
          )
          this.setState({
            vehicles,
          })
        }
      )
    } else {
      const time = planetMetaData.distance / vehicleMetaData.speed
      this.total_time += time
    }
  }

  planetAndVehicleSelectionList = () => {
    return Array.apply(null, Array(4)).map((e, i) => {
      return (
        <Col span={4} key={i}>
          <div>
            <p>{`Destination ${++i}`}</p>
            <PlanetDropdown
              planets={this.state.planets}
              onOptionChange={(event: any) => {
                this.onPlanetSelect(event, i)
              }}
              disabled={this.state.disabled_planets[i]}
            />
            {this.state.vehicles_options_visibility[i] ? (
              <VehicleRadioComp
                vehicles={this.state.vehicles}
                onOptionChange={(event: any) => {
                  this.onVehicleSelect(event, i)
                }}
                disabled={this.state.disabled_vehicles[i]}
              />
            ) : null}
          </div>
        </Col>
      )
    })
  }

  resetData = () => {
    window.location.reload()
  }

  render() {
    return (
      <div className="HomeContainer">
        <h1 className="HomeContainer_heading">
          <span style={{ marginLeft: '8.5%' }}>Finding Falcone</span>
          <span style={{ float: 'right', marginRight: '32px' }}>
            <Button onClick={this.resetData}>
              <Icon type="reload" />
              &nbsp;Reset
            </Button>
          </span>
        </h1>
        <h4 className="HomeContainer_subHeading">
          Select planets you want to search in:
        </h4>
        <Row type="flex" justify="space-around">
          {this.planetAndVehicleSelectionList()}
        </Row>
        <div>
          <p className="TimeCalculator">Time Taken: {this.total_time}</p>
        </div>
        <div className="Button_find">
          <Button
            onClick={() => {
              const vehicleArray = Object.keys(
                this.state.selected_vehicles
              ).map(i => this.state.selected_vehicles[i])
              const planetsArray = Object.keys(this.state.selected_planets).map(
                i => this.state.selected_planets[i]
              )
              this.props.findFalconCall({
                token: this.props.authentication_token,
                planet_names: planetsArray,
                vehicle_names: vehicleArray,
              })
            }}
          >
            Find Falcon!
          </Button>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  planets_metadata: PropTypes.array,
  vehicles_metadata: PropTypes.array,
  authentication_token: PropTypes.string,
}

const mapStateToProps = (state: any) => {
  state = state.falconSearchReducer.toJS()
  return {
    planets_metadata: state.planets_metadata,
    vehicles_metadata: state.vehicles_metadata,
    authentication_token: state.authentication_token,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      ...actions,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
