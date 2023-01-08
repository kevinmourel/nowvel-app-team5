import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../styles.css";

import { EffectCoverflow, Pagination } from "swiper";

function Banner({data}) {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {data.map(item => (
                    <SwiperSlide>
                        <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none' }}>
                            <img src={item.image} className="img-fluid"/>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Banner;