import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import IMG1 from "assets/images/caurosel/IMG1.png";
import { styled } from "@mui/material/styles";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import styles from "./styles.scss";

// import required modules
import { Pagination, Navigation } from "swiper";
import { BsCardImage } from "react-icons/bs";
import { Typography } from "@mui/material";

const CardImg = styled("img")(({ theme }) => ({
  width: 80,
  height: 50,
 
}));
export default function Caurosel() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <>
      <Typography sx={{textAlign:"center"}}>آگهی های جدید</Typography>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardImg component="img" src={IMG1} />
        </SwiperSlide>
        <SwiperSlide>
          <CardImg component="img" src={IMG1} />
        </SwiperSlide>
        <SwiperSlide>
          <CardImg component="img" src={IMG1} />
        </SwiperSlide>
        <SwiperSlide>
          <CardImg component="img" src={IMG1} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
