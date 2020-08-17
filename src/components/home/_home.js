import * as React from "react";
import Slime from './Slime/_slime';
import {SectionSet,SectionOne,SectionTwo,NextButton,SlideInner,Image,Inner} from './_style';
import { withRouter } from "react-router-dom";
import Rotate from './Rotate';
import Slider from './Slider';
import gsap, { Sine,TimelineMax,Linear,Power4 } from 'gsap';


const Home = ({ 
  images,
  history 
}) => {

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
              <Rotate/>
              <Slime 
                image={images[1]&&images[1].img} 
                position="absolute" 
                right={-5} 
                top={-5} 
                size={40} 
                typenumber={1}  
                before={"rgba(0, 0, 0, 0.8)"} 
                after={"rgba(255, 255, 255, 0.8)"} 
                title={images[1].title} 
                desc={images[1].desc} 
                onClick={()=>history.push(images[1].link)}
                hover={true}
              />
              <Slime 
                image={images[2]&&images[2].img} 
                position="absolute" 
                left={-1} 
                top={20} 
                size={20} 
                typenumber={2} 
                before={"rgba(0, 0, 0, 0.8)"} 
                after={"rgba(255, 255, 255, 0.8)"}  
                title={images[2].title} 
                desc={images[2].desc} 
                onClick={()=>history.push(images[2].link)}
                hover={true}
              />
              <Slime 
                image={images[3]&&images[3].img} 
                position="absolute" 
                right={37} 
                bottom={17} 
                size={13} 
                typenumber={4} 
                before={"rgba(0, 0, 0, 0.8)"} 
                after={"rgba(255, 255, 255, 0.8)"}  
                title={images[3].title} 
                desc={images[3].desc} 
                onClick={()=>history.push(images[3].link)}
                hover={true}
              />
              <Slime 
                image={images[0]&&images[0].img} 
                position="absolute" 
                left={20} 
                bottom={2} 
                size={25} 
                typenumber={3} 
                before={"rgba(0, 0, 0, 0.8)"} 
                after={"rgba(255, 255, 255, 0.8)"}  
                title={images[0].title} 
                desc={images[0].desc} 
                onClick={()=>history.push(images[0].link)}
                hover={true}
              />
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
            {/* <Slider datalist={images.second} height="300px" auto speed={3000}>
              
            </Slider> */}
					</SectionTwo>
			</SectionSet>
		</>
    );
  };

export default withRouter(Home);