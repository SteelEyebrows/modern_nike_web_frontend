import * as React from "react";
import useIntersection from 'react-use/lib/useIntersection';
import gsap, { Sine,TimelineMax,Linear,Power4 } from 'gsap';
import { withRouter } from "react-router-dom";
import {ProductList} from './_style';
import Pagination from './pagination';



const Products = ({goDetail,list}) => {
	const [ tween, setTween ] = React.useState();
	const [currentPage,setCurrentPage] = React.useState(1);
	const [postPerPage,setPostPerPage] = React.useState(6);
  	const trigger = React.useRef(null);
  
	const intersection = useIntersection(trigger, { //스크롤 반응
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	});

	const indexOfLastPost =  currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const currentPost = list.slice(indexOfFirstPost,indexOfLastPost);
	const paginate = pageNumber => setCurrentPage(pageNumber);
	
	React.useEffect(
		() => {
		if(tween)tween.restart();
		if (intersection && intersection.isIntersecting) {
			setTween(
				gsap.to(".container", 0.3, {
					opacity: 1,
					y: 0,
					ease: Sine.easeIn,
					stagger: 0.2,
				}),
			);
		} else if (tween && tween.paused) {
			tween.reverse();
		}
		},
		[ intersection,currentPage ],
	);


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