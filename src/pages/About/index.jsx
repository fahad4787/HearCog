import Banner from "../../components/Banner";
import Testimonials from "../../components/Testimonials";
import FAQ from "../../components/FAQ";
import Cta from "../../components/Cta";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import SectionHeading from "../../components/SectionHeading";
import data from "./data.json";
import bannerImg from "../../assets/images/dummy.png";
import icon1 from "../../assets/Icons/a1.svg";
import icon2 from "../../assets/Icons/a2.svg";
import valueIcon1 from "../../assets/Icons/i1.svg";
import valueIcon2 from "../../assets/Icons/i2.svg";
import valueIcon3 from "../../assets/Icons/i3.svg";
import valueIcon4 from "../../assets/Icons/i4.svg";
import valueIcon5 from "../../assets/Icons/i5.svg";
import valueIcon6 from "../../assets/Icons/i6.svg";

const valueIcons = [valueIcon1, valueIcon2, valueIcon3, valueIcon4, valueIcon5, valueIcon6];

const bannerData = {
  ...data.BANNER_DATA,
  image: bannerImg,
  stats: data.BANNER_DATA.stats?.map((stat, i) => ({
    ...stat,
    icon: [icon1, icon2][i] ?? stat.icon,
  })),
};

function About() {
  return (
    <>
      <Banner data={bannerData} otherBanner />
      <section className="section">
        <Container>
          <SectionHeading
            title="Driven by Purpose, Guided by Vision"
            desc="Every decision we make, every innovation we pursue, and every patient we serve is rooted in our commitment to excellence and compassionate care."
          />
          <Row>
            {data.ABOUT_CARDS.map((card) => (
              <Col key={card.id} lg={6}>
                <Card>
                  <div className="badge purple mb-4">{card.badge}</div>
                  <h2>{card.title}</h2>
                  {card.paragraphs.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="section purpleBg">
        <SectionHeading title="Values That Drive Us" desc="The principles that shape every decision we make and every patient interaction we have." />
        <Container>
          <Row>
            {data.VALUES_CARDS.map((card, i) => (
              <Col key={card.id} lg={4} className="mb-4">
                <Card>
                  <Image className="mb-4 iconAnimation" width={50} height={50} src={valueIcons[i]} alt={card.title} />
                  <h5 className="fw-medium">{card.title}</h5>
                  <p>{card.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Testimonials />
      <FAQ />
      <Cta />
    </>
  );
}

export default About;
