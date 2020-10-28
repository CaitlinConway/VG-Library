import React from 'react'
import { connect } from "react-redux";
// import { getSearch } from "../store/stockReducer";
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    }
  };


  updateSearch = (e) => {
    this.setState({ search: e.target.value });
    const searchList = document.getElementById("search-list");
    if (e.target.value) {
      searchList.removeAttribute("hidden");
      searchList.style.display = "flex";
      name = []
      let gamesArray = this.props.games.games;
      gamesArray.forEach(game => {
        for (const key in game) {
          const checkStr = e.target.value;
          if ((key === "name") && (game[key].toLowerCase().startsWith(checkStr.toLowerCase())) && !(name.includes(game)) ) {
            name.push(game);
          }
      }
      });
    } else {
      searchList.setAttribute("hidden", "true")
      searchList.style.display = "none";
    }
  };

  onSearch = (e) => {
    if (e.key === 'Enter') {
    }
  }

  render() {
    const { search } = this.state;
    const pagePath = () => {
      let pageData = [];
      let i = 0;
        name.map(array => {
      if (i < 6) {
        pageData.push(
        <div className="search-div">
         <div key= {array.id} className="search-li"><Link to={`/games/${array.name}`}>{array.name}</Link></div>
        </div>
        );
        i++;
      }
      return null;
      });
      return pageData;
    };

    return (
      <div className="search-bar-container">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search by game name"
            onChange={this.updateSearch}
            onKeyPress={this.onSearch}
            value={search}
            />
        </div>
        <div id="search-list" className="search-bar-list" hidden>
            <div className="search-list-type"></div>
            {pagePath()}
        </div>
      </div>
    );
  }
}

// Custom array to hold links.
let name = []

const mapStateToProps = (state) => ({
  search: state.search,
  games: state.games.games
});

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
