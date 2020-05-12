import React from "react"
import Axios from "axios"
import SearchBar from "./SearchBar"
import AnimeList from "./AnimeList"
import AnimeFullPage from "./AnimeFullPage"
import gsap from "gsap"
class App extends React.Component {
	state = {
		animes: [],
		searchedWord: "",
		heading: "Top trending anime",
		fullpageanimeinfo: null
	}
	searchAnim = async () => {
		console.log(this.state.searchedWord)

		var searchedAnime = await Axios({
			url: "https://kitsu.io/api/edge/anime",
			headers: {
				Accept: "application/vnd.api+json",
				"Content-Type": "application/vnd.api+json"
			},
			params: {
				"page[limit]": "20",
				"filter[text]": this.state.searchedWord
			}
		})
		this.setState({
			animes: searchedAnime.data.data,
			heading: `Search results for "${this.state.searchedWord}"`
		})
		var tl = gsap.timeline()
		tl.from(".animeBlock", { y: "-20%", opacity: 0, duration: 1, stagger: 0.1 })
	}
	recivingInput = (recivedInput) => {
		console.log(recivedInput)
		this.setState(
			{
				searchedWord: recivedInput
			},
			() => {
				this.searchAnim()
			}
		)
	}
	getAnime = async () => {
		var anime = await Axios({
			url: "https://kitsu.io/api/edge/anime",
			headers: {
				Accept: "application/vnd.api+json",
				"Content-Type": "application/vnd.api+json"
			},
			params: {
				"page[limit]": "20"
				//"filter[text]": "death"
				//"filter[genres]": "Action",
			}
		})

		this.setState({
			animes: anime.data.data
		})
		var tl = gsap.timeline()
		tl.from(".animeBlock", { y: "-20%", opacity: 0, duration: 1, stagger: 0.1 })
	}
	componentDidMount() {
		this.getAnime()
		var tl = gsap.timeline()
		tl.from(".searchBar", { y: "-100%", duration: 0.5 })
		tl.from(".websiteLogo,.formForm", { opacity: 0, duration: 0.3 })
		tl.from(".heading", { y: "-100%", duration: 0.5, opacity: 0 })
	}

	clickedAnime = (clickedBlock) => {
		console.log(clickedBlock)
		this.setState({
			fullpageanimeinfo: clickedBlock
		})
	}

	backButtonClicked = () => {
		this.setState({
			fullpageanimeinfo: null
		})
	}
	render() {
		if (this.state.fullpageanimeinfo) {
			return (
				<AnimeFullPage
					backButtonClicked={this.backButtonClicked}
					fullINFO={this.state.fullpageanimeinfo}
				/>
			)
		} else {
			console.log("Chalu hai bhyi chalu hai")

			return (
				<div className="homePage">
					<SearchBar recivingInput={this.recivingInput} />
					<div className="heading">{this.state.heading}</div>
					<AnimeList
						clickedAnime={this.clickedAnime}
						ListOfAnime={this.state.animes}
					/>
					<div>{this.state.animePhotus}</div>
				</div>
			)
		}
	}
}

export default App
