import React from "react"
import { Link } from "react-router-dom"

class Block extends React.Component {
  render() {
    var renderYear = () => {
      if (allData.attributes.startDate) {
        return (
          <div className="year">{allData.attributes.startDate.slice(0, 4)}</div>
        )
      } else {
        return <div></div>
      }
    }

    var { allData } = this.props
    return (
      <Link to={`/anime/${allData.id}`}>
        <div className="block">
          <div
            style={{
              backgroundImage: `url("${allData.attributes.posterImage.large}")`,
            }}
            className="blockImage"
          >
            <div className="blockImageCon">
              <div style={{ margin: "1rem" }}></div>
            </div>
          </div>
          <div className="blockTitle">{allData.attributes.canonicalTitle}</div>

          {renderYear()}
        </div>
      </Link>
    )
  }
}

export default Block
