import React from 'react'
import ReactPaginate from 'react-paginate';
import Prev from '../Arrow/PrevArrow/Prev';
import Next from '../Arrow/NextArrow/Next';
import '././style.scss'

function PaginatedItems({ itemsPerPage, pageCount, onChange }) {
     
    return (
        <>
            {/* <Items currentItems={currentItems} /> */}


            <ReactPaginate
                nextLabel={<Next />}
                onPageChange={onChange}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel={<Prev />}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default PaginatedItems