
// criar store

//definir estado
const INITIAL_STATE = {
  theme: 'light' // || dark
}
//adicionar redux devtools


// Ato 2 - lidando com o estado

//actions
const action = {type: 'CHANGE_THEME'}
//reducer
const reducer = (state = INITIAL_STATE, action) => {
  console.log(state, action)
  if(action.type === 'CHANGE_THEME') {
    return {
      ...state,
      theme: state.theme === 'light' ? 'dark' : 'light',
    }
  }
}
const store = Redux.createStore(
 reducer,
 window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)
//Ato 3 - alterando e lendo o estado

const btn = document.getElementById('change')
btn.addEventListener('click', () => {
  console.log('cliquei')
  store.dispatch(action)
})

store.subscribe(() => {
  const state = store.getState()
  const theme = document.getElementById('body')
  theme.className = state.theme
})