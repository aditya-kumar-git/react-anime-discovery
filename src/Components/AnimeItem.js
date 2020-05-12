import React from "react"
import "./anime.css"

class AnimeItem extends React.Component {
	componentDidMount() {
		console.log("Mounted")
	}
	constructor(props) {
		super(props)
		this.blockREF = React.createRef()
	}
	ShowME = () => {
		this.props.clickedAnime(this.props.animeInfo)
	}
	render() {
		return (
			<div
				id={this.props.animeInfo.id}
				ref={this.blockREF}
				onClick={this.ShowME}
				className="animeBlock"
			>
				<div className="container">
					<div
						style={{
							backgroundImage: `url(${this.props.animeInfo.attributes.posterImage.medium})`
						}}
						className="animePoster"
					></div>
					<div className="animeTitle">
						{this.props.animeInfo.attributes.canonicalTitle}
					</div>
				</div>
			</div>
		)
	}
}
export default AnimeItem
