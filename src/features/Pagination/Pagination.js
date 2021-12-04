import {useGetRepositoriesQuery} from "../../app/apiSlice";

import "./pagination.scss";

const Pagination = ({coutPage, setCountPage}) => {
    const { data, isSuccess, refetch } = useGetRepositoriesQuery(
        [localStorage.searchQuery ? localStorage.searchQuery.replace(/["]/gi, '') : '',
            localStorage.coutPage ? localStorage.coutPage.replace(/["]/gi, '') : 1,
            localStorage.filter ? localStorage.filter.replace(/["]/gi, '') : '']
    );
    
    const onIncrementPage = (e) => {
        e.preventDefault();
        if (coutPage < allPage - 1) {
            setCountPage(state => +state + 1);
            refetch();
        }
    }
    
    const onDectimentPage = (e) => {
        e.preventDefault();
        if (coutPage > 1) {
            setCountPage(state => +state - 1);
            refetch();
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