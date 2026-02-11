import { Container, Image } from "react-bootstrap";
import SectionHeading from "../SectionHeading";
import { ScrollReveal } from "../ScrollAnimation";
import styles from "./index.module.scss";

const STEP_DELAY = 0.12;

function Journey({ data }) {
  if (!data?.steps?.length) return null;

  const { title, desc, steps } = data;

  return (
    <section className="section">
      <Container>
        <SectionHeading small title={title} desc={desc} />
        <ul className={styles.journeySteps}>
          {steps.map((step, index) => (
            <li key={step.id}>
              <ScrollReveal animation="fadeUp" delay={index * STEP_DELAY}>
                <div className={`${styles.journeyStepIcon} mb-3`}>
                  <Image className="iconAnimation" src={step.icon} alt={step.title} />
                </div>
                <h6 className="fw-medium mb-3">{step.title}</h6>
                <p className="mb-0">{step.description}</p>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Journey;
