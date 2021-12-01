import SearchFrom from "../SearchForm/SearchFrom";
import ReposFilter from "../ReposFilter/ReposFilter";
import ReposList from "../ReposList/ReposList";
import Pagination from "../Pagination/Pagination";

import './searchBlock.scss';

const SearchBlock = () => {
    
    const onSearch = (e) => {
        e.preventDefault();
        console.log("Start Search")
    };
    
    return (
      <div className="container">
        <div className="search-wrapper">
          <SearchFrom onSearch={onSearch} />
          <ReposFilter />
          <ReposList />
          <Pagination/>
        </div>
       
      </div>
    )
}

export default SearchBlock