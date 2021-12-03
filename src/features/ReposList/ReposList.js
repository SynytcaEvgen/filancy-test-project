// import { useMemo } from "react";
import ReposListItem from "../ReposListItem/ReposListItem";
import Spinner from "../Spinner/Spinner";

import {useGetRepositoriesQuery } from "../../app/apiSlice";

import './reposList.scss'

const ReposList = ({validQuery, coutPage}) => {
    const {
      data, isLoading, isError, isSuccess, error
    } = useGetRepositoriesQuery(validQuery, coutPage);
    console.log(coutPage);
    const elem = () => {
        if (isSuccess && data.items.length > 0) {
            const elem = data.items.map(item => {
                return(<ReposListItem
                    key={item.id}
                    name={item.name}
                    img={item.owner.avatar_url}
                    alt={item.owner.login}
                    rate={item.stargazers_count}
                />)
            })
            return elem;
        } else if (isSuccess && data.items.length === 0) {
            return <h5 className="not-fond-messeg">Repository not found</h5>
        } else if (isLoading) {
            return <Spinner/>
        } else if (isError) {
            return <h5 className="error-messeg">{error.data.message}</h5>
        }
    }
    return (
        <div className="repos-list">
            <h2 className="repos-list__title">Search result</h2>
            <div className="repos-list__result">
                {elem()}
            </div>
        </div>
    )
}

export default ReposList;