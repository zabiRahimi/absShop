import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styleSliderHeader from './styleSliderHeader.module.css';

import s1 from "../../../assets/images/sliders/s1.jpg";
import m1 from "../../../assets/images/sliders/m1.jpg";
import l1 from "../../../assets/images/sliders/l1.jpg";
import xl1 from "../../../assets/images/sliders/xl1.jpg";
import s2 from "../../../assets/images/sliders/s2.jpg";
import s3 from "../../../assets/images/sliders/s3.jpg";
import s4 from "../../../assets/images/sliders/s4.jpg";



const SliderHeader = () => {
    const [currentSlide, setCurrentSlide]= useState(0);
    const settings={
        dots: true,
        className: styleSliderHeader.slider_header_fatak,
        arrows: false,
        // autoplay:true,
        fade:true,
        lazyLoad:'progressive',
        
        beforeChange:(current)=>{
            setCurrentSlide(current);
        },
        afterChange:(current)=>{
            setCurrentSlide(current);
        },
        pauseOnFocus:true,
        customPaging: function(index) {
            return (
            //   <a>
            //     <img src={process.env.PUBLIC_URL + `/images/flower${i + 1}.jpg`}  alt={`flower${i + 1}`} style={{width: '20px' , height: '20px'}} />
            //   </a>
            <a href="#" className={`${styleSliderHeader.slick_thumb_a} ${currentSlide === index ? styleSliderHeader.HFactive : ''}`}></a>
            // <button className={currentSlide === index ? styleSliderHeader.HFactive : ''}></button>
            );
          },

          dotsClass:`slick-dots ${styleSliderHeader.slick_thumb}`,
        

        
    }

    return (
        // <div className="containerMain">

            
            <div className={styleSliderHeader.container}>

                <Slider {...settings}>
                    <div>
                        <img src={s1} srcSet={`${s1} 768w,${m1} 1024w, ${l1} 2500w , ${xl1} 2501w`}  alt="car1" className={styleSliderHeader.img} />
                    </div>

                    <div>
                        <img src={s2} alt="car2" className={styleSliderHeader.img}/>
                    </div>

                    <div>
                        <img src={s3} alt="car3" className={styleSliderHeader.img}/>
                    </div>

                    <div>
                        <img src={s4} alt="car4" className={styleSliderHeader.img}/>
                    </div>

                    

                </Slider>
            </div>

        // </div>
    )
}

export default SliderHeader;