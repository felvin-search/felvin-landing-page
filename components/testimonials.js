import { Badge } from "@mui/material";
import styled from "styled-components";
import { Twitter } from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper React components

const Container = styled.div`
  min-height: 45vh;
  background: rgb(26, 26, 26);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cards = styled.div`
  position: relative;
  background-color: rgb(255, 255, 255);
  display: flex;
  max-width: 25rem;
  min-height: 5rem;
  padding: 0.8em;
  border-radius: 10px;

  cursor: pointer;
`;
const Avatar = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: white;
  border-radius: 50%;
  object-fit: contain;
  margin-right: 15px;
  overflow: hidden;
`;
const Name = styled.h6`
  margin: 0;
  color: rgb(15, 20, 26);
`;
const Id = styled.h6`
  margin: 0;
  margin-left: 5px;
  color: rgb(83, 99, 113);
`;
const Tweets = styled.div`
  color: rgb(15, 20, 26);
  font-size: 0.9rem;
`;
const Div = styled.div`
  display: flex;
  margin-bottom: 5px;
`;
const TweetIcon = styled.div`
  position: absolute;

  background: #1c9bef;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TweetCard = () => (
  <Cards>
    <TweetIcon>
      <Twitter color="white" size={15} />
    </TweetIcon>
    <Avatar>
      <img
        style={{
          width: "100%",
          height: "100%",
        }}
        src="https://pbs.twimg.com/profile_images/1517869199804096515/cvb4Tllz_400x400.jpg"
      />
    </Avatar>

    <div style={{ width: "80%" }}>
      <Div>
        <Name>Gyana Ranjan Panda</Name>
        <Id>@gyanapanda</Id>
      </Div>
      <Tweets>
        I have used Felvin all my dev related work and i am loving it.
      </Tweets>
    </div>
  </Cards>
);

const Testimonial = () => {
  return (
    <Container>
      <Swiper
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          450: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        speed={5000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
        <SwiperSlide>
          <TweetCard />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Testimonial;
