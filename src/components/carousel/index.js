import React, { useRef, useState,useEffect } from "react";
import styled from "styled-components";
import Card from "./components/card";
import zar from "../../assets/pic/zartosht.png";
import carouselData from "../../data/Philosophers.js";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,EffectCoverflow, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
  const navigate = useNavigate();
  let [sequence, setSequence] = useState([])
  let [sequenceTablet, setSequenceTablet] = useState([])
  let [main,setMain] = useState()
  let [showModule,setShowModule] = useState(false)
  const modal = useRef(null);

  const [screenWidthSize, setScreenWidthSize] = useState(window.innerWidth);
  const updateMedia = () => {
    setScreenWidthSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useOutsideAlerter(modal);
  let lengthOfPhilsophesArray = carouselData.length

  function useOutsideAlerter(ref) {
    useEffect(() => {

      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowModule(false)
        }
      }
      
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  
  return (
    <Container>
      <Arrow className="PrevSlide" >
        <span></span>
        <span></span>
        <span></span>
      </Arrow>
    {600 > screenWidthSize ? 
      <MobileCarousle>
        <Swiper
          navigation={{
            nextEl: ".NextSlide",
            prevEl: ".PrevSlide"
          }
          }
            dir="rtl"
          slidesPerView={1}
          spaceBetween={15}
          slidesPerGroup={1}
          loop={true}
          noSwiping={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
            modules={[Autoplay,Pagination,EffectCoverflow, Navigation]}
          className="mySwiper">

            {carouselData.map((i,index) =>{
      
      return (
            <SwiperSlide key={i} onClick={() => {setShowModule(true); setMain(index)}}
             >
                <Card img={zar} title={carouselData[index].Philosopher} />
            </SwiperSlide>
        )
      })
    }
        </Swiper>
    </MobileCarousle> : 
     800 > screenWidthSize ? 
    <TabletCarousle>
    <Swiper
          id="tabletswiper"
          navigation={{
            nextEl: ".NextSlide",
            prevEl: ".PrevSlide"
          }
        }
          dir="rtl"
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={15}
          slidesPerGroup={1}
          loop={true}
          noSwiping={false}
          autoplay={{
            delay: 4000,
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
            
            if(next1 == lengthOfPhilsophesArray - 2){
              next3 = 0
            }
            if(next1 == lengthOfPhilsophesArray - 1){
              next2 = 0
              next3 = 1
            }
            if(next1 == lengthOfPhilsophesArray){
              next1 = 0
              next2 = 1
              next3 = 2
            }
             if(before1 == -1){
                before1 = lengthOfPhilsophesArray - 1
                before2= lengthOfPhilsophesArray - 2
                before3= lengthOfPhilsophesArray - 3 
              }
              if(before1 == 0){
                before2= lengthOfPhilsophesArray - 1
                before3= lengthOfPhilsophesArray - 2
              }
              if(before1 == 1){
                before2= 0
                before3 = lengthOfPhilsophesArray - 1
              }
              setSequenceTablet([next3, next2, next1 , e.realIndex , before1, before2, before3])
        
        }}
          >

            {carouselData.map((i,index) =>{
              
              return (
                <SwiperSlide  key={i} onClick={() => {setShowModule(true); setMain(index)}} className={sequenceTablet[1] == index ? "tabletnext2" : sequenceTablet[2] == index ? 'tabletnext1' : sequenceTablet[3] == index ? "tabletnow" : sequenceTablet[4] == index ? "tabletbefore1" : sequenceTablet[5] == index ? "tabletbefore2" : "tabletnone"}
                >
                <Card img={zar} title={carouselData[index].Philosopher} />
            </SwiperSlide>
        )
      })
    }
    </Swiper>
    </TabletCarousle>
    : 
    <Swiper
    id="swiper"
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
      delay: 224000,
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
  
  if(next1 == lengthOfPhilsophesArray - 2){
    next3 = 0
  }
  if(next1 == lengthOfPhilsophesArray - 1){
    next2 = 0
    next3 = 1
  }
  if(next1 == lengthOfPhilsophesArray){
    next1 = 0
    next2 = 1
    next3 = 2
  }
   if(before1 == -1){
      before1 = lengthOfPhilsophesArray - 1
      before2 = lengthOfPhilsophesArray - 2
      before3 = lengthOfPhilsophesArray - 3 
    }
    if(before1 == 0){
      before2 = lengthOfPhilsophesArray - 1
      before3 = lengthOfPhilsophesArray - 2
    }
    if(before1 == 1){
      before2 = 0
      before3 = lengthOfPhilsophesArray - 1
    }
   setSequence([next3, next2, next1 , e.realIndex , before1, before2, before3])

}}
  >
    
  {carouselData.map((i,index) =>{
    
return (
    <SwiperSlide key={i} onClick={() => {setShowModule(true); setMain(index)}} className={sequence[0] == index ? "next3" :sequence[1] == index ? "next2" : sequence[2] == index ? 'next1' : sequence[3] == index ? "now" : sequence[4] == index ? "before1" : sequence[5] == index ? "before2" : sequence[6] == index ? "before3" : "none"}
     >
        <Card img={zar} title={carouselData[index].Philosopher} />
        
    </SwiperSlide>
     
    )
  })}
  </Swiper>

}
    

    {
      showModule &&
      <Module className="tooltip" ref={modal}>
          <BorderTop/>
          <Philosopher>{carouselData[main].Philosopher}</Philosopher>
          <ShortInfo>{carouselData[main].shortInfo}</ShortInfo>
        
        <BottomLinks>
            <CloseButton onClick={() => {setShowModule(false)}}>بستن</CloseButton>
            <More onClick={() => {
              navigate(`${carouselData[main].id + 1}`);
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

};

const ShortInfo =styled.span`
padding:15px 5px; 
color:#a58463;
font-size:1.1rem;
@media (max-width: 600px){
  font-size:1.2rem;
}
`

const Philosopher =styled.span`
font-size:1.5rem; 
margin-top:-4.5% ; 
text-align:center;
color:#4f594e;
@media (min-width: 600px) and (max-width: 800px){
  margin-top:-7% ; 
}
@media (max-width: 600px){
  margin-top:-11.5% ;
  margin-top:-27px;
  font-size:1.75rem; 

}
`

const BorderTop =styled.div`
margin-top:-23px;
border-top:2.9px solid #fe9900 ;
display:flex;
 width:25%;
justify-content:space-between;
@media (max-width: 600px){
  width:40%;
}
`


const BottomLinks =styled.div`
display:flex;
width:98%;
margin:auto;
margin-bottom:-10px;
justify-content:space-between;
`

const CloseButton = styled.div`
@media (max-width: 600px){
  font-size:1.25rem;
}

`
const More = styled.div`
@media (max-width: 600px){
  font-size:1.25rem;
}
`

const MobileCarousle = styled.div`
@media (max-width: 600px){
  display:block;
}
width:70vw;
height:45vh;
` 

const TabletCarousle = styled.div`
width:70vw;
height:auto;

.tabletnow{
  transform: scaleX(1.2);
  transition: transform .5s;
  :hover{
    cursor: pointer;
  }
  .imageincarousel{
      transform: scaleY(1.2);
  }
  .title{
  transform: scaleY(1.2);
  
  }
}

.tabletnone{
  transform: translateX(0px) scaleX(0.8);
  transition: transform .5s;
  margin-left: -10px;
  .title{
    display:none;
      font-size: 1.5rem;
  }
  .imageincarousel{
    transform: scaleY(0.8);
    transition: transform .5s;
}}

.tabletnext1{
  position:relative;
  transform: translateX(-7px) scaleX(.8);
  transition: transform .5s;

  :hover{
    cursor: pointer;
  }
  .title{
    display:none;
      font-size: 1.5rem;
  }
  .imageincarousel{
      transform: scaleY(0.8);
      transition: transform .5s;
  }
}

.tabletbefore1{
  transform: translateX(7px) scaleX(.8);
  transition: transform .5s;
  :hover{
    cursor: pointer;
  }
  .title{
    display:none;
  }
  .imageincarousel{
      transform: scaleY(0.8);
      transition: transform .5s;
  }
}
.tabletnext2{
  transform: scaleX(0.8);
  transition: transform 0s;
  :hover{
    cursor: pointer;
  }
  .title{
    transform:scaleX(1.5);
      font-size: 1rem;
    display:none;

  }
  .imageincarousel{
      transform: scaleY(0.8);
  }
}

.tabletbefore2{
  transform: scaleX(0.8);
  transition: transform 0s;
  :hover{
    cursor: pointer;
  }
  .title{
    transform:scaleX(1.5);
      font-size: 1rem;
    display:none;

  }
  .imageincarousel{
      transform: scaleY(0.8);
  }
}
`

const Module = styled.div`
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

@media (min-width: 600px) and (max-width: 800px){
  top:135px;
  width:53.5vw;
  height:auto;
}

@media (max-width: 600px){
  width:63.5vw;
  height:auto;
  min-height:30vh;
}
`

const Container = styled.div`
  position:relative;
  width:85%;
  margin:auto;
  display: flex;
  justify-content: center;
  gap: 2.083vw;
  margin: 0auto ;

 
  @media (max-width: 600px){
    margin: 4.861vw auto 5vh ;
  }

  #swiper{
    @media (max-width: 800px){
      display:none;
    }
  }


  .now{
    transform: scale(1.6);
    transition: transform .5s;
    margin-top:-10px;
    :hover{
      cursor: pointer;
    }
    .imageincarousel{
        transform: scaleY(1);
        margin-top: 50px;
    }
    .title{
    transform: scale(0.6);
      margin-top:-20px;
    }
}

.next1{
  position:relative;
  
    transform: translateX(-45%) scale(.8,1);
    transition: transform .5s;
    :hover{
      cursor: pointer;
    }
    .title{
      display:none;
        font-size: 1.5rem;
    }
    .imageincarousel{
        transform: scaleY(0.8);
    }
}

.before1{
    transform: translateX(45%)  scale(.8,1);;
    transition: transform .5s;
    :hover{
      cursor: pointer;
    }
    .title{
        font-size: 1.5rem;
      display:none;
    }
    .imageincarousel{
        transform: scaleY(0.8);
    }
}

.next2{
    transform: translateX(-30%) scale(.45,1);;
    transition: transform .5s;
    :hover{
      cursor: pointer;
    }
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
    transform: translateX(30%) scale(.45,1);
    transition: transform .5s;
    :hover{
      cursor: pointer;
    }
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
    transform: translateX(8%) scale(.3,1);
    transition: transform .5s;
    background-color: rgb(115, 0, 255);
    :hover{
      cursor: pointer;
    }
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
    transform: translateX(-8%) scale(.3,1);
    transition: transform .5s;
    background-color: rgb(115, 0, 255);
    :hover{
      cursor: pointer;
    }
    
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
  :hover{
    cursor: pointer;
  }
  span {
    width: 1.389vw;
    height: 1.389vw;
    background: ${(props) => props.theme.background[3]};
  }
  @media (max-width: 600px){
    span {
      width: 3.389vw;
      height: 3.389vw;
    }
  }
`;

export default Carousel;
