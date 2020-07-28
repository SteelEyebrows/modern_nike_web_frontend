import * as React from "react";
import Slime from './_slime';
import Navigation from '../navigation';
import {SectionSet,SectionOne,SectionTwo,NextButton} from './_style';
import gsap, { Sine,TimelineMax,Linear,Power4 } from 'gsap';

const Home = ({ departments,images }) => {

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
    <Navigation/>
    <SectionSet className="set">			 
          <SectionOne>
            <div>
              <Slime image={images[0]&&images[0].url} right={-5} top={-5} size={40} typenumber={1}  title={"Animating"} disc={"Animating"}/>
              <Slime image={images[1]&&images[1].url} left={-1} top={20} size={20} typenumber={2} before={"rgba(255, 255, 255, 0.8)"} after={"rgba(15, 96, 158, 0)"} title={"Animating"} disc={"Animating"}/>
              <Slime image={images[1]&&images[1].url} right={40} bottom={20} size={10} typenumber={4} before={"rgba(255, 255, 255, 0.8)"} after={"rgba(218, 146, 37, 0)"} title={"Animating"} disc={"Animating"}/>
              <Slime image={images[1]&&images[1].url} left={20} bottom={2} size={25} typenumber={3} before={"rgba(255, 255, 255, 0.8)"} after={"rgba(218, 146, 37, 0)"} title={"Animating"} disc={"Animating"}/>
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
              <div>
                  dd
              </div> 
					</SectionTwo>
			</SectionSet>
		</>
    );
  };

export default Home;