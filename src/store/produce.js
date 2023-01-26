import * as produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';
const RECEIVE_PRODUCE = 'produce/RECEIVE_PRODUCE';

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
};


// TODO: Delete this action
export const receiveProduce = (produce) => {
    return {
        type: RECEIVE_PRODUCE,
        produce
    }
}

const produceReducer = (state={}, action) => {
    Object.freeze(state);

    const nextState = { ...state }

    switch (action.type) {
        case POPULATE:
            for (let i = 0; i < action.produce.length; i++) {
                nextState[i + 1] = action.produce[i];
            }
            return nextState;
        // TODO: Delete this case
        case RECEIVE_PRODUCE:
            nextState[action.produce.id] = action.produce;
            return action.produce;
        default:
            return state;

    }
};

export default produceReducer;
