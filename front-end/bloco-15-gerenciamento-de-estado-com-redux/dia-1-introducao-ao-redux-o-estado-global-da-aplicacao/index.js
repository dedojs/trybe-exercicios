const Redux = require('redux');

const fazerLogin = (email) => ({
  type: 'LOGIN',
  email,
})

const LOGIN = {
  login: false,
  user: 'andre',
  key:'1234',
  email:'',
}


const reducer = (state = LOGIN, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login:!state.login,
        email:action.email,
      };
      default:
        return state;
    }
  }
  
  const store = Redux.createStore(reducer)

  store.dispatch(fazerLogin('teste@teste.com'));

  console.log(store.getState())

  // -------------------------------------------------------

  const store1 = Redux.createStore(
    (state = 5) => state
  );
  
  // Change code below this line
  
  console.log(store1.getState())

  
  
  


