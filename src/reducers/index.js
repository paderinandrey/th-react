const INITIAL_STATE = 0;

const counter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.amount;
    default:
      return state;
  }
};

export default counter;
