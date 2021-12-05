import { Link } from 'react-router-dom';
import Spinner from "../Spinner/Spinner";

import {useGetRepositoriesQuery} from "../../app/apiSlice";

import './reposItemDetail.scss'
const DeatailContent = ({ repData }) => {
    return (
        <>
            <h2 className="repos-item-detail__title">{repData.name}</h2>
            <div className="repos-item-detail__info">
                <div className="column">
                    <div className="repos-item-detail__img">
                        <div className="img_wrapper">
                            <img src={repData.owner.avatar_url} alt={repData.name} />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <ul className="repos-item-detail__desc">
                        <li className="desc_item">
                            <span className="desc_item__q">Login:</span>
                            <span className="desc_item__a">{repData.owner.login}</span>
                        </li>
                        <li className="desc_item">
                            <span className="desc_item__q">Full name repos:</span>
                            <span className="desc_item__a">{repData.full_name}</span>
                        </li>
                        <li className="desc_item">
                            <span className="desc_item__q">Description:</span>
                            <span className="desc_item__a">{repData.description === null ? "no description" : repData.description}</span>
                        </li>
                        <li className="desc_item">
                            <span className="desc_item__q">Created:</span>
                            <span className="desc_item__a">{repData.created_at.replace(/[T,Z]/gi, ' ')}</span>
                        </li>
                        <li className="desc_item">
                            <span className="desc_item__q">Last update:</span>
                            <span className="desc_item__a">{repData.updated_at.replace(/[T,Z]/gi, ' ')}</span>
                        </li>
                        <li className="desc_item">
                            <span className="desc_item__q">Repos link:</span>
                            <a href={repData.html_url} className="desc_item__a link">{repData.html_url}</a>
                        </li>
                        <li className="desc_item">
                            <span className="desc_item__q">Language:</span>
                            <span className="desc_item__a">{repData.language === null ? 'language not defined' : repData.language}</span>
                        </li>
                        <li className="desc_item">
                            <span className="desc_item__q">License:</span>
                            <span
                                className="desc_item__a">
                                {repData.license === null ? 'no license' : repData.license.name}
                            </span>
                        </li>
                        <li className="desc_item">
                            <span className="desc_item__q">Visibility:</span>
                            <span className="desc_item__a">{repData.visibility}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
const ReposItemDetail = () => {
    const { data,
        isSuccess,
        isLoading,
        isError,
        error,
        refetch } = useGetRepositoriesQuery(
           [localStorage.searchQuery ? localStorage.searchQuery.replace(/["]/gi, '') : '',
            localStorage.coutPage ? localStorage.coutPage.replace(/["]/gi, '') : 1,
            localStorage.filter ? localStorage.filter.replace(/["]/gi, '') : '']
        );
    
    const element = () => {
        if (isSuccess && data.items.length > 0) {
            const filtredDate = data.items.filter(item => item.id === +localStorage.clickId);
            const [repData] = filtredDate;
            return <DeatailContent repData={repData} />
        } else if (isSuccess && data.items.length === 0) {
            return <h5 className="not-fond-messeg">Repository not found</h5>
        } else if (isLoading) {
            return <Spinner />
        } else if (isError) {
            return <h5 className="error-messeg">{error.data.message}</h5>
        }
    };
    
    const toDom = element();

    return (
        <div className="repos-item-detail">
            <div className="container">
                <Link to="/" className="repos-item-detail__back" onClick={refetch}> Back to search</Link>
                <div className="repos-item-detail__content">
                    {toDom}
                </div>
            </div>
        </div>
    )
}

export default ReposItemDetail;