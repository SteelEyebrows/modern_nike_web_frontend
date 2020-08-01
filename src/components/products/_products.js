import * as React from "react";
import useIntersection from 'react-use/lib/useIntersection';
import gsap, { Sine,TimelineMax,Linear,Power4 } from 'gsap';
import {ProductList} from './_style';
import Pagination from './pagination';

const list = [
	{
		name:"apple",
		image:"https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

	},{
		name:"windows",
		image:"https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

	},{
		name:"youtube",
		image:"https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

	},{
		name:"youtube",
		image:"https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

	},{
		name:"youtube",
		image:"https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

	},{
		name:"youtube",
		image:"https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

	},{
		name:"youtube",
		image:"https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

	},{
		name:"youtube",
		image:"https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

	},{
		name:"youtube",
		image:"https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

	}
]


const Products = ({}) => {
	const [ tween, setTween ] = React.useState();
	const [currentPage,setCurrentPage] = React.useState(1);
	const [postPerPage,setPostPerPage] = React.useState(6);
  	const trigger = React.useRef(null);
  
	const intersection = useIntersection(trigger, { //스크롤 반응
		root: null,
		rootMargin: '0px',
		threshold: 0.2,
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
		
		<ProductList ref={trigger}>
			{
				currentPost.map((item)=>{
					return(
						<div className="container">
							<img src={item.image} alt={item.name} className="image" />
							<div className="label">
								<div className="name"></div>
								<div className="price"></div>
							</div>
						</div>
					)
				})
			}
			<Pagination paginate={paginate} postPerPage={postPerPage} totalPosts={list.length}/>
		</ProductList>
    </>
	);
};

export default Products;