import React, { useRef, useState,useEffect } from "react";
import styled from "styled-components";
import Card from "./components/card";
import zar from "../../assets/pic/zartosht.png";
import carouselData from "../../data/carousel.json";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,EffectCoverflow, Pagination, Navigation } from "swiper";
import PropTypes from "prop-types";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const Carousel = () => {
  const navigate = useNavigate();
  let [sequence, setSequence] = useState([])
let [main,setMain] = useState()
let [showModule,setShowModule] = useState(false)
  console.log(carouselData)
  const modal = useRef(null);
  useOutsideAlerter(modal);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowModule(false)
          // alert("You clicked outside of me!");
        }
      }
      
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        
      };
    }, [ref]);
  }
  
  return (
    <Container>
      <Arrow className="PrevSlide" onClick={() => {setShowModule(false)}}>
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
      // autoplay={{
      //   delay: 97500,
      //   disableOnInteraction: false,
      // }}
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
     setSequence([next3,next2, next1 , e.realIndex , before1, before2,before3])

}}
    >
      
    {carouselData.map((i,index) =>{
      
return (
      <SwiperSlide onClick={() => {setShowModule(true); setMain(index)}} className={sequence[0] == index ? "next3" :sequence[1] == index ? "next2" : sequence[2] == index ? 'next1' : sequence[3] == index ? "now" : sequence[4] == index ? "before1" : sequence[5] == index ? "before2" : sequence[6] == index ? "before3" : "none"}
       >
          <Card img={zar} title={carouselData[index].Philosopher} />
          
      </SwiperSlide>
       
      )
    })}
    </Swiper>
    {
      showModule &&
      <Module className="tooltip" ref={modal}>
        {/* Start of border top */}
        <div style={{marginTop:"-4.8%",borderTop:"2.9px solid #fe9900",display:"flex",width:"25%",justifyContent:"space-between"}}>
        </div>
        {/* End of border top */}
          <span style={{fontSize:"1.5rem", marginTop:"-4.5%",textAlign:'center',color:"#4f594e"}}>{carouselData[main].Philosopher}</span>
          <span style={{padding:"15px 5px", color:"#a58463"}}>
            {carouselData[main].info}
          </span>
        <BottomLinks>
            <CloseButton onClick={() => {setShowModule(false)}}>بستن</CloseButton>
            <More onClick={() => {setShowModule(false)
              navigate(`${carouselData.carousel[main].id}`);
            }}>ادامه</More>
        </BottomLinks>
       </Module>
    }
<Arrow className="NextSlide" >
        <span></span>
        <span></span>
        <span></span>
      </Arrow>
    </Container>
  );

  // OutsideAlerter.propTypes = {
  //   children: PropTypes.element.isRequired
  // };
};

const BottomLinks =styled.div`
display:flex;
width:98%;
margin:auto;
margin-bottom:-10px;
justify-content:space-between;
`

const CloseButton =styled.div`

// opacity:0;
`
const More =styled.div`
// opacity:0;
`

const Module =styled.div`
position:absolute;
top:75px;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
height:auto;
height:50%;
font-size:1rem;
width:34.5vw;
padding:20px 10px;
background-color:white;
border:3px solid #4f594e;


border-radius:7.5px;

z-index:10;
`

const Container = styled.div`

position:relative;
  width:85%;
  margin:auto;
  display: flex;
  justify-content: center;
  gap: 2.083vw;
  margin: 4.861vw auto;

  .now{
    transform: scale(1.6);
    transition: transform .5s;
    margin-top:-10px;
    .imageincarousel{
        transform: scaleY(1);
        margin-top: 50px;
    }
    .title{
    transform: scale(0.6);
      margin-top:-20px;
    }
    // .tooltip{
    //   // display:block;
    //   margin-top:-300px;
    //   // background-color:blue
    // }
    // :hover > .tooltip{
    //   display:block;
    // }
}
.next1{
  position:relative;
    transform: translateX(-62px) scaleX(.8);
    transition: transform .5s;
    .title{
      display:none;

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
      display:none;

    }
    .imageincarousel{
        transform: scaleY(0.8);
    }

}

.next2{
    transform:translateX(-42px)  scaleX(0.45);
    transition: transform 0s;
    .title{
      transform:scaleX(1.5);
        font-size: 1rem;
      display:none;

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
      transform:scaleX(1.5);
        font-size: 1rem;
      display:none;

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
      display:none;

        font-size: .75rem;
        transform:scaleX(2);
    }
    .imageincarousel{
        transform: scaleY(0.3);
    }
}
}

.before3{
    transform: translateX(-10px)   scaleX(0.3);
    transition: transform 0s;
    background-color: rgb(115, 0, 255);
    opacity: 1;
    .title{
      display:none;

        font-size: .75rem;
        transform:scaleX(2);
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
