export const FETCH_USER = 'FETCH_USER';

const initialState = {
  
};

const SignupReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER:
      return { ...state };
    default:
      return state;
  }
}

export default SignupReducer;
