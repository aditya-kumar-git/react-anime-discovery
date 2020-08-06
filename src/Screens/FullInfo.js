import React from "react"
import { connect } from "react-redux"
import { fullAni } from "../Redux/Action"
import { Link } from "react-router-dom"
import def from "../Images/wall.jpg"

class FullInfo extends React.Component {
  componentDidMount() {
    this.props.initialAnime.map((x) => {
      if (this.props.match.params.id === x.id) {
        this.props.fullAni(x)
      }
      return 0
    })
  }

  render() {
    var tvORmovie = () => {
      var { FullAnime } = this.props
      if (FullAnime.attributes.subtype === "TV") {
        return (
          <div className="fullEpisode">
            Episodes: {FullAnime.attributes.episodeCount}
          </div>
        )
      } else {
        return <div className="fullEpisode">Movie</div>
      }
    }

    var renderOrNot = () => {
      var { FullAnime } = this.props
      if (FullAnime.length !== 0) {
        return (
          <div>
            <div
              className="fullImg"
              style={{
                backgroundImage:
                  FullAnime.attributes.coverImage !== null
                    ? `url("${FullAnime.attributes.coverImage.large}")`
                    : `url("${def}")`,
              }}
            >
              {/* //!BACK BUTON */}
              <Link to="/">
                <div className="backButton">
                  <svg viewBox="0 0 477.867 477.867">
                    <path
                      d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933
                S370.893,0,238.933,0z M320.357,403.926c-6.167,7.128-16.945,7.907-24.073,1.739c-0.17-0.147-0.337-0.298-0.501-0.451
                l-170.667-153.6c-7.003-6.309-7.566-17.1-1.258-24.103c0.397-0.441,0.817-0.861,1.258-1.258l170.667-153.6
                c6.879-6.444,17.679-6.092,24.123,0.787c6.444,6.879,6.092,17.679-0.787,24.123c-0.164,0.154-0.331,0.304-0.501,0.451
                L162.133,238.933l156.484,140.919C325.746,386.02,326.524,396.798,320.357,403.926z"
                    />
                  </svg>
                </div>
              </Link>
            </div>

            {/* //!TEXT INFO */}

            <div className="fullTitle">
              {FullAnime.attributes.canonicalTitle}
            </div>
            <div className="divider"></div>
            <div className="fullSummary">{FullAnime.attributes.synopsis}</div>
            <div className="fullNum">
              <div className="fullRating">
                Reviews: {FullAnime.attributes.averageRating}
              </div>
              <div className="fullAge">
                Rating: {FullAnime.attributes.ageRatingGuide}
              </div>

              {tvORmovie()}
            </div>
          </div>
        )
      } else {
        return (
          <div className="fullLoading">
            <Link to="/">
              <div style={{ cursor: "pointer" }}>Go Back Home</div>
            </Link>
          </div>
        )
      }
    }

    return <div>{renderOrNot()}</div>
  }
}

var mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { fullAni })(FullInfo)
