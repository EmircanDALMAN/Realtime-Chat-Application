import "./Input.css";

const Input = ({ message, sendMessage, setMessage }) => (
  <form className={"form"}>
    <input
      type="text"
      placeholder={"Mesajı Giriniz"}
      className={"input"}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
    />
    <button className={"sendButton"} onClick={(e) => sendMessage(e)}>Gönder</button>
  </form>
);
export default Input;
