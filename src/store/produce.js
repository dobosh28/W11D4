import * as produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
};

const produceReducer = (state={}, action) => {
    Object.freeze(state);

    // const nextState = { ...state }

    switch (action.type) {
        case POPULATE:
            const nextState = {}
            for (let i = 0; i < action.produce.length; i++) {
                nextState[i + 1] = action.produce[i];
            }
            debugger;
            return nextState;
        default:
            return state;

    }
};

export default produceReducer;
