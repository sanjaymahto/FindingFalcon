import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button, Icon } from 'antd'
import { bindActionCreators, Dispatch } from 'redux'
import { PlanetDropdown } from '../PlanetDropdown'
import * as actions from './actions'
import './index.scss'
import { VehicleRadioComp } from '../VehicleRadioComponent'

class Home extends React.Component<any, any> {
  static propTypes: {
    planets_metadata: PropTypes.Requireable<Array<any>>
    vehicles_metadata: PropTypes.Requireable<Array<any>>
  }

  constructor(props: any) {
    super(props)
    this.state = {
      total_time: null,
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
          selected_planets: Object.assign(
            {
              [event]: event,
            },
            prevState.selected_planets
          ),
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
        this.PlanetsFilter()
      }
    )
  }

  PlanetsFilter = () => {
    const planets = this.state.planets.filter(
      (planet: { name: React.ReactText }) => {
        if (!this.state.selected_planets[planet.name]) {
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

  vehiclesFilter = (vehicle: any = '') => {
    const vehicles = this.state.vehicles.filter(
      (vh: { name: React.ReactText; total_no: number }) => {
        if (vh.name === vehicle) {
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
          selected_vehicles: Object.assign(
            {
              [event.target.value]: event.target.value,
            },
            prevState.selected_vehicles
          ),
          disabled_vehicles: Object.assign(prevState.disabled_vehicles, {
            [vehicle]: true,
          }),
        }
      },
      () => {
        this.vehiclesFilter()
      }
    )
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
                this.PlanetsFilter()
              }}
              disabled={this.state.disabled_planets[i]}
            />
            {this.state.vehicles_options_visibility[i] ? (
              <VehicleRadioComp
                vehicles={this.state.vehicles}
                onOptionChange={(event: any) => {
                  this.onVehicleSelect(event, i)
                  this.vehiclesFilter(event.target.value)
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
          <p className="TimeCalculator">Time Taken: {`140`}</p>
        </div>
        <div className="Button_find">
          <Button>Find Falcon!</Button>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  planets_metadata: PropTypes.array,
  vehicles_metadata: PropTypes.array,
}

const mapStateToProps = (state: any) => {
  state = state.falconSearchReducer.toJS()
  return {
    planets_metadata: state.planets_metadata,
    vehicles_metadata: state.vehicles_metadata,
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
