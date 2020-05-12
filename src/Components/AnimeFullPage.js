import React from "react"
import "./anime.css"
import gsap from "gsap"
class AnimeFullPage extends React.Component {
	constructor(props) {
		super(props)
		this.animeCoverPhoto = React.createRef()
	}
	componentDidMount() {
		console.log(this.props.fullINFO)
		var tl = gsap.timeline()
		tl.from(".animeCoverPhoto", { y: "-100%", opacity: 0, duration: 1 })
		tl.from(".faiPoster", { y: "-50%", opacity: 0, duration: 0.5 })
		tl.from(".fs", { duration: 1, opacity: 0, stagger: 0.25 })
		tl.from(".faiAboutContainer", {
			duration: 0.5,
			height: 0,
			width: 0
		})
		tl.from(".fac,.facs", { opacity: 0, duration: 0.5 })
		tl.from(".backButton", { duration: 0.5, opacity: 0 })
		tl.from(".bbt", { duration: 0.5, opacity: 0 })
	}
	backBack = () => {
		this.props.backButtonClicked()
	}
	render() {
		return (
			<div className="afpage">
				<div
					style={{
						backgroundImage: this.props.fullINFO.attributes.coverImage
							? ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${this.props.fullINFO.attributes.coverImage.large}") `
							: "none"
					}}
					className="animeCoverPhoto"
					ref={this.animeCoverPhoto}
				>
					<div onClick={this.backBack} className="backButton">
						<div className="bbt"></div>
					</div>
				</div>
				<div className="fullAnimeInfooo">
					<div className="faiPoster">
						<div
							style={{
								backgroundImage: `url(${this.props.fullINFO.attributes.posterImage.medium})`
							}}
							className="faiPostercontainer"
						></div>
					</div>
					<div className="faiSummary">
						<div className="fs fsTitle">
							{this.props.fullINFO.attributes.canonicalTitle}
						</div>
						<div className="fs fsagerating">
							({this.props.fullINFO.attributes.ageRatingGuide})
						</div>

						<div className="fs fsRating">
							Average rating {this.props.fullINFO.attributes.averageRating}
						</div>
						<div className="fs fsSummary">
							{this.props.fullINFO.attributes.synopsis}
						</div>
					</div>
					<div className="faiAbout">
						<div className="faiAboutContainer">
							<div className="facs">Anime Details:-</div>
							<div className="fac">
								English: {this.props.fullINFO.attributes.titles.en}
							</div>
							<div className="fac">
								Japanese: {this.props.fullINFO.attributes.titles.ja_jp}
							</div>
							<div className="fac">
								Started at: {this.props.fullINFO.attributes.startDate}
							</div>
							<div className="fac">
								Number of episodes:{" "}
								{this.props.fullINFO.attributes.episodeCount}
							</div>
							<div className="fac">
								Length of episodes:{" "}
								{this.props.fullINFO.attributes.episodeLength} minutes
							</div>
							<div className="fac">
								Type:
								{this.props.fullINFO.attributes.showType}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default AnimeFullPage
