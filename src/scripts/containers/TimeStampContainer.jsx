import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TimeStampInterface from '../components/TimeStampInterface.jsx';
import config from '../utilities/config';

class TimeStampContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        config.apiList.forEach((api)=> {
            this.props.getData(api)
        });
    }

    // Render timestamp blocks
    renderTimestampBlocks(timeStampObj) {
        let element = config.apiList.map((api, index) => {
            return (
                <TimeStampInterface 
                    key = {index}
                    timeStamp = {timeStampObj[api]}
                />
            );
        });
        return element;
    }

    render() {
        return (
            <div id = 'timestamp-container'>
                <div className = 'border-top'>
                    {this.renderTimestampBlocks(this.props.timeStamps)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({appReducer}) => {
    return {
        timeStamps: appReducer.timeStamps
    }
}

// Typechecking for props
TimeStampContainer.proptypes = {
    timeStamps: PropTypes.object
}

export default connect(mapStateToProps)(TimeStampContainer);