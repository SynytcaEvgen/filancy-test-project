import "./searchForm.scss";

const SearchFrom = ({onSearch}) => {
    return (
        <div className="search">
            <div className="search__container">
                <form actions="" onSubmit={onSearch}>
                    <div className="input__wrapper">
                        <input type="text" className="search_input"/>
                    </div>
                    <div className="input_wrapper">
                        <input type="submit" className="btn btn__search" value="search" />
                    </div>
                </form>
            </div>
        </div>


    )
}

export default SearchFrom;