import SheredTitle from "../../../components/subtitle/SheredTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  useEffect(() => {
    fetch("http://localhost:5000/rivews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <SheredTitle
        subHeading="---What Our Clients Say---"
        heading="TESTIMONIALS"
      ></SheredTitle>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviews.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="m-14 flex flex-col  items-center">
              <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />
              <p>{item.details}</p>
              <h3 className="text-[#CD9003] text-3xl font-serif">
                {item.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
