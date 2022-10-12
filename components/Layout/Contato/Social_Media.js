import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Social_Media = (props) => {
  const { customClass } = props;

  return (
    <div className={`flex flex-row text-red-main text-4xl mt-12 ${customClass}`}>
      <FaLinkedinIn className="mr-5 cursor-pointer hover:opacity-60 transition-all duration-500" />
      <FaFacebookF className="mr-5 cursor-pointer hover:opacity-60 transition-all duration-500" />
      <FaInstagram className="mr-5 cursor-pointer hover:opacity-60 transition-all duration-500" />
    </div>
  );
};

export default Social_Media;