import style from "./Chat.module.css";
const Chat = () => {
  return (
    <div className={style.chat}>
      <div className={style.chatContainer}>
        <p>Hi 👋</p>
      </div>
      <button className={style.chatButton}>
        <h1>
          <i className="fa-solid fa-robot"></i>
        </h1>
      </button>
    </div>
  );
};

export default Chat;
