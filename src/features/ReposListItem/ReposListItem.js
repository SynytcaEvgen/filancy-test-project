import { ReactComponent as Star } from './star.svg';
import { useState } from 'react';

import './reposListItem.scss'

const ReposListItem = ({name, img, rate, alt}) => {
    const [favState, setFavState] = useState(false);
    const onFavorite = (e) => {
        e.preventDefault();
        setFavState(state => !state);
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
                    <a href="/" className="btn btn-view-more">View More</a>
                    <a href="/"
                        className={favState ? "btn btn-add-favorite added-to-fav-list" : "btn btn-add-favorite"}
                        onClick={onFavorite}>
                        {favState ? "In favorites list" : "Add to favorites"}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ReposListItem;