import style from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={style.contactPage} id="contact">
      <h1 className={style.headingTitle}>Find Us & Get in Touch</h1>
      <p className={style.description}>
        Use the map below to locate our office easily. Have a question or need
        support? Fill out the contact form and we'll get back to you as soon as
        possible.
      </p>
      <div className={style.contactContainer}>
        <div className={style.contactInfo}>
          <form action="">
            <div className={style.formGroup}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={style.formGroup}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={style.formGroup}>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className={style.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.028519442874!2d8.531220408012762!3d11.972527288209509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81e4e4ef39c5%3A0xa34c74fc4c5423e4!2sPioneersICT%20Nigeria%20Ltd!5e0!3m2!1sen!2sng!4v1751109273737!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
