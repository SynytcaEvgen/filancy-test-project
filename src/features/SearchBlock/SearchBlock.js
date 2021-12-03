import { useState } from "react";
import SearchFrom from "../SearchForm/SearchFrom";
import ReposFilter from "../ReposFilter/ReposFilter";
import ReposList from "../ReposList/ReposList";
import Pagination from "../Pagination/Pagination";

import './searchBlock.scss';

const SearchBlock = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [validQuery, setValidQuery] = useState('');
  const [coutPage, setCountPage] = useState(1);
  const [filter, setFilter] = useState('');
  console.log(filter);
  const onSearch = (e) => {
        e.preventDefault();
        setValidQuery(state => state = searchQuery);
        setCountPage(state => state = 1);
    };
  return (
    <div className="container">
      <div className="search-wrapper">
        <SearchFrom
          onSearch={onSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}/>
        <ReposFilter filter={filter}setFilter={setFilter}/>
        <ReposList validQuery={validQuery} coutPage={coutPage} filter={filter} />
        <Pagination validQuery={validQuery} coutPage={coutPage} setCountPage={setCountPage}/>
      </div>
    </div>
  )
}

export default SearchBlock