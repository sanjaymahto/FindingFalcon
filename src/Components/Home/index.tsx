import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { bindActionCreators, Dispatch } from 'redux'
import { Row, Col, Button, Icon, message } from 'antd'
import { PlanetDropdown } from '../PlanetDropdown'
import { VehicleRadioComp } from '../VehicleRadioComponent'
import * as actions from './actions'
import './index.scss'

class Home extends React.Component<any, any> {
  static propTypes: {
    planets_metadata: PropTypes.Requireable<Array<any>>
    vehicles_metadata: PropTypes.Requireable<Array<any>>
    authentication_token: PropTypes.Requireable<string>
    falcon_finding_loader: PropTypes.Requireable<boolean>
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
    this.setState({
      planets: this.props.planets_metadata,
    })
    await this.props.setVehiclesData()
    this.setState({
      vehicles: this.props.vehicles_metadata,
    })
    await this.props.setAuthenticationToken()
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
          disabled_planets: Object.assign(prevState.disabled_planets, {
            [planet]: true,
          }),
          vehicles_options_visibility: Object.assign(
            prevState.vehicles_options_visibility,
            {
              [planet]: true,
            }
          ),
        }
      },
      () => {
        this.filterPlanetsArray(planet)
      }
    )
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
        const planet = this.state.selected_planets[vehicle]
        const planetMetaData = this.props.planets_metadata.find(
          (pl: { name: any }) => {
            return pl.name === planet
          }
        )
        let flag = true
        this.state.vehicles.forEach(
          (vh: { max_distance: number; total_no: number }) => {
            if (vh.max_distance >= planetMetaData.distance && vh.total_no) {
              flag = false
            }
          }
        )
        if (flag) {
          message.destroy()
          message.error(
            `Selected Planet Can't be reached by any available vehicles. Please Select another Planet.`
          )
          this.setState(
            (prevState: {
              disabled_planets: any
              disabled_vehicles: any
              selected_vehicles: any
            }) => {
              return {
                disabled_planets: Object.assign(prevState.disabled_planets, {
                  [vehicle]: false,
                }),
                disabled_vehicles: Object.assign(prevState.disabled_vehicles, {
                  [vehicle]: false,
                }),
                selected_vehicles: Object.assign(prevState.selected_vehicles, {
                  [vehicle]: null,
                }),
              }
            }
          )
        } else {
          this.filterVehiclesArray(vehicle)
          this.calculateTimeTaken(vehicle)
        }
      }
    )
  }

  filterPlanetsArray = (planetNumber: number) => {
    const planets = this.state.planets.filter(
      (planet: { name: React.ReactText }) => {
        if (!(this.state.selected_planets[planetNumber] === planet.name)) {
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

  filterVehiclesArray = (vehicleNumber: number) => {
    const vehicles = this.state.vehicles.filter(
      (vh: { name: React.ReactText; total_no: number }) => {
        if (vh.name === this.state.selected_vehicles[vehicleNumber]) {
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
          <>
            <p>{`Destination ${++i}`}</p>
            <PlanetDropdown
              planets={this.state.planets}
              value={this.state.selected_planets[i] || null}
              loading={this.props.falcon_finding_loader}
              onOptionChange={(event: any) => {
                this.onPlanetSelect(event, i)
              }}
              disabled={
                this.state.disabled_planets[i] ||
                this.props.falcon_finding_loader
              }
            />
            {this.state.vehicles_options_visibility[i] ? (
              <VehicleRadioComp
                value={this.state.selected_vehicles[i] || null}
                vehicles={this.state.vehicles}
                onOptionChange={(event: any) => {
                  this.onVehicleSelect(event, i)
                }}
                disabled={this.state.disabled_vehicles[i]}
              />
            ) : null}
          </>
        </Col>
      )
    })
  }

  resetData = async () => {
    this.total_time = 0
    this.setState({
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
      planets: [],
      vehicles: [],
    })
    this.setState({
      planets: this.props.planets_metadata,
    })
    await this.props.setVehiclesData()
    this.setState({
      vehicles: this.props.vehicles_metadata,
    })
  }

  render() {
    return (
      <div className="HomeContainer">
        <h1 className="HomeContainer_heading">
          <span style={{ marginLeft: '8.5%' }}>Finding Falcone!</span>
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
        <Row
          className="planets_and_vehicle_select"
          type="flex"
          justify="space-around"
        >
          {this.planetAndVehicleSelectionList()}
        </Row>
        <div>
          <p className="TimeCalculator">Time Taken: {this.total_time}</p>
        </div>
        <div className="Button_find">
          <Button
            onClick={async () => {
              const vehicleArray = Object.keys(
                this.state.selected_vehicles
              ).map(i => this.state.selected_vehicles[i])
              const planetsArray = Object.keys(this.state.selected_planets).map(
                i => this.state.selected_planets[i]
              )
              await this.props.findFalconCall({
                token: this.props.authentication_token,
                planet_names: planetsArray,
                vehicle_names: vehicleArray,
                total_time: this.total_time,
              })
              this.props.history.push('/result')
            }}
          >
            {this.props.falcon_finding_loader ? <Icon type="loading" /> : null}
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
  falcon_finding_loader: PropTypes.bool,
}

const mapStateToProps = (state: any) => {
  state = state.falconSearchReducer.toJS()
  return {
    planets_metadata: state.planets_metadata,
    vehicles_metadata: state.vehicles_metadata,
    authentication_token: state.authentication_token,
    falcon_finding_loader: state.falcon_finding_loader,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
