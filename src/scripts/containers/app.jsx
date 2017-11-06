import React from 'react'
import {connect} from 'react-redux';

import Header from '/components/header.jsx';
import TimeStampContainer from '/containers/timeStampContainer.jsx';
import ButtonContainer from '/components/buttonContainer.jsx';
import UnixTimeStamp from '/containers/unixTimeStamp.jsx';
import config from '/utilities/config';
import appActions from '/actions/appActions';
import storeOperations from '/indexedDB/objectStores';

class App extends React.Component {
    constructor(props) {
        super(props);
    this.getData = this.getData.bind(this);
    }
    
    // Send request for fetching data
    getData(api) {
        let url,
            saveTimeStamps,
            apiResponse,
            {
                setRequestStartTime,
                setRequestEndTime,
                setSaveStartTime,
                setSaveEndTime
            } = this.props;

        url = config.url + api;

        // Set request start time
        setRequestStartTime(api, new Date());

        // AJAX request using fetch api
        fetch(url, {method: 'get'}).then((response) => {
            return response.json();
        }).then((data) => {

            // Set request end time
            setRequestEndTime(api, new Date());

            // Populate object stores in indexedDB
            storeOperations.populateDatabase(api, data).then((saveTimeStamps) => {
                // Set save start time
                setSaveStartTime(api, saveTimeStamps['saveStart']);
                setSaveEndTime(api, saveTimeStamps['saveEnd']);
            })
            }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        let {getUnixTime, unixTime} = this.props;
        return (
            <div id = 'app-container'>
                <Header/>
                <TimeStampContainer 
                  getData = {this.getData}
                />
                <ButtonContainer 
                    getData = {this.getData} 
                />
                <UnixTimeStamp/>
            </div>
        )
    }
}

// Map actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        setRequestStartTime: (api, time) => {
            dispatch(appActions.setRequestStartTime(api, time));
        },
        setRequestEndTime: (api, time) => {
            dispatch(appActions.setRequestEndTime(api, time));
        },
        setSaveStartTime: (api, time) => {
            dispatch(appActions.setSaveStartTime(api, time));
        },
        setSaveEndTime: (api, time) => {
            dispatch(appActions.setSaveEndTime(api, time));
        }
    }
}

export default connect(null, mapDispatchToProps)(App);