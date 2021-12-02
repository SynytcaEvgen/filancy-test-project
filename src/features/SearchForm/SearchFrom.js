import "./searchForm.scss";

const SearchFrom = ({onSearch}) => {
    return (
        <div className="search">
            <div className="search__container">
                <form actions="" onSubmit={onSearch} className="search__form">
                    <div className="input__wrapper">
                        <input type="text" className="search__input" placeholder="Find a repository…"/>
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