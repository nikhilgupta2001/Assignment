import React from 'react';


const Pagination=({dataPerPage,totalData,paginate})=>{
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalData/dataPerPage);i++){
       pageNumbers.push(i);
    }
    return (
       <nav>
         <ul className="pagination">
         {/* <li className="page-item"><a onClick={()=>paginate()} class="page-link" href="#">Previous</a></li> */}
             {pageNumbers.map(number=>(
                 <li key={number} className="page-item">
                   <a  onClick={()=>paginate(number)} href="!#" className="page-link">
                       {number}
                   </a>
                 </li>
             ))}
             {/* <li className="page-item"><a class="page-link" onClick={()=>paginate(0)} href="#">Next</a></li> */}
         </ul>  
       </nav>
    )
}
export default Pagination;