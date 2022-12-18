import React, { useState } from "react";
import styled from "styled-components";
import Card from "./components/card";
import zar from "../../assets/pic/zartosht.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.scss"
// import "./styles.css";

const Carousel = () => {
  let mamad =[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  let [main, setMain]= useState(0)
  let [havali, setHavali] = useState([])
  // let ghabli=13
  // let ghabli2=12
  // let badi =1
  // let badi2=2


  return (
    <Container>
      {/* <Arrow>
        <span></span>
        <span></span>
        <span></span>
      </Arrow> */}


      <Swiper
        dir="rtl"
      centeredSlides={true}
      slidesPerView={7}
      spaceBetween={0}
      slidesPerGroup={1}
      loop={true}
      // pagination={{
      //   clickable: true,
      // }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation={true}
        modules={[Pagination,EffectCoverflow, Navigation]}
      className="mySwiper"
    //  initialSlide={0}
     onActiveIndexChange={(e)=> {console.log(e.realIndex)
    //  setMain(e.realIndex)
    let ghabli
    let badi
    let ghabli2
    let badi2
    let ghabli3
    let badi3

    ghabli = e.realIndex - 1
    badi = e.realIndex + 1
    badi2 = e.realIndex + 2
    ghabli2 = e.realIndex -2
    badi3 = e.realIndex + 3
    ghabli3 = e.realIndex -3
    
    if(badi == 12){
      badi3 = 0
    }
    if(badi == 13){
      badi2 = 0
      badi3 = 1
    }
    if(badi == 14){
      badi = 0
      badi2 = 1
      badi3 = 2
    }
     if(ghabli == -1){
        ghabli = 13
        ghabli2= 12
        ghabli3= 11
      }
      if(ghabli == 0){
        ghabli2= 13
        ghabli3= 12
      }
      if(ghabli == 1){
        ghabli2= 0
        ghabli3= 13
      }
     setHavali([badi3,badi2, badi , e.realIndex , ghabli, ghabli2,ghabli3])

}}
    >
      {
        
      }
    {mamad.map((i,index) =>{
      console.log(havali)
      
return (
      <SwiperSlide className={havali[0] == index ? "badi3" :havali[1] == index ? "badi2" : havali[2] == index ? 'badi' : havali[3] == index ? "alan" : havali[4] == index ? "ghabli" : havali[5] == index ? "ghabli2" : havali[6] == index ? "ghabli3" : "hich"}
       >
          <Card img={zar} index={index} title="زرتشت" />
          {/* <h1 style={{zIndex:"100",backgroundColor:"red"}}> */}

          {/* {index} */}
          {/* </h1> */}
          
      </SwiperSlide>)
    })}
    </Swiper>

      {/* <Gallery>
        <Card img={zar} title="زرتشت" />
        <Card img={zar} title="زرتشت" />
        <Card img={zar} title="زرتشت" />
        <Card img={zar} title="زرتشت" />
        <Card img={zar} title="زرتشت" />
        <Card img={zar} title="زرتشت" />
        <Card img={zar} title="زرتشت" />
      </Gallery> */}

      {/* <Arrow>
        <span></span>
        <span></span>
        <span></span>
      </Arrow> */}
    </Container>
  );
};

const Container = styled.div`
  width:70%;
  margin:auto;
  display: flex;
  // align-items:flex-end;
  // padding:0 40px;
  // border:9px solid red;
  justify-content: center;
  gap: 2.083vw;
  margin: 4.861vw auto;
`;

const Gallery = styled.div`
  width: 70%;
  display: flex;
  // gap: 2.083vw;
  overflow-x: auto;
`;

const Arrow = styled.div`
  display: flex;
  // gap: 0.694vw;
  align-items: center;

  span {
    width: 1.389vw;
    height: 1.389vw;
    background: ${(props) => props.theme.background[3]};
  }
`;

export default Carousel;
