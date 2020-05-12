import React from "react"
import "./anime.css"
class SearchBar extends React.Component {
	constructor(props) {
		super(props)
		this.inputRef = React.createRef()
	}
	state = {
		textSearch: ""
	}
	searchSubmit = (event) => {
		event.preventDefault()
		this.props.recivingInput(this.inputRef.current.value)
	}
	render() {
		return (
			<div className="searchBar">
				<div className="websiteLogo">Anime World</div>
				<form className="formForm" onSubmit={this.searchSubmit}>
					<input
						ref={this.inputRef}
						onChange={(event) => {
							this.setState({ textSearch: event.target.value })
						}}
						value={this.state.textSearch}
						className="inputTab"
						type="text"
					/>
				</form>
			</div>
		)
	}
}
export default SearchBar
