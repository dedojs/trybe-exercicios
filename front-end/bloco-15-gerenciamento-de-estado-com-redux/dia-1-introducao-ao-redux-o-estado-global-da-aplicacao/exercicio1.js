const store = Redux.createStore(reducer)

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case NEXT_COLOR: {}
    case PREVIOUS_COLOR: {}
  default:
    return state;
  }
}