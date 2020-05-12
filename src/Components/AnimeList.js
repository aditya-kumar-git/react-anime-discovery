import React from "react"
import AnimeItem from "./AnimeItem"

class AnimeList extends React.Component {
	state = {
		AnimeList: []
	}
	componentDidMount() {
		this.setState({
			AnimeList: this.props.ListOfAnime.map((individualItem, index) => {
				return (
					<AnimeItem
						clickedAnime={this.props.clickedAnime}
						key={individualItem.id}
						animeInfo={individualItem}
					/>
				)
			})
		})
	}
	componentDidUpdate(preProp) {
		if (preProp !== this.props) {
			console.log(this.props.ListOfAnime)

			this.setState({
				AnimeList: this.props.ListOfAnime.map((individualItem, index) => {
					return (
						<AnimeItem
							clickedAnime={this.props.clickedAnime}
							key={individualItem.id}
							animeInfo={individualItem}
							className="aniiitem"
						/>
					)
				})
			})
		}
	}
	render() {
		return <div className="Lit">{this.state.AnimeList}</div>
	}
}
export default AnimeList
