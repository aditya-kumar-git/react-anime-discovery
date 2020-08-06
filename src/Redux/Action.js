import Axios from "axios"

export var getAnime = () => {
  return async (dispatch) => {
    try {
      var data = await Axios({
        url: "https://kitsu.io/api/edge/anime",

        params: {
          "page[limit]": "20",
        },
      })

      console.log(data.data.data)
      dispatch({
        type: "INITIAL",
        payload: data.data.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export var getSearchedAnime = (search) => {
  return async (dispatch) => {
    try {
      var output = await Axios({
        url: "https://kitsu.io/api/edge/anime",
        params: {
          "filter[text]": search,
          "page[limit]": "20",
        },
      })

      dispatch({
        type: "INITIAL",
        payload: output.data.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export var fullAni = (data) => {
  return {
    type: "FULL",
    payload: data,
  }
}

export var searchChange = (data) => {
  return {
    type: "SEARCH",
    payload: data,
  }
}
