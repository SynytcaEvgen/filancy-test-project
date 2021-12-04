// import { useMemo } from "react";
import ReposListItem from "../ReposListItem/ReposListItem";
import Spinner from "../Spinner/Spinner";

import {useGetRepositoriesQuery } from "../../app/apiSlice";

import './reposList.scss'

const ReposList = () => {
    const {
      data, isLoading, isError, isSuccess, error
    } = useGetRepositoriesQuery(
        [localStorage.searchQuery ? localStorage.searchQuery.replace(/["]/gi, '') : '',
            localStorage.coutPage ? localStorage.coutPage.replace(/["]/gi, '') : 1,
            localStorage.filter ? localStorage.filter.replace(/["]/gi, '') : '']
    );
    const elem = () => {
        if (isSuccess && data.items.length > 0) {
            const elem = data.items.map(item => {
                return(<ReposListItem
                    key={item.id}
                    name={item.name}
                    img={item.owner.avatar_url}
                    alt={item.owner.login}
                    rate={item.stargazers_count}
                    idItem={item.id}
                />)
            })
            return elem;
        } else if (isSuccess && data.items.length === 0) {
            return <h5 className="not-fond-messeg">Repository not found</h5>
        } else if (isLoading) {
            return <Spinner/>
        } else if (isError&&error.data.message==="Validation Failed") {
            return <h5 className="error-messeg">Please entering your request</h5>
        }else if (isError) {
            return <h5 className="error-messeg">{error.data.message}</h5>
        }
        
    }
    const toDom = elem();
    return (
        <div className="repos-list">
            <div className="repos-list__header">
                <h2 className="repos-list__title">Search result</h2>
                <div className="repos-list__subtitle">
                    Finded {data ? data.total_count : 0} repository results
                </div>
            </div>
            <div className="repos-list__result">
                {toDom}
            </div>
        </div>
    )
}

export default ReposList;