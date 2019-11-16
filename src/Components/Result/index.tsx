import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Button } from 'antd'
import './index.scss'

class Result extends React.PureComponent<any, any> {
  static propTypes: {
    falcon_finding_response: PropTypes.Requireable<object>
    total_time_taken: PropTypes.Requireable<number>
  }

  componentDidMount() {
    if (!Object.keys(this.props.falcon_finding_response).length) {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div className="ResultContainer">
        <h1 className="ResultContainer_heading">Finding Falcone!</h1>
        <h4 className="ResultContainer_subHeading">
          {!this.props.falcon_finding_response.error
            ? this.props.falcon_finding_response.status === 'success'
              ? `Success! Congratulation on finding Falcone. King shan is mighty pleased.`
              : `Sorry! You didn't able to save King Shan.`
            : `Error: ${this.props.falcon_finding_response.error}`}
        </h4>
        {!this.props.falcon_finding_response.error ? (
          <div>
            <p className="FoundTime">
              Time Taken: {`${this.props.total_time_taken}`}
            </p>
            <p className="FoundPlanetText">
              Planet Found:{' '}
              {this.props.falcon_finding_response.status === 'success'
                ? this.props.falcon_finding_response.planet_name
                : `Not found!`}
            </p>
          </div>
        ) : null}
        <div className="Button_restart">
          <Button
            onClick={() => {
              this.props.history.push('/')
            }}
          >
            Start Again
          </Button>
        </div>
      </div>
    )
  }
}

Result.propTypes = {
  falcon_finding_response: PropTypes.object,
  total_time_taken: PropTypes.number,
}

const mapStateToProps = (state: any) => {
  state = state.falconSearchReducer.toJS()
  return {
    falcon_finding_response: state.falcon_finding_response,
    total_time_taken: state.total_time_taken,
  }
}

export default withRouter(connect(mapStateToProps, null)(Result))
