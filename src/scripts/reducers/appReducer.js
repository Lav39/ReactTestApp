const appReducer = (state = {
                        timeStamps: {
                            comments:{},
                            photos: {},
                            todos: {},
                            posts: {}
                        }, 
                        unixTime: Math.round((new Date()).getTime()/1000)
                    }, action) => {

    switch(action.type) {
        case 'SET_REQUEST_START_TIME': {
            let apiObj,
                {api, time} = action.payload,
                timeStampsObj = {...state.timeStamps};

            apiObj = {...timeStampsObj[api]}
            apiObj['reqStart'] = time.toLocaleString();
            timeStampsObj[api] = apiObj;
            state = {
                ...state,
                timeStamps: timeStampsObj
            }
            return state;
        }   
            
        case 'SET_REQUEST_END_TIME': {
            let apiObj,
                {api, time} = action.payload,
                timeStampsObj = {...state.timeStamps};

            apiObj = {...timeStampsObj[api]}
            apiObj['reqEnd'] = time.toLocaleString();
            timeStampsObj[api] = apiObj;
            state = {
                ...state,
                timeStamps: timeStampsObj
            }
            return state;
        }

        case 'SET_SAVE_START_TIME': {
            let apiObj,
                {api, time} = action.payload,
                timeStampsObj = {...state.timeStamps};

            apiObj = {...timeStampsObj[api]}
            apiObj['saveStart'] = time.toLocaleString();
            timeStampsObj[api] = apiObj;
            state = {
                ...state,
                timeStamps: timeStampsObj
            }
            return state;
        }

        case 'SET_SAVE_END_TIME': {
            let apiObj,
                {api, time} = action.payload,
                timeStampsObj = {...state.timeStamps};

            apiObj = {...timeStampsObj[api]}
            apiObj['saveEnd'] = time.toLocaleString();
            timeStampsObj[api] = apiObj;
            state = {
                ...state,
                timeStamps: timeStampsObj
            }
            return state;
        }

        case 'GET_UNIX_TIME': {
            state = {
                ...state,
                unixTime: Math.round((new Date()).getTime()/1000)
            }
            return state;
        }

        default:
            return state;
    }
}

export default appReducer;