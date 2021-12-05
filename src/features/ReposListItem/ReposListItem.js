import { ReactComponent as Star } from './star.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './reposListItem.scss'

const ReposListItem = ({idItem, name, img, rate, alt}) => {
    const [favState, setFavState] = useState(false);
    const onFavorite = (e) => {
        e.preventDefault();
        setFavState(state => !state);
        localStorage.setItem(`${idItem}`, !favState)
    };
    const getStoregFav = (id) => {
        let res = localStorage.getItem(`${id}`);
        return res;
    }

    return (
        <div className="repos-item">
            <div className="repos-item__img">
                <div className="img_wrapper">
                    <img src={img} alt={alt} />
                </div>
            </div>
            <div className="repos-item__desc">
                <div className="row head">
                    <div className="repos-item__name">
                        <a href="/">{name}</a>
                    </div>
                    <div className="repos-item__rate">
                        <div className="rate-star">
                            <Star />
                            <span className="text">Star</span>
                        </div>
                        <div className="rate-quantity">
                            <span className="text">{rate}</span>
                        </div>
                    </div>
                </div>
                <div className="row bottom">
                    <Link
                        to="detail"
                        className="btn btn-view-more"
                        onClick={() => localStorage.setItem("clickId", JSON.stringify(idItem))}>
                        View More
                    </Link>
                    <a href="/"
                        className={getStoregFav(idItem) === 'true' ? "btn btn-add-favorite added-to-fav-list" : "btn btn-add-favorite"}
                        onClick={onFavorite}>
                        {getStoregFav(idItem) === 'true' ? "In favorites list" : "Add to favorites"}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ReposListItem;