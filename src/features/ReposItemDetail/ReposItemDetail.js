import './reposItemDetail.scss'

const ReposItemDetail = () => {
    return (
    
        <div className="repos-item-detail">
            <div className="container">
                <a href="/" className="repos-item-detail__back"> Back to search</a>
                <div className="repos-item-detail__content">
                    <h2 className="repos-item-detail__title">Titele Repos</h2>
                    <div className="repos-item-detail__info">
                        <div className="column">
                            <div className="repos-item-detail__img">
                                <div className="img_wrapper">
                                    <img src="http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg" alt="/" />
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <ul className="repos-item-detail__desc">
                                <li className="desc_item">
                                    <span className="desc_item__q">Login:</span>
                                    <span className="desc_item__a">test</span>
                                </li>
                                <li className="desc_item">
                                    <span className="desc_item__q">Full name repos:</span>
                                    <span className="desc_item__a">test</span>
                                </li>
                                <li className="desc_item">
                                    <span className="desc_item__q">Description:</span>
                                    <span className="desc_item__a">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem placeat cupiditate distinctio ab dolor. Animi illum dolores, laboriosam aut ad possimus doloremque non enim rem necessitatibus commodi eos voluptatibus id!
                                    Quaerat, voluptates delectus ullam consectetur a ea excepturi minus totam ab incidunt omnis earum vero ipsam blanditiis veritatis harum nesciunt itaque molestiae beatae rerum tenetur. Vel minima nesciunt rerum exercitationem.
                                    Itaque molestias, rem repellendus, aliquid, quam quia porro quo laboriosam recusandae harum sit ullam! Tempora omnis quam praesentium soluta repellat laudantium odit. Libero nobis deserunt nulla consectetur odit earum neque!
                                    Nostrum consequuntur, omnis facilis commodi maiores, molestias dolorem minima laudantium repudiandae maxime iste. Voluptatem tempora, repudiandae voluptatum porro quasi quod totam, quaerat libero quis aliquid praesentium excepturi reiciendis quisquam hic.</span>
                                </li>
                                <li className="desc_item">
                                    <span className="desc_item__q">Created:</span>
                                    <span className="desc_item__a">test</span>
                                </li>
                                <li className="desc_item">
                                    <span className="desc_item__q">Last update:</span>
                                    <span className="desc_item__a">test</span>
                                </li>
                                <li className="desc_item">
                                    <span className="desc_item__q">Repos link:</span>
                                    <a href="/"className="desc_item__a link">test</a>
                                </li>
                                <li className="desc_item">
                                    <span className="desc_item__q">Language:</span>
                                     <span className="desc_item__a">test</span>
                                </li>
                                <li className="desc_item">
                                    <span className="desc_item__q">License:</span>
                                    <a href="/" className="desc_item__a link">test</a>
                                </li>
                                <li className="desc_item">
                                    <span className="desc_item__q">Downloads:</span>
                                    <a href="/"className="desc_item__a link">test</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReposItemDetail;