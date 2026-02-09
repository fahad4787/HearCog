import Banner from "../../components/Banner";
import BgHolder from "../../components/BgHolder";
import CardSection from "../../components/CardSection";
import FindProvider from "../../components/FindProvider";
import OurCompetitive from "../../components/OurCompetitive";
import ProfessionalServices from "../../components/ProfessionalServices";
import FAQ from "../../components/FAQ";
import Testimonials from "../../components/Testimonials";
import Cta from "../../components/Cta";
function Home() {
  return (
    <>
      <Banner />
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
