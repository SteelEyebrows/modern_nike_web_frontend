import * as React from "react";
import Slime from './slime/_slime';
import Navigation from '../navigation';
import {SectionSet,SectionOne,SectionTwo,NextButton,SlideInner,Image,Inner} from './_style';
import { withRouter } from "react-router-dom";
import Slider from './slider';
import gsap, { Sine,TimelineMax,Linear,Power4 } from 'gsap';

const datalist=[
  {
    title:"OFF WHITE",
    desc:"description",
    gradation:"linear-gradient(#33ccff, #ff9900)",
    image:"https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png"
  },
  {
    title:"OFF WHITE",
    desc:"description",
    gradation:"linear-gradient(#33ccff, #ff9900)",
    image:"https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Air-Force-1-Off-White-Volt-1_2000x.png?v=1545054586"
  },
  {
    title:"OFF WHITE",
    desc:"description",
    gradation:"linear-gradient(#33ccff, #ff9900)",
    image:"https://www.stadiumgoods.com/cdn-cgi/image/fit%3Dcontain%2Cformat%3Dauto%2Cwidth%3D720/media/catalog/product/a/j/aj4585_101_8e_1.png"
  },
  {
    title:"OFF WHITE",
    desc:"description",
    gradation:"linear-gradient(#33ccff, #ff9900)",
    image:"https://images.restocks.eu/products/CT0856-600/nike-dunk-low-off-white-university-red-2-1000.png"
  },
  {
    title:"OFF WHITE",
    desc:"description",
    gradation:"linear-gradient(#33ccff, #ff9900)",
    image:"https://www.stadiumgoods.com/cdn-cgi/image/fit%3Dcontain%2Cformat%3Dauto%2Cwidth%3D720/media/catalog/product/a/a/aa3832_700_1.png"
  },
]

const Home = ({ images }) => {

	const nextSlide=()=>{
		var tl = new TimelineMax()
			.to({}, 2, {})	
			.to( ".set" , 0.5, {
					marginLeft:'-100%',
					ease: Sine.easeIn,
					stagger: 0.2,
				})
	}
  return (
    <>
    <SectionSet className="set">			 
          <SectionOne>
            <div>
              <Slime image={images[0]&&images[0].url} position="absolute" right={-5} top={-5} size={40} typenumber={1}  title={"Animating"} disc={"Animating"} hover={true}/>
              <Slime image={images[1]&&images[1].url} position="absolute" left={-1} top={20} size={20} typenumber={2} before={"rgba(255, 255, 255, 0.8)"} after={"rgba(15, 96, 158, 0)"} title={"Animating"} disc={"Animating"} hover={true}/>
              <Slime image={images[1]&&images[1].url} position="absolute" right={40} bottom={20} size={10} typenumber={4} before={"rgba(255, 255, 255, 0.8)"} after={"rgba(218, 146, 37, 0)"} title={"Animating"} disc={"Animating"} hover={true}/>
              <Slime image={images[1]&&images[1].url} position="absolute" left={20} bottom={2} size={25} typenumber={3} before={"rgba(255, 255, 255, 0.8)"} after={"rgba(218, 146, 37, 0)"} title={"Animating"} disc={"Animating"} hover={true}/>
            </div>
              <NextButton> 
                <a href="#">
                  <svg onClick={nextSlide} width="220" height="60" viewBox="0 0 220 60">
                    <circle cx="30" cy="30" r="30" fill="#fff" />
                    <line x1="38" y1="30" x2="38" y2="30" stroke-width="4" stroke="#262626" stroke-linecap="round" stroke-linejoin="round"/>
                    <polyline id="start" points="27 20 38 30 27 40" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="#262626" stroke-width="4"/>
                  </svg>
                </a>
              </NextButton>
          </SectionOne>

					<SectionTwo>
            <Slider datalist={datalist} height="300px" auto speed={3000}>
              
            </Slider>
					</SectionTwo>
			</SectionSet>
		</>
    );
  };

export default withRouter(Home);