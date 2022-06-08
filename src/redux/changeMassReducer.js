const initialState = {
  matter:null
}

export const changeMatterMassReducer = (state = initialState, action) => {
  switch(action.type) {
    case "changeMatterMass":
        state.matter = action.value
      return state

    case "restart": return initialState

    default:
      return state
  }
}