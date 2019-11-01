import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import * as actions from './actions'
import './index.scss'

class Home extends React.PureComponent<any, any> {
  static propTypes: {
    planets_metadata: PropTypes.Requireable<object>
    vehicles_metadata: PropTypes.Requireable<object>
  }

  componentDidMount() {
    this.props.setPlanetsData()
    this.props.setVehiclesData()
  }

  render() {
    return <div className="HomeContainer"></div>
  }
}

Home.propTypes = {
  planets_metadata: PropTypes.object,
  vehicles_metadata: PropTypes.object,
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
