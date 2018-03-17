const rootReducer =(state = {}, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'SORT_STATUS':
            return { status: action.payload.status};
        default: {
            return state;
        }
    }
};

export default rootReducer;