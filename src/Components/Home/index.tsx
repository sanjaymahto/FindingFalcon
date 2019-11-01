import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import { bindActionCreators, Dispatch } from 'redux'
import * as actions from './actions'
import './index.scss'

class Home extends React.PureComponent<any, any> {
  static propTypes: {
    planets_metadata: PropTypes.Requireable<Array<any>>
    vehicles_metadata: PropTypes.Requireable<Array<any>>
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
            </div>
          </Col>
          <Col span={4}>
            <div>
              <p>Destination 2</p>
            </div>
          </Col>
          <Col span={4}>
            <div>
              <p>Destination 3</p>
            </div>
          </Col>
          <Col span={4}>
            <div>
              <p>Destination 4</p>
            </div>
          </Col>
        </Row>
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
