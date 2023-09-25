const Button = ({ text, styles, type, onClick }) => {
  return (
    <button type={type} className={styles} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
