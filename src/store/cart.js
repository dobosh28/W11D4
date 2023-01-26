const RECEIVE_PRODUCE = 'produce/RECEIVE_PRODUCE';

export const receiveProduce = (produce) => {
    return {
        type: RECEIVE_PRODUCE,
        produce
    }
}


const cartReducer = (state = {}, action) => {
    Object.freeze(state);

    const nextState = { ...state }

    switch (action.type) {
        case RECEIVE_PRODUCE:
            nextState[action.produce.id] = action.produce;
            return action.produce;
        default:
            return state;
    }
};


export default cartReducer;
