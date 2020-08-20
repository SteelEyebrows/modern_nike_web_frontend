import React,{useEffect,useState,useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { productsAction,detailAction } from "../../store/actions";
import { withRouter } from "react-router-dom";
import {Products} from '../../components';
import useIntersection from 'react-use/lib/useIntersection';
import gsap, { Sine } from 'gsap';
import {Loading} from '../../components/Common';

const ProductContainer = ({history,match}) =>{

//**********data****************

    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();

    const getProducts =(sex)=>dispatch(productsAction.productsRequest(sex));
    const resetDetail =()=>dispatch(detailAction.detailSuccess({}));

    useEffect(() => {
        getProducts(match.params.direction);
        resetDetail();
    },[]);

//**********animation****************

    const [ tween, setTween ] = useState();
	const [currentPage,setCurrentPage] = useState(1);
	const [postPerPage,setPostPerPage] = useState(6);
  	const trigger = useRef(null);
  
	const intersection = useIntersection(trigger, { //스크롤 반응
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	});
    const indexOfLastPost =  currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const currentPost = data.list.slice(indexOfFirstPost,indexOfLastPost);
	const paginate = pageNumber => setCurrentPage(pageNumber);
    
    useEffect(
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
    
//**********router****************

    const goDetail=(id,color)=>history.push(`/detail/${id}/${color}`);

    return(
        <>
        {
            data.isFatching?
            <Loading />:
            <Products 
                banner={data.banner}
                list={data.list}
                trigger={trigger}
                paginate={paginate}
                postPerPage={postPerPage}
                currentPost={currentPost}
                goDetail={goDetail} 
            />
        } 
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    banner:rootReducer.products.banner,
    list:rootReducer.products.list
});

export default withRouter(ProductContainer);
