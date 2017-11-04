import React from 'react';
import PropTypes from 'prop-types';

const TimeStampInterface = (props) => {
    
    let {
        reqStart,
        reqEnd,
        saveStart,
        saveEnd
    } = props.timeStamp;

    return (
        <div className = 'timestamp-box'>
            <div> Start: {reqStart}</div>
            <div> End: {reqEnd}</div>
            <div> Start Save: {saveStart}</div>
            <div> End Save: {saveEnd}</div>
        </div>
    )
}

// Typechecking for props
TimeStampInterface.proptypes = {
    timeStamp: PropTypes.object
}

export default TimeStampInterface;