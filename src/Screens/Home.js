import React from "react"
import { connect } from "react-redux"
import { getAnime } from "../Redux/Action"
import "../Style/style.css"
import TitanPoster from "../Components/TitanPoster"
import Block from "../Components/Block"
import SearchBar from "../Components/SearchBar"

class Home extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.initialAnime.length === 0) {
      this.props.getAnime()
    }
  }

  renderOrNot = () => {
    if (this.props.initialAnime.length !== 0) {
      return (
        <div>
          {/* //!Content */}

          <div
            style={{
              fontSize: "2rem",
              marginTop: "2rem",
              marginLeft: "1rem",
              fontWeight: "600",
            }}
          >
            Recommended Anime
          </div>
          <div className="divider"></div>
          <div className="animeBox">
            {this.props.initialAnime.map((x) => {
              return <Block key={x.id} allData={x} />
            })}
          </div>
        </div>
      )
    }

    // !LOADING
    else {
      return (
        <div
          style={{
            textAlign: "center",
            marginTop: "5rem",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Loading...
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {/* //!POSTER */}

        <TitanPoster />
        <SearchBar />
        {this.renderOrNot()}
      </div>
    )
  }
}

var mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { getAnime })(Home)
