import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Card4 } from './Card4';

export const Pagination = ({itemsParPage, item}) =>{
  const items = item;
  function Items({currentItems}){
    return(
      <>
      <div className='flex flex-wrap justify-center gap-6 mb-10'></div>
      <Card4 key={item.id} item={item}/>
      </>
    );
  }
  const[itemOffset, setItemOffset] = useState (0);
  const endOffset = itemOffset + itemsParPage;
  console.log(`Loading item from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset,endOffset);
  const pageCount = Math.ceil(items.lenght / itemsParPage);
  const handlePageClick =(event) => {
    const newOffset = (event.selected * itemsParPage) % items.lenght;
    console.log(
      `User requrested page number ${event.selected}, whice is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel='...'
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='< previous'
        renderOnZeroPageCount={null}
        className='flex gap-2.5'
        pageClassName='px-6.25 py-0.5 bg-black text-white cursor-pointer'
      />
    </>
  );

  
}


  
