import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'
import { bindActionCreators, Dispatch } from 'redux'
import { PlanetDropdown } from '../PlanetDropdown'
import * as actions from './actions'
import './index.scss'
import { VehicleRadioComp } from '../VehicleRadioComponent'

class Home extends React.PureComponent<any, any> {
  static propTypes: {
    planets_metadata: PropTypes.Requireable<Array<any>>
    vehicles_metadata: PropTypes.Requireable<Array<any>>
  }

  constructor(props: any) {
    super(props)
    this.state = {
      Planet_disableState: {
        planet1: false,
        planet2: true,
        planet3: true,
        planet4: true,
      },
      vehicles_disableState: {
        planet1: false,
        planet2: false,
        planet3: false,
        planet4: false,
      },
      vehicles_showState: {
        planet1: true,
        planet2: false,
        planet3: false,
        planet4: false,
      },
    }
  }

  componentDidMount() {
    this.props.setPlanetsData()
    this.props.setVehiclesData()
  }

  render() {
    return (
      <div className="HomeContainer">
        <h1>Finding Falcone</h1>
        <h4>Select planets you want to search in:</h4>
        <Row type="flex" justify="space-around">
          <Col span={4}>
            <div>
              <p>Destination 1</p>
              <PlanetDropdown
                planets={this.props.planets_metadata}
                disabled={this.state.Planet_disableState.planet1}
              />
              {this.state.vehicles_showState.planet1 ? (
                <VehicleRadioComp
                  vehicles={this.props.vehicles_metadata}
                  disabled={this.state.vehicles_disableState.planet1}
                />
              ) : null}
            </div>
          </Col>
          <Col span={4}>
            <div>
              <p>Destination 2</p>
              <PlanetDropdown
                planets={this.props.planets_metadata}
                disabled={this.state.Planet_disableState.planet2}
              />
              {this.state.vehicles_showState.planet2 ? (
                <VehicleRadioComp
                  vehicles={this.props.vehicles_metadata}
                  disabled={this.state.vehicles_disableState.planet2}
                />
              ) : null}
            </div>
          </Col>
          <Col span={4}>
            <div>
              <p>Destination 3</p>
              <PlanetDropdown
                planets={this.props.planets_metadata}
                disabled={this.state.Planet_disableState.planet3}
              />
              {this.state.vehicles_showState.planet3 ? (
                <VehicleRadioComp
                  vehicles={this.props.vehicles_metadata}
                  disabled={this.state.vehicles_disableState.planet3}
                />
              ) : null}
            </div>
          </Col>
          <Col span={4}>
            <div>
              <p>Destination 4</p>
              <PlanetDropdown
                planets={this.props.planets_metadata}
                disabled={this.state.Planet_disableState.planet4}
              />
              {this.state.vehicles_showState.planet4 ? (
                <VehicleRadioComp
                  vehicles={this.props.vehicles_metadata}
                  disabled={this.state.vehicles_disableState.planet4}
                />
              ) : null}
            </div>
          </Col>
        </Row>
        <div>
          <p>Time Taken: {`140`}</p>
        </div>
        <div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
