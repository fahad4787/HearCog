import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./index.module.scss";
import bannerImg from "../../assets/images/banner.png";

function Banner() {
  return (
    <div className={styles.banner}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>Hear It Right. Know Where to Go.</h1>
            <p>A nationwide network connecting patients with qualified hearing-care professionals within 25 miles—ensuring personalized, trusted care close to home.</p>
          </Col>
          <Col md={6}>
            <div className="imgBox">
              <Image src={bannerImg} alt="Banner" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
