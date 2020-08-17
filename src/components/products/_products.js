import * as React from "react";
import { withRouter } from "react-router-dom";
import {Banner,ProductList} from './_style';
import Pagination from './Pagination';



const Products = ({
	banner,
	list,
	trigger,
	paginate,
	postPerPage,
	currentPost,
	goDetail
}) => {
	
	return (
    <>
		<Banner>
			<img src={banner.img} alt="banner"/>
			<h2>{banner.title}</h2>
			<p>{banner.desc}</p>
		</Banner>
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
							<div className="colors">{item.colors.length}컬러</div>
						</div>
					)
				})
			}
		</ProductList>
		<Pagination paginate={paginate} postPerPage={postPerPage} totalPosts={list.length}/>
    </>
	);
};

export default withRouter(Products);