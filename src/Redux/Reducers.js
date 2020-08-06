const { combineReducers } = require("redux")

var initialAnime = (iniState = [], action) => {
  switch (action.type) {
    case `INITIAL`:
      return action.payload

    default:
      return iniState
  }
}

var FullAnime = (iniState = [], action) => {
  switch (action.type) {
    case `FULL`:
      return action.payload

    default:
      return iniState
  }
}

var inputValue = (iniState = ``, action) => {
  switch (action.type) {
    case `SEARCH`:
      return action.payload

    default:
      return iniState
  }
}

var allReducers = combineReducers({
  initialAnime,
  FullAnime,
  inputValue,
})

export default allReducers
