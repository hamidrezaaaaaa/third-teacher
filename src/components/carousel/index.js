import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./components/card";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import { BaseBackURL } from "../../constant/api";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  let [sequence, setSequence] = useState([]);
  let [sequenceTablet, setSequenceTablet] = useState([]);
  let [main, setMain] = useState();
  let [showModule, setShowModule] = useState(false);
  let [carouselData, setCarouselData] = useState([]);
  let [desktopCarousleNumber, setDesktopCarousleNumber] = useState(7);
  let [tabletCarousleNumber, setTabletCarousleNumber] = useState(5);
  let [lengthOfCarousel, setLengthOfCarousel] = useState();
  const [swiper, setSwiper] = useState(null);

  const slideTo = (index) => {
    console.log("inside", index);
    if (swiper) swiper.slideTo(index);
  };

  const getCarouselData = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}philosophes/`,
    };
    axios(config)
      .then((res) => {
        let array = [];
        if (res.data.length == 2) {
          array = res.data;
          array[2] = array[0];
          array[3] = array[1];
        } else {
          array = res.data;
        }

        setCarouselData(array);
        setLengthOfCarousel(array.length);
      })
      .catch((err) => {
        "";
        console.log(err);
      });
  };

  const getSecondCarouselData = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}schools/`,
    };
    axios(config)
      .then((res) => {
        let array = [];
        if (res.data.length == 2) {
          array = res.data;
          array[2] = array[0];
          array[3] = array[1];
        } else {
          array = res.data;
        }

        setCarouselData(array);
        setLengthOfCarousel(array.length);
      })
      .catch((err) => {
        "";
        console.log(err);
      });
  };

  useEffect(() => {
    if (title == "philosophy") {
      getCarouselData();
    } else {
      getSecondCarouselData();
    }
  }, [title]);

  let newArray = [];
  for (let i in carouselData) {
    newArray[i] = +i;
  }

  if (newArray.length == 2) {
    newArray[2] = newArray[0];
    newArray[3] = newArray[1];
  }

  useEffect(() => {
    if (screenWidthSize > 768) {
      let array = [];
      let b = 0;
      for (
        let i = carouselData.length - desktopCarousleNumber;
        i < carouselData.length;
        i++
      ) {
        array[b] = i;
        b = b + 1;
      }
      setSequence(array);
      if (5 > lengthOfCarousel) {
        setDesktopCarousleNumber(3);
      } else if (7 > lengthOfCarousel) {
        setDesktopCarousleNumber(5);
      }
    }

    if (screenWidthSize > 481) {
      let array = [];
      let b = 0;
      for (
        let i = carouselData.length - tabletCarousleNumber;
        i < carouselData.length;
        i++
      ) {
        array[b] = i;
        b = b + 1;
      }
      setSequenceTablet(array);
      if (5 > lengthOfCarousel) {
        setTabletCarousleNumber(3);
      }
    }
  }, [carouselData, desktopCarousleNumber, tabletCarousleNumber]);

  const modal = useRef(null);

  const [screenWidthSize, setScreenWidthSize] = useState(window.innerWidth);
  const updateMedia = () => {
    setScreenWidthSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  },[]);

  useOutsideAlerter(modal);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowModule(false);
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
      <Arrow className="PrevSlide">
        <span></span>
        <span></span>
        <span></span>
      </Arrow>
      {600 > screenWidthSize ? (
        <MobileCarousle>
          <Swiper
            navigation={{
              nextEl: ".NextSlide",
              prevEl: ".PrevSlide",
            }}
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
            modules={[Autoplay, Pagination, EffectCoverflow, Navigation]}
            className="mySwiper"
          >
            {carouselData.map((i, index) => {
              return (
                <SwiperSlide
                  key={index}
                  onClick={() => {
                    setShowModule(true);
                    setMain(index);
                  }}
                >
                  <Card
                    img={carouselData[index].imageurl}
                    title={
                      title == "philosophy"
                        ? carouselData[index].personal
                        : carouselData[index].name
                    }
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </MobileCarousle>
      ) : 800 > screenWidthSize ? (
        <TabletCarousle>
          <Swiper
            id="tabletswiper"
            navigation={{
              nextEl: ".NextSlide",
              prevEl: ".PrevSlide",
            }}
            dir="rtl"
            centeredSlides={false}
            slidesPerView={tabletCarousleNumber}
            spaceBetween={15}
            slidesPerGroup={1}
            loop={true}
            noSwiping={false}
            onSwiper={setSwiper}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, EffectCoverflow, Navigation]}
            className="mySwiper"
            onActiveIndexChange={(e) => {
              newArray[0] = e.activeIndex % newArray.length;
              for (let i = 1; i < newArray.length; i++) {
                newArray[i] = newArray[i - 1] + 1;
                newArray[i] = newArray[i] % newArray.length;
              }
              setSequenceTablet(newArray.slice(-tabletCarousleNumber));
            }}
          >
            {carouselData.map((i, index) => {
              return (
                <SwiperSlide
                  key={index}
                  onClick={() => {
                    setShowModule(true);
                    slideTo(index);
                    setMain(index);
                  }}
                  className={
                    tabletCarousleNumber == 5
                      ? sequenceTablet[0] == index
                        ? "tabletnow"
                        : sequenceTablet[1] == index
                        ? "tabletnext1"
                        : sequenceTablet[2] == index
                        ? "tabletnext2"
                        : sequenceTablet[3] == index
                        ? "tabletnext3"
                        : sequenceTablet[4] == index
                        ? "tabletnext4"
                        : "tabletnone"
                      : sequenceTablet[0] == index
                      ? "tabletnext1"
                      : sequenceTablet[1] == index
                      ? "tabletnext2"
                      : sequenceTablet[2] == index
                      ? "tabletnext3"
                      : "tabletnone"
                  }
                >
                  <Card
                    index={index}
                    img={carouselData[index].imageurl}
                    title={
                      title == "philosophy"
                        ? carouselData[index].personal
                        : carouselData[index].name
                    }
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </TabletCarousle>
      ) : (
        <Swiper
          id="swiper"
          navigation={{
            nextEl: ".NextSlide",
            prevEl: ".PrevSlide",
          }}
          dir="rtl"
          centeredSlides={false}
          slidesPerView={desktopCarousleNumber}
          spaceBetween={3}
          slidesPerGroup={1}
          loop={true}
          onSwiper={setSwiper}
          noSwipingSelector="div"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, EffectCoverflow, Navigation]}
          className="mySwiper"
          onActiveIndexChange={(e) => {
            newArray[0] = e.activeIndex % newArray.length;

            for (let i = 1; i < newArray.length; i++) {
              newArray[i] = newArray[i - 1] + 1;
              newArray[i] = newArray[i] % newArray.length;
            }
            setSequence(newArray.slice(-desktopCarousleNumber));
          }}
        >
          {carouselData.map((i, index) => {
            return (
              <SwiperSlide
                key={index}
                onClick={() => {
                  setShowModule(true);
                  slideTo(main);
                  setMain(index);
                }}
                className={
                  desktopCarousleNumber == 7
                    ? sequence[0] == index
                      ? "now"
                      : sequence[1] == index
                      ? "next1"
                      : sequence[2] == index
                      ? "next2"
                      : sequence[3] == index
                      ? "next3"
                      : sequence[4] == index
                      ? "next4"
                      : sequence[5] == index
                      ? "next5"
                      : sequence[6] == index
                      ? "next6"
                      : "none"
                    : // (
                    desktopCarousleNumber == 5
                    ? sequence[0] == index
                      ? "next1"
                      : sequence[1] == index
                      ? "next2"
                      : sequence[2] == index
                      ? "next3"
                      : sequence[3] == index
                      ? "next4"
                      : sequence[4] == index
                      ? "next5"
                      : "none"
                    : sequence[0] == index
                    ? "noww"
                    : sequence[1] == index
                    ? "next11"
                    : sequence[2] == index
                    ? "next22"
                    : "none"
                }
              >
                <Card
                  img={carouselData[index].imageurl}
                  title={
                    title == "philosophy"
                      ? carouselData[index].personal
                      : carouselData[index].name
                  }
                  index={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}

      {showModule && (
        <Module className="tooltip" ref={modal}>
          <BorderTop />
          <Philosopher>
            {title == "philosophy"
              ? carouselData[main].personal
              : carouselData[main].name}
          </Philosopher>
          <ShortInfo>{carouselData[main].summary}</ShortInfo>

          <BottomLinks>
            <CloseButton
              onClick={() => {
                setShowModule(false);
              }}
            >
              بستن
            </CloseButton>
            <More
              onClick={() => {
                navigate(`${carouselData[main].id}`);
              }}
            >
              ادامه
            </More>
          </BottomLinks>
        </Module>
      )}

      <Arrow className="NextSlide">
        <span></span>
        <span></span>
        <span></span>
      </Arrow>
    </Container>
  );
};

const ShortInfo = styled.span`
  padding: 15px 5px;
  color: #a58463;
  font-size: 0.9rem;
  max-height: 57%;
  overflow: auto;
  @media (max-width: 600px) {
    overflow: scroll;
    font-size: 1.2rem;
  }
`;

const Philosopher = styled.span`
  font-size: 1rem;
  margin-top: -4.5%;
  text-align: center;
  color: #4f594e;
  @media (min-width: 600px) and (max-width: 800px) {
    margin-top: -7%;
  }
  @media (max-width: 600px) {
    margin-top: -11.5%;
    margin-top: -27px;
    font-size: 1.75rem;
  }
`;

const BorderTop = styled.div`
  /* margin-top: -23px; */
  /* border-top: 2.9px solid #fe9900; */
  display: flex;
  width: 25%;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 40%;
  }
`;

const BottomLinks = styled.div`
  display: flex;
  width: 98%;
  margin: auto;
  margin-bottom: -10px;
  justify-content: space-between;
`;

const CloseButton = styled.div`
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;
const More = styled.div`
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

const MobileCarousle = styled.div`
  @media (max-width: 600px) {
    display: block;
  }
  width: 70vw;
  height: 45vh;
`;

const TabletCarousle = styled.div`
  width: 70vw;
  height: auto;

  .tabletnow {
    transform: scaleX(0.7);
    transition: transform 0.5s;
    :hover {
      cursor: pointer;
    }
    .title {
      display: none;
    }
    .imageincarousel {
      transform: scaleY(0.7);
      transition: transform 0.5s;
    }
  }

  .tabletnext1 {
    position: relative;
    transform: translateX(13%) scaleX(0.8);
    transition: transform 0.5s;

    :hover {
      cursor: pointer;
    }
    .title {
      display: none;
      font-size: 1.5rem;
    }
    .imageincarousel {
      transform: scaleY(0.8);
      transition: transform 0.5s;
    }
  }

  .tabletnext2 {
    transform: scaleX(1.2);
    transition: transform 0.5s;
    :hover {
      cursor: pointer;
    }
    .imageincarousel {
      transform: scaleY(1.2);
    }
    .title {
      // font-size:1.2rem;
      overflow: hidden;
      transform: scaleY(1.2);
    }
  }

  .tabletnext3 {
    transform: translateX(-13%) scaleX(0.8);
    transition: transform 0.5s;

    :hover {
      cursor: pointer;
    }
    .title {
      transform: scaleX(1.5);
      font-size: 1rem;
      display: none;
    }
    .imageincarousel {
      transform: scaleY(0.8);
    }
  }

  .tabletnext4 {
    transform: scaleX(0.7);
    transition: transform 0s;
    :hover {
      cursor: pointer;
    }
    .title {
      display: none;
    }
    .imageincarousel {
      transform: scaleY(0.7);
    }
  }

  .tabletnone {
    transform: translateX(0px) scaleX(0.8);
    transition: transform 0.5s;
    margin-left: -10px;
    .title {
      display: none;
      font-size: 1.5rem;
    }
    .imageincarousel {
      transform: scaleY(0.8);
      transition: transform 0.5s;
    }
  }
`;

const Module = styled.div`
  position: absolute;
  top: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: auto;
  height: 50%;
  font-size: 1rem;
  width: 34.5vw;
  padding: 20px 10px;
  background-color: white;
  border: 3px solid #4f594e;
  border-radius: 7.5px;
  z-index: 10;
  // overflow:hidden;

  @media (min-width: 600px) and (max-width: 800px) {
    top: 135px;
    width: 53.5vw;
    height: auto;
  }

  @media (max-width: 600px) {
    width: 63.5vw;
    // height: auto;
    min-height: 30vh;
  }
`;

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


  .next3{
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

.next4{
  // border:4px solid blue;
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

.next2{
  // border:4px solid blue;
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

.next5{
  // border:6px solid purple;
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

.next1{
  // border:6px solid purple;
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

.next6{
    // border:31px solid yellow;
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


.now{
  // border:13px solid yellow;
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

.next22{
  transform:  scale(.75,1);
  transition: transform .5s;

  .title{
    display:none;
  }
  .imageincarousel{
      transform: scaleY(0.75);
  }
}
.next11{
  transform:  scale(1.1 ,1);
  transition: transform .5s;

  .title{
      font-size: 1.5rem;
      // transform:scaleX(2);
  }
  .imageincarousel{
      transform: scaleY(1.1);
  }
}
.noww{
  transform:  scale(.75,1);
  transition: transform .5s;
  :hover{
    cursor: pointer;
  }
  
  .title{
    display:none;
  }
  .imageincarousel{
      transform: scaleY(0.75);
  }
}


`;

const Arrow = styled.div`
  display: flex;
  gap: 0.694vw;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  span {
    width: 1.389vw;
    height: 1.389vw;
    background: ${(props) => props.theme.background[3]};
  }
  @media (max-width: 600px) {
    span {
      width: 3.389vw;
      height: 3.389vw;
    }
  }
`;

export default Carousel;
