import style from "./CCTV.module.css";

const cameraSolutions = [
  { name: "Wifi Camera", description: "Connects to your existing Wifi" },
  { name: "4G SIM Camera", description: "Each Camera uses a SIM Card" },
  { name: "Wired Camera", description: "Connects to a Recorder and TV" },
  { name: "Wireless Wifi Camera", description: "" },
  { name: "Wired IP Network Camera", description: "" },
];

const features = [
  "360° View: Pan and Tilt to any angle using your mobile phone",
  "Cloud Storage: Playback from your mobile phone or remote cloud",
  "Weather Proof: Indoor or outdoor, designed for rain or sun",
  "Mobile or PC App: Remotely view live footage from any location",
  "Night Vision: Super clear pictures at night and day",
  "2-Way Audio: Talk and hear conversations",
  "Motion Detection: Phone notifications when movement is observed",
  "Human Tracking: Tracks and follows individuals in view area",
  "Inbuilt Battery: 10,000mAh rechargeable lithium batteries",
  "Solar Panel: Durable polycrystalline 8W solar panel",
  "1 Year Warranty: On all our 4G Camera Systems",
  "Sharp Images, Night Vision, Cloud Playback",
];

const CCTV = () => {
  return (
    <div className={style.cctvPage}>
      <header className={style.header}>
        <h1>CCTV Camera Installation</h1>
        <h2>CCTV Camera Solutions for You</h2>
        <p>
          CCTV (Closed Circuit Television), also known as Video Surveillance or
          Security Camera, uses video cameras to transmit signals to specific
          devices. It allows you to monitor your business or home, ensuring
          safety and peace of mind.
        </p>
      </header>

      <section className={style.solutions}>
        <h3>Choose from Our CCTV Solutions</h3>
        <ul className={style.solutionList}>
          {cameraSolutions.map((sol, idx) => (
            <li key={idx} className={style.solutionItem}>
              <strong>{sol.name}</strong>
              {sol.description && <span> – {sol.description}</span>}
            </li>
          ))}
        </ul>
      </section>

      <section className={style.systems}>
        <h3>Wired IP Network Camera</h3>
        <ul>
          <li>
            <strong>Power Source:</strong> Professional camera type, fully
            dependent on central power or inverter.
          </li>
          <li>
            <strong>Connection Type:</strong> Uses Cat6 network cables for
            stability and reliability.
          </li>
          <li>
            <strong>View Platform:</strong> Live footage via TV, Mobile, or PC
            App. Playback from recorder or app.
          </li>
          <li>
            <strong>Features & Pricing:</strong> Up to 4 remote viewers,
            excellent night vision, 2-way audio, large storage, kit starts from
            3pcs.
          </li>
          <li>
            <strong>Application:</strong> Homes, farms, warehouses, estates,
            businesses, organizations.
          </li>
        </ul>
      </section>

      <section className={style.features}>
        <h3>Features of Our CCTV Cameras</h3>
        <ul className={style.featureList}>
          {features.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>
      </section>

      <section className={style.systems}>
        <h3>Wifi Camera System</h3>
        <ul>
          <li>
            <strong>Power Source:</strong> Electric powered (5V adapter) or
            solar powered with inbuilt battery.
          </li>
          <li>
            <strong>Connection Type:</strong> Requires stable wifi for remote
            viewing. Installable indoors or outdoors.
          </li>
          <li>
            <strong>View Platform:</strong> Live footage via Mobile or PC App.
            Playback from Mobile or PC.
          </li>
          <li>
            <strong>Features & Pricing:</strong> Up to 3 remote viewers, night
            vision, 2-way audio, cloud storage.
          </li>
          <li>
            <strong>Application:</strong> Best for homes or small businesses.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CCTV;
