import React, { useState } from "react";
import styled from "styled-components";
import Card from "./components/card";
import zar from "../../assets/pic/zartosht.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,EffectCoverflow, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
  let testCarousel =[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  let [havali, setHavali] = useState([])

  return (
    <Container>
      <Arrow className="PrevSlide">
        <span></span>
        <span></span>
        <span></span>
      </Arrow>

      <Swiper
      navigation={{
        nextEl: ".NextSlide",
        prevEl: ".PrevSlide"
      }
      }
        dir="rtl"
      centeredSlides={true}
      slidesPerView={7}
      spaceBetween={0}
      slidesPerGroup={1}
      loop={true}
      noSwiping={true}
      noSwipingSelector="div"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        modules={[Autoplay,Pagination,EffectCoverflow, Navigation]}
      className="mySwiper"

     onActiveIndexChange={(e)=> {
    let before1
    let next1
    let before2
    let next2
    let before3
    let next3

    before1 = e.realIndex - 1
    next1 = e.realIndex + 1
    next2 = e.realIndex + 2
    before2 = e.realIndex -2
    next3 = e.realIndex + 3
    before3 = e.realIndex -3
    
    if(next1 == 12){
      next3 = 0
    }
    if(next1 == 13){
      next2 = 0
      next3 = 1
    }
    if(next1 == 14){
      next1 = 0
      next2 = 1
      next3 = 2
    }
     if(before1 == -1){
        before1 = 13
        before2= 12
        before3= 11
      }
      if(before1 == 0){
        before2= 13
        before3= 12
      }
      if(before1 == 1){
        before2= 0
        before3= 13
      }
     setHavali([next3,next2, next1 , e.realIndex , before1, before2,before3])

}}
    >
      {
        
      }
    {testCarousel.map((i,index) =>{
      console.log(havali)
      
return (
      <SwiperSlide className={havali[0] == index ? "next3" :havali[1] == index ? "next2" : havali[2] == index ? 'next1' : havali[3] == index ? "now" : havali[4] == index ? "before1" : havali[5] == index ? "before2" : havali[6] == index ? "before3" : "none"}
       >
          <Card img={zar} title="زرتشت" />
      </SwiperSlide>)
    })}
    </Swiper>

      <Arrow className="NextSlide">
        <span></span>
        <span></span>
        <span></span>
      </Arrow>
    </Container>
  );
};

const Container = styled.div`
  width:85%;
  margin:auto;
  display: flex;
  justify-content: center;
  gap: 2.083vw;
  margin: 4.861vw auto;
  .now{
    transform: scale(1.6);
    transition: transform .5s;
    .imageincarousel{
        transform: scaleY(1);
        margin-top: 50px;
    }
}
.next1{
    transform: translateX(-62px) scaleX(.8);
    transition: transform .5s;
    .title{
        font-size: 1.5rem;
    }
    .imageincarousel{
        transform: scaleY(0.8);
    }
}

.before1{
    transform:  translateX(62px) scaleX(.8);
    transition: transform .5s;
    .title{
        font-size: 1.5rem;
    }
    .imageincarousel{
        transform: scaleY(0.8);
    }
}

.next2{
    transform:translateX(-42px)  scaleX(0.45);
    transition: transform 0s;
    .title{
        font-size: 1rem;
    }
    .imageincarousel{
        transform: scaleY(0.45);
    }
}

.before2{
    background-color: rgb(162, 255, 0);
    transform:translateX(42px)  scaleX(0.45);
    transition: transform 0s;
    .title{
        font-size: 1rem;
    }
    .imageincarousel{
        transform: scaleY(0.45);
    }
}

.next3{
    opacity: 1;
    transform:   translateX(10px) scaleX(0.3);
    transition: transform 0s;
    background-color: rgb(115, 0, 255);
    .title{
        font-size: .75rem;
    }
    .imageincarousel{
        transform: scaleY(0.3);
    }
}

.before3{
    transform: translateX(-10px)   scaleX(0.3);
    transition: transform 0s;
    background-color: rgb(115, 0, 255);
    opacity: 1;
    .title{
        font-size: .75rem;
    }
    .imageincarousel{
        transform: scaleY(0.3);
    }
}

.none{
    opacity: 0;
}

`;

const Arrow = styled.div`
  display: flex;
  gap: 0.694vw;
  align-items: center;
  span {
    width: 1.389vw;
    height: 1.389vw;
    background: ${(props) => props.theme.background[3]};
  }
`;

export default Carousel;
