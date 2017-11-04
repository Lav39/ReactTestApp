const appActions = (() => {
    return {
        setRequestStartTime: (api, time) => ({
            type: 'SET_REQUEST_START_TIME',
            payload: {api, time}
        }),

        setRequestEndTime: (api, time) => ({
            type: 'SET_REQUEST_END_TIME',
            payload: {api, time}            
        }),

        setSaveStartTime: (api, time) => ({
            type: 'SET_SAVE_START_TIME',
            payload: {api, time}
        }),

        setSaveEndTime: (api, time) => ({
            type: 'SET_SAVE_END_TIME',
            payload: {api, time}
        }),

        getUnixTime: () => ({
            type: 'GET_UNIX_TIME',
            payload: new Date()
        })
    }
})();

export default appActions;