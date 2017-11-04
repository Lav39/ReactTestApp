import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import appActions from '../actions/appActions';

class UnixTimeStamp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id = 'unix-timestamp-container'>
                <button
                    type = 'button'
                    onClick = {this.props.getUnixTime}
                >
                    UNIX time: {this.props.unixTime}
                </button>
            </div>
        )
    }
}

// Map state to props
const mapStateToProps = ({appReducer}) => {
    return {
        unixTime: appReducer.unixTime
    }
}

// Map actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        getUnixTime: () => {
            dispatch(appActions.getUnixTime());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnixTimeStamp);
