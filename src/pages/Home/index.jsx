import Banner from "../../components/Banner";
import BgHolder from "../../components/BgHolder";
import CardSection from "../../components/CardSection";
import FindProvider from "../../components/FindProvider";
import OurCompetitive from "../../components/OurCompetitive";
import ProfessionalServices from "../../components/ProfessionalServices";
import FAQ from "../../components/FAQ";
import Testimonials from "../../components/Testimonials";
import Cta from "../../components/Cta";
import bannerImg from "../../assets/images/banner.png";

const BANNER_DATA = {
  heading: "Hear It Right. Know Where to Go.",
  description:
    "A nationwide network connecting patients with qualified hearing-care professionals within 25 miles—ensuring personalized, trusted care close to home.",
  buttonText: "Start Your Hearing Journey",
  contactTitle: "24/7 Hearing Care Assistance",
  contactPhone: "0900-78601",
  image: bannerImg,
  imageAlt: "Banner",
};

function Home() {
  return (
    <>
      <Banner data={BANNER_DATA} />
      <BgHolder />
      <FindProvider />
      <ProfessionalServices />
      <OurCompetitive />
      <CardSection />
      <Testimonials />
      <FAQ />
      <Cta />
    </>
  );
}

export default Home;
