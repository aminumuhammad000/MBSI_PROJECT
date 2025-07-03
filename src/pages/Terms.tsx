import styles from "./Terms.module.css";

const Terms = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Terms & Conditions</h1>
      <p className={styles.updated}>Last Updated: June 25, 2025</p>

      <section>
        <h2 className={styles.heading}>1. Introduction</h2>
        <p className={styles.paragraph}>
          Welcome to Magnificent Business Solutions International (MBSI). By
          using our website, products, or services, you agree to comply with and
          be bound by the following terms and conditions. If you do not agree
          with any part of these terms, you should not use our services.
        </p>
      </section>

      <section>
        <h2 className={styles.heading}>2. Company Overview</h2>
        <p className={styles.paragraph}>
          MBSI is a multi-sector solutions provider offering services in solar
          energy installation, GPS vehicle tracking, CCTV & surveillance, and
          general contracts & procurement. Our services cater to individuals,
          businesses, government institutions, and non-governmental
          organizations across Nigeria.
        </p>
      </section>

      <section>
        <h2 className={styles.heading}>3. Service Availability</h2>
        <p className={styles.paragraph}>
          Our services are available in most regions across Nigeria. However,
          some remote or high-risk areas may experience limited service
          availability. We reserve the right to accept or reject service
          requests based on logistical or safety considerations.
        </p>
      </section>

      <section>
        <h2 className={styles.heading}>4. Warranties & Guarantees</h2>
        <p className={styles.paragraph}>
          We provide warranties on products and services as follows:
        </p>
        <ul className={styles.list}>
          <li>Solar Systems: 1–2 year warranty depending on equipment type</li>
          <li>Car Tracking Devices: 12-month hardware warranty</li>
          <li>CCTV Installations: Up to 12-month warranty on select cameras</li>
        </ul>
        <p className={styles.paragraph}>
          Warranty is void in cases of tampering, water damage, power surges, or
          unauthorized servicing.
        </p>
      </section>

      <section>
        <h2 className={styles.heading}>5. Payment Terms</h2>
        <p className={styles.paragraph}>
          Payment must be made in full before or at the time of installation
          unless under an approved installment or contract-based agreement. MBSI
          is not responsible for delays caused by incomplete payments.
        </p>
      </section>

      <section>
        <h2 className={styles.heading}>6. Delivery & Installation</h2>
        <p className={styles.paragraph}>
          Installations are scheduled within 24–72 hours after confirmation.
          Clients are responsible for providing safe and clear access to the
          site. Any delay caused by customer inaccessibility will affect service
          delivery.
        </p>
      </section>

      <section>
        <h2 className={styles.heading}>7. Software & Device Use</h2>
        <p className={styles.paragraph}>
          For services involving mobile/web apps or tracking devices, MBSI
          grants a limited non-transferable license to use the software. Misuse,
          reverse engineering, or unauthorized resale is prohibited.
        </p>
      </section>

      <section>
        <h2 className={styles.heading}>8. Data Privacy</h2>
        <p className={styles.paragraph}>
          We respect your privacy. Information collected (including location,
          contact, and installation details) is used solely for service
          provision, internal analysis, and support. We do not sell or share
          your data with third parties without your consent, except as required
          by law.
        </p>
      </section>

      <section>
        <h2 className={styles.heading}>9. Customer Obligations</h2>
        <p className={styles.paragraph}>Customers are expected to:</p>
        <ul className={styles.list}>
          <li>Provide accurate contact and location details</li>
          <li>Ensure access to installation site</li>
          <li>Use systems responsibly according to manuals</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.heading}>10. Support & Maintenance</h2>
        <p className={styles.paragraph}>
          Free support is available during the warranty period. For extended
          maintenance or priority troubleshooting, a service plan can be
          subscribed to after warranty expiration.
        </p>
      </section>

      <section>
        <h2 className={styles.heading}>11. Limitation of Liability</h2>
        <p className={styles.paragraph}>
          MBSI will not be held liable for indirect or consequential losses such
          as:
        </p>
        <ul className={styles.list}>
          <li>Vehicle theft due to client-side system neglect</li>
          <li>
            Equipment damage caused by poor power supply or physical tampering
          </li>
          <li>
            Delays caused by third-party network failures (e.g. mobile data)
          </li>
        </ul>
      </section>

      <section>
        <h2 className={styles.heading}>12. Intellectual Property</h2>
        <p className={styles.paragraph}>
          All designs, logos, documentation, and platform features remain the
          intellectual property of MBSI. Unauthorized reproduction,
          distribution, or adaptation is strictly prohibited.
        </p>
      </section>

      <section>
        <h2 className={styles.heading}>13. Changes to Terms</h2>
        <p className={styles.paragraph}>
          We may update these terms periodically. Any changes will be posted on
          our website. Continued use of our services after changes are made
          indicates acceptance of the new terms.
        </p>
      </section>

      <section>
        <h2 className={styles.heading}>14. Contact Information</h2>
        <p className={styles.paragraph}>
          For any questions regarding our terms, please contact:
        </p>
        <p className={styles.paragraph}>
          <a href="mailto:info@mbsi.com" className={styles.a}>
            Email: info@mbsi.com
          </a>
        </p>
        <p className={styles.paragraph}>
          <a href="tel:+2348100015498" className={styles.a}>
            Phone: +2348100015498
          </a>
        </p>
        <p className={styles.paragraph}>Address: MBSI Office, Kano, Nigeria</p>
      </section>
    </div>
  );
};

export default Terms;
