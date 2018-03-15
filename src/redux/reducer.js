const initState = {};

const rootReducer =(state = initState, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'SORT_STATUS':
            return { status: action.payload.status};
        default:
    }
};

export default rootReducer;