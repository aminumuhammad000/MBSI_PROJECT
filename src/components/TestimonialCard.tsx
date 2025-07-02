import styles from "./TestimonialCard.module.css";

interface TestimonialCardProps {
  title: string;
  stars: number; // 1-5
  description: string;
  client: string;
}

const TestimonialCard = ({
  title,
  stars,
  description,
  client,
}: TestimonialCardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.stars}>
        {"★".repeat(stars)}
        {"☆".repeat(5 - stars)}
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.client}>- {client}</div>
    </div>
  );
};

export default TestimonialCard;
