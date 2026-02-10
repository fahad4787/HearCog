import { Container, Row, Col, Image, Button } from "react-bootstrap";
import styles from "./index.module.scss";
import phoneIcon from "../../assets/icons/phone.svg";

function Banner({ data, otherBanner }) {
  if (!data) return null;

  const { heading, description, buttonText, secondButtonText, contactTitle, contactPhone, image, imageAlt, stats } = data;

  return (
    <div className={styles.banner + " " + (otherBanner ? styles.customBanner : "")}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="heading">{heading}</h1>
            <p>{description}</p>
            <div className={styles.cta}>
              <Button>{buttonText}</Button>
              {secondButtonText ? (
                <Button variant="outline" className="ms-2">
                  {secondButtonText}
                </Button>
              ) : (
                <div className={styles.contactInfo}>
                  <div className={styles.icon}>
                    <Image src={phoneIcon} alt="Phone" />
                  </div>
                  <div>
                    <b>{contactTitle}</b>
                    <small>{contactPhone}</small>
                  </div>
                </div>
              )}
              <div className={styles.card} />
            </div>
            {otherBanner && stats && stats.length > 0 && (
              <div className={styles.cta + " " + styles.otherBannerCta}>
                {stats.map((item, index) => (
                  <div key={index} className={styles.iconBox}>
                    <Image src={item.icon} alt={item.line1 || ""} />
                    <div>
                      <p>{item.line1}</p>
                      <p>{item.line2}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Col>
          <Col md={6}>
            <div className={`imgBox ${otherBanner ? styles.otherBanner : ""}`}>
              <Image src={image} alt={imageAlt} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
