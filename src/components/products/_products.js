import * as React from "react";
import { withRouter } from "react-router-dom";
import {ProductList} from './_style';
import Pagination from './pagination';



const Products = ({
	list,
	trigger,
	paginate,
	postPerPage,
	currentPost,
	goDetail
}) => {
	
	return (
    <>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
		<ProductList ref={trigger}>
			{
				currentPost.map((item)=>{
					return(
						<div key={item.id} onClick={()=>goDetail(item.id,item.colors[0].color)} className="container">
							<img src={item.colors[0].images[0]} alt={item.name} className="image" />
							<div className="label">
								<div className="name">{item.name}</div>
								<div className="price">{item.price} 원</div>
							</div>
							{item.colors.length}컬러
						</div>
					)
				})
			}
			<Pagination paginate={paginate} postPerPage={postPerPage} totalPosts={list.length}/>
		</ProductList>
    </>
	);
};

export default withRouter(Products);