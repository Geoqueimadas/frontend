

const TextArea_Form = (props) => {
  const { customClass, name, id, cols, rows, placeholder } = props;

  return (
    <textarea
      className={`p-6 ${customClass}`}
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea_Form;