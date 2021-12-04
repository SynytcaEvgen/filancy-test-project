import { useState, useEffect } from "react";
import SearchFrom from "../SearchForm/SearchFrom";
import ReposFilter from "../ReposFilter/ReposFilter";
import ReposList from "../ReposList/ReposList";
import Pagination from "../Pagination/Pagination";

import './searchBlock.scss';

const SearchBlock = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [validQuery, setValidQuery] = useState('');
  const [coutPage, setCountPage] = useState(localStorage.coutPage ? localStorage.coutPage.replace(/["]/gi, '') : 1 );
  const [filter, setFilter] = useState(localStorage.filter ? localStorage.filter.replace(/["]/gi, '') : '');
  
  
  useEffect(() => {
    localStorage.setItem("coutPage", JSON.stringify(coutPage));
    localStorage.setItem("filter", JSON.stringify(filter));
  }, [coutPage, filter]);

  const onSearch = (e) => {
    e.preventDefault();
    localStorage.setItem("searchQuery", JSON.stringify(searchQuery));
    setValidQuery(state => state = searchQuery);
    setCountPage(state => state = 1);
  };
  return (
    <div className="container">
      <div className="search-wrapper">
        <SearchFrom
          onSearch={onSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery} />
        <ReposFilter filter={filter} setFilter={setFilter}/>
        <Pagination coutPage={coutPage} setCountPage={setCountPage}/>
        <ReposList validQuery={validQuery} coutPage={coutPage} filter={filter} />
        <Pagination coutPage={coutPage} setCountPage={setCountPage}/>
      </div>
    </div>
  )
}

export default SearchBlock