import React from 'react'

export const Pagination = ({ cardPerPage,totalPage,paginate, currpage }) => {
    
    const pageNumbers = [];
    for(let i=1; i<= Math.ceil(totalPage/cardPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className = "pagination">
            <i class="fas fa-chevron-circle-left"></i>
            {
                pageNumbers.map((number)=>(
                    <li key = {number}  className = {currpage === number ? 'active' : null } onClick={()=>paginate(number)} >
                    
                    {number}
                    
                    </li>
                ))
            }
            <i class="fas fa-chevron-circle-right"></i>
            </ul>
        </nav>
    )
}