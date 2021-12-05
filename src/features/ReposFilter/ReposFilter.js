import { useGetRepositoriesQuery } from "../../app/apiSlice";

import './reposFilter.scss';

const ReposFilter = ({ filter, setFilter }) => {
    const { refetch } = useGetRepositoriesQuery(
            [localStorage.searchQuery ? localStorage.searchQuery.replace(/["]/gi, '') : '',
            localStorage.coutPage ? localStorage.coutPage.replace(/["]/gi, '') : 1,
            localStorage.filter ? localStorage.filter.replace(/["]/gi, '') : '']
    );

    return (
        <div className="repos-filter">
            <div className="repos-filter__title">
                <p>Sort:</p>
            </div>
            <ul className="repos-filter__list">
                <li
                    className={filter === 'updated' ? "repos-filter__item active" : "repos-filter__item"}
                    onClick={() => {
                        setFilter(state => state = 'updated');
                        refetch();
                    }}>
                    By Date
                </li>
                <li
                    className={filter === 'forks' ? "repos-filter__item active" : "repos-filter__item"}
                    onClick={() => {
                        setFilter(state => state = 'forks');
                        refetch();
                    }}>
                    By Forks
                </li>
                <li
                    className={filter === 'stars' ? "repos-filter__item active" : "repos-filter__item"}
                    onClick={() => {
                        setFilter(state => state = 'stars');
                        refetch();
                    }}>
                    By Stars
                </li>
            </ul>
        </div> 
    )
}

export default ReposFilter;