import "./pagination.scss";

const Pagination = () => {
    return (
        <div className="pagination">
            <div className="pagination__container">
                <a className="previous_page disabled" href="/">Previous</a>
                <div className="page-state">
                    <span className="pagination__text current-page">1</span>
                    <span className="pagination__text">of</span>
                    <span className="pagination__text all-pages">100</span>
                    <span className="pagination__text">pages</span>
                </div>
                <a className="next_page active" href="/">Next</a>
            </div>
        </div>
    )
}

export default Pagination;