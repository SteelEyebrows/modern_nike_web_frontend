import * as React from "react";
import {StyledPagenation} from './_style';

const Pagination = ({postPerPage,totalPosts,paginate}) =>{
    const pageNumbers = [];

    for(let i =1; i<=Math.ceil(totalPosts/postPerPage);i++){
        pageNumbers.push(i);
    }

    return(
        <StyledPagenation>
            <ul>
                {
                    pageNumbers.map(num=>(
                        <li key={num}>
                            <button className="pageNav" onClick={()=>paginate(num)}>{num}</button>
                        </li>
                    ))
                }
            </ul>
        </StyledPagenation>
    )
}

export default Pagination;