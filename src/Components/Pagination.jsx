import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Card4 } from './Card4'; // adjust if Card4 is a default export

export const Pagination = ({ itemsPerPage = 6, products = [] }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const items = products;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-wrap gap-6">
        {currentItems.map((product) => (
          <Card4 key={product.id} item={product} />
        ))}
      </div> 
      {pageCount > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="flex gap-2.5 mt-6"
          pageClassName="px-6 py-1 bg-black text-white cursor-pointer rounded"
          activeClassName="bg-primary"
          previousClassName="cursor-pointer"
          nextClassName="cursor-pointer"
        />
      )}
    </>
  );
};