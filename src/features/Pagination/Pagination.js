
import {useGetRepositoriesQuery} from "../../app/apiSlice";


import "./pagination.scss";

const Pagination = ({validQuery, coutPage, setCountPage}) => {
    
    const { data, isSuccess } = useGetRepositoriesQuery(validQuery);

    const onIncrementPage = (e) => {
        e.preventDefault();
        if (coutPage < allPage - 1) {
            setCountPage(state => state + 1);
        }
    }

    const onDectimentPage = (e) => {
        e.preventDefault();
        if (coutPage > 1) {
            setCountPage(state => state - 1);
        }
    }
    const allPage = isSuccess ? data.total_count / data.items.length  : 1;

    return (
        <div className="pagination">
            <div className="pagination__container">
                <a className={ coutPage > 1 ? "previous_page active" : "previous_page disabled"} href="/" onClick={onDectimentPage}>Previous</a>
                <div className="page-state">
                    <span className="pagination__text current-page">{coutPage}</span>
                    <span className="pagination__text">of</span>
                    <span className="pagination__text all-pages">{Math.round(allPage)}</span>
                    <span className="pagination__text">pages</span>
                </div>
                <a className={ coutPage < allPage - 1 ? "next_page active" : "next_page disabled" } href="/" onClick={onIncrementPage}>Next</a>
            </div>
        </div>
    )
}

export default Pagination;