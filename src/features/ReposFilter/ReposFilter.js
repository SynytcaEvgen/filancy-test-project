import './reposFilter.scss';

const ReposFilter = ({filter, setFilter}) => {
    return (
        <div className="repos-filter">
            <div className="repos-filter__title">
                <p>Sort:</p>
            </div>
            <ul className="repos-filter__list">
                <li
                    className={filter === 'name' ? "repos-filter__item active" : "repos-filter__item"}
                    onClick={() => setFilter(state => state = 'name')}>
                    By Name
                </li>
                <li
                    className={filter === '' ? "repos-filter__item active" : "repos-filter__item"}
                    onClick={() => setFilter(state => state = '')}>
                    By Date
                </li>
                <li
                    className={filter === 'stargazers' ? "repos-filter__item active" : "repos-filter__item"}
                    onClick={() => setFilter(state => state = 'stargazers')}>
                    By Rate
                </li>
            </ul>
        </div> 
    )
}

export default ReposFilter;