import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Image } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import styles from "./index.module.scss";
import SectionHeading from "../SectionHeading";
import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar3 from "../../assets/images/avatar3.png";
import avatar4 from "../../assets/images/avatar4.png";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Thomas Daniel",
    image: avatar1,
    rating: 5,
    text: "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.",
  },
  {
    id: 2,
    name: "Alena Alex",
    image: avatar2,
    rating: 5,
    text: "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.",
  },
  {
    id: 3,
    name: "Thomas Edison",
    image: avatar3,
    rating: 5,
    text: "Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.",
  },
  {
    id: 4,
    name: "Placeholder Name",
    image: avatar4,
    rating: 5,
    text: "Placeholder testimonial text. Update content in JSON later.",
  },
  {
    id: 1,
    name: "Thomas Daniel",
    image: avatar1,
    rating: 5,
    text: "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.",
  }

];

function Testimonials() {
  return (
    <section className="section bg">
     <Container>
      <SectionHeading
        title="What People Say About Their Experience"
        desc="Real experiences from patients and professionals who trust our diagnosis-first, quality-driven approach to hearing care."
      />
     </Container>
     <div className={styles.sliderWrap}>
       <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1.3}
        speed={1200}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          576: { slidesPerView: 2.3 },
          992: { slidesPerView: 3.3 },
        }}
        className={styles.slider}
      >
        {TESTIMONIALS.map((item, index) => (
          <SwiperSlide key={`${item.id}-${index}`}>
            <div className={['card', styles.card].join(' ')}>
              <div className={styles.cardHeader}>
                <Image src={item.image} alt={item.name} className={styles.avatar} roundedCircle />
                <div>
                  <h5 className={styles.name}>{item.name}</h5>
                  <div className={styles.stars}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} className={styles.star} aria-hidden>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className={styles.text}>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     </div>
    </section>
  );
}

export default Testimonials;
