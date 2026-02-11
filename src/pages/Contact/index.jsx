import ContactUs from "../../components/ContactUs";
import Journey from "../../components/Journey";
import data from "./data.json";
import j1 from "../../assets/Icons/j1.svg";
import j2 from "../../assets/Icons/j2.svg";
import j3 from "../../assets/Icons/j3.svg";
import j4 from "../../assets/Icons/j4.svg";
import Testimonials from "../../components/Testimonials";
import FAQ from "../../components/FAQ";
import Cta from "../../components/Cta";
function Contact() {
  const journeyIcons = { "j1.svg": j1, "j2.svg": j2, "j3.svg": j3, "j4.svg": j4 };
  const journeyData = data.JOURNEY
    ? {
        ...data.JOURNEY,
        steps: data.JOURNEY.steps.map((step) => ({
          ...step,
          icon: journeyIcons[step.icon] ?? step.icon,
        })),
      }
    : null;

  return (
    <>
      <ContactUs />
      <Journey data={journeyData} />
      <Testimonials />
      <FAQ />
      <Cta />
    </>
  );
}

export default Contact;
