

import "./searchForm.scss";

const SearchFrom = ({ onSearch, searchQuery, setSearchQuery }) => {
    
    return (
        <div className="search">
            <div className="search__container">
                <form actions="" onSubmit={onSearch} className="search__form">
                    <div className="input__wrapper">
                        <input
                            required
                            type="text"
                            className="search__input"
                            placeholder="Find a repository…"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}/>
                    </div>
                    <div className="input_wrapper">
                        <input type="submit" className="btn btn-search" value="Search" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchFrom;