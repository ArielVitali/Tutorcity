const FormInput = ({ type, name, required, styles }) => {
  return (
    <input
      type={type}
      name={name}
      required={required} // Pass the 'required' prop as an HTML attribute
      className={styles}
    />
  );
};

export default FormInput;
