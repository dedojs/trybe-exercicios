const INITIAL_STATE = {
  estado: '',
};

function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_ACTION':
      return { state: action.state };
    default:
      return state;
  }
}

export default myReducer;

/*
export const ANSWERS_LIST = 'ANSWERS_LIST';

export const checkQuiz = (answers) => ({
  type: ANSWERS_LIST,
  answers,
});
*/