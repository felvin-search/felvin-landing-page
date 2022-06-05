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
const TweetCard = ({ name, id, msg, dp }) => (
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
        src={dp}
      />
    </Avatar>

    <div style={{ width: "80%" }}>
      <Div>
        <Name>{name}</Name>
        <Id>{id}</Id>
      </Div>
      <Tweets>{msg}</Tweets>
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
        <SwiperSlide key={1}>
          <TweetCard
            name="Sarthak Goel"
            msg="I am a developer and I am delighted everytime I see the exact thing i am looking for right on top without me having to go through different links and look for expert opinion
Great extension!"
            id={"@sarthakgoel"}
            dp="/assets/imgs/1.png"
          />
        </SwiperSlide>
        <SwiperSlide key={2}>
          <TweetCard
            name="Harsh Gupta"
            id="@hargup13"
            msg="I have got all my missing dev utilities, right in my Google search! Amazing work 🎉"
            dp="/assets/imgs/2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide key={3}>
          <TweetCard
            name="tanvi gupta"
            id={"@tanvigupta"}
            msg="This is a pretty cool extension, I like the little code snippets and dev utilities it provides. Now I don't have to go random websites when I need to convert my data between different formats etc. It has a lot of nifty tools like pdf merge that are very handy."
            dp="/assets/imgs/3.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Testimonial;
