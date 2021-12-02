import ReposListItem from "../ReposListItem/ReposListItem";

import './reposList.scss'

const ReposList = () => {
    return (
        <div className="repos-list">
            <h2 className="repos-list__title">Search result</h2>
            <div className="repos-list__result">
                <ReposListItem/>
                <ReposListItem/>
            </div>
        </div>
    )
}

export default ReposList;