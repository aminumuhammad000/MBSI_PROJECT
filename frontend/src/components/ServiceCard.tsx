import style from "./ServiceCard.module.css";
interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
}
const ServiceCard = ({ title, description, imageUrl }: ServiceCardProps) => {
  return (
    <div className={style.serviceCard}>
      <div className={style.card}>
        <div className={style.imageContainer}>
          <img src={imageUrl} alt={title} />
        </div>
        <h2>{title}</h2>
        <p className={style.description}>{description}</p>
        <button className={style.viewBtn}>View Details</button>
      </div>
    </div>
  );
};

export default ServiceCard;
