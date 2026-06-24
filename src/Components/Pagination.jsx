import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

export const Pagination = ({ itemsPerPage, products }) => {
  const items = products; // use the real data instead of the hardcoded array

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
            </div>
          ))}
      </>
    );
  }

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};