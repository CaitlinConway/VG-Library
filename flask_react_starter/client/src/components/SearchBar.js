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


  // updateSearch = (e) => {
  //   this.setState({ search: e.target.value });
  //   const searchList = document.getElementById("search-list");
  //   if (e.target.value) {
  //     searchList.removeAttribute("hidden");
  //     searchList.style.display = "flex";
  //     name = []

  //     gamesArray.forEach(game => {
  //       for (const key in game) {
  //         const checkStr = e.target.value;
  //         if ((key === "Name" || key === "Symbol") && (game[key].toLowerCase().startsWith(checkStr.toLowerCase())) && !(name.includes(game)) ) {
  //           name.push(game);
  //         }
  //     }
  //     });
  //   } else {
  //     searchList.setAttribute("hidden", "true")
  //     searchList.style.display = "none";
  //   }
  // };

  // onSearch = (e) => {
  //   if (e.key === 'Enter') {
  //   }
  // }

  render() {
    const { search } = this.state;
    const pagePath = () => {
      let pageData = [];
      let i = 0;
        name.map(array => {
      if (!(window.location.href.includes("stocks")) && i < 6) {
        pageData.push(
        <div className="search-ul">
         <div className="search-ul-1"><Link to={`/stocks/${array.Symbol}`}>{array.Symbol}</Link></div>
         <div className="search-ul-2"><Link to={`/stocks/${array.Symbol}`}>{array.Name}</Link></div>
        </div>
        );
        i++;
      } else if (window.location.href.includes("user") && i < 6) {
        pageData.push(
        <div className="search-ul">
         <div className="search-ul-1"><Link to={`${array.Symbol}`}>{array.Symbol}</Link></div>
         <div className="search-ul-2"><Link to={`${array.Symbol}`}>{array.Name}</Link></div>
        </div>
        );
        i++;
      } else if (window.location.href.includes("stocks") && i < 6) {
        pageData.push(
        <div className="search-ul">
         <div className="search-ul-1"><Link to={`${array.Symbol}`}>{array.Symbol}</Link></div>
         <div className="search-ul-2"><Link to={`${array.Symbol}`}>{array.Name}</Link></div>
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
            placeholder="Search"
            onChange={this.updateSearch}
            onKeyPress={this.onSearch}
            value={search}
            />
        </div>
        <div id="search-list" className="search-bar-list" hidden>
          <div id="section-1">
            <div className="search-list-type">Games</div>
            {pagePath()}
          </div>
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
    // search: (search) => dispatch(getSearch(search)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
