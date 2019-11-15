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
      total_time: null,
    }
  }

  componentDidMount() {
    this.props.setPlanetsData()
    this.props.setVehiclesData()
    this.props.setAuthenticationToken()
  }

  planetAndVehicleSelectionList = () => {
    return Array.apply(null, Array(4)).map((e, i) => {
      return (
        <Col span={4} key={i}>
          <div>
            <p>{`Destination ${++i}`}</p>
            <PlanetDropdown
              planets={this.props.planets_metadata}
              disabled={false}
            />
            <VehicleRadioComp
              vehicles={this.props.vehicles_metadata}
              disabled={false}
            />
          </div>
        </Col>
      )
    })
  }

  render() {
    return (
      <div className="HomeContainer">
        <h1 className="HomeContainer_heading">Finding Falcone</h1>
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
