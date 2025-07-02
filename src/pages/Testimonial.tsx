import TestimonialCard from "../components/TestimonialCard";
import style from "./Testimonial.module.css";
import { Link } from "react-router-dom";
const testimonials = [
  {
    title: "Excellent Service",
    stars: 5,
    description:
      "MBSI exceeded my expectations with their professionalism and attention to detail.",
    client: "Aminu Muhammad",
  },
  {
    title: "Highly Recommend",
    stars: 5,
    description: "The team was responsive and delivered quality work on time.",
    client: "Aisha Bello",
  },
  {
    title: "Great Experience",
    stars: 4,
    description:
      "Very satisfied with the support and solutions provided by MBSI.",
    client: "Mustapha Husain",
  },
];

const Testimonial = () => {
  return (
    <div className={style.testimonial}>
      <h1>What Our Clients Say</h1>
      <p className={style.description}>
        Discover how MBSI has made a difference for our clients. Read real
        testimonials and see why businesses trust us for their needs.
      </p>
      <div className={style.testimonialCards}>
        {testimonials.map((t, idx) => (
          <TestimonialCard
            key={idx}
            title={t.title}
            stars={t.stars}
            description={t.description}
            client={t.client}
          />
        ))}
      </div>
      <Link to={"/testimonials"} className={style.seeMore}>
        View More {">>>"}
      </Link>
    </div>
  );
};

export default Testimonial;
