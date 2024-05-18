import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SheredTitle from "../../components/subtitle/SheredTitle";

const Categorey = () => {
  return (
    <section>
        <SheredTitle subHeading={"---From 11:00am to 10:00pm---"} heading={"order online"}>
        
        </SheredTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h1 className="text-3xl uppercase text-white -mt-10 text-center" >salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h1 className="text-3xl uppercase text-white -mt-10 text-center" >pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h1 className="text-3xl uppercase text-white -mt-10 text-center" >soup</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h1 className="text-3xl uppercase text-white -mt-10 text-center" >salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h1 className="text-3xl uppercase text-white -mt-10 text-center" >pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h1 className="text-3xl uppercase text-white -mt-10 text-center" >soup</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h1 className="text-3xl uppercase text-white -mt-10 text-center" >bread</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h1 className="text-3xl uppercase text-white -mt-10 text-center" >salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h1 className="text-3xl uppercase text-white -mt-10 text-center" >soup</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h1 className="text-3xl uppercase text-white -mt-10 text-center" >bread</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h1 className="text-3xl uppercase text-white -mt-10 text-center" >salads</h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Categorey;
