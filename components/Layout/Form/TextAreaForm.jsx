const TextArea_Form = (props) => {
  const { customClass, name, id, cols, rows, placeholder, onChange, value } =
    props;

  return (
    <textarea
      className={`p-6 ${customClass}`}
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea_Form;
