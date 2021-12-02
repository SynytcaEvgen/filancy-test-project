import './reposFilter.scss';

const ReposFilter = () => {
    return (
        <div className="repos-filter">
            <div className="repos-filter__title">
                <p>Sort:</p>
            </div>
            <ul className="repos-filter__list">
                <li className="repos-filter__item active">By Name</li>
                <li className="repos-filter__item">By Date</li>
                <li className="repos-filter__item">By Rate</li>
            </ul>
        </div> 
    )
}

export default ReposFilter;