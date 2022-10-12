import { Link } from "react-scroll";

import { FaArrowCircleDown } from "react-icons/fa";

const Btn = (props) => {
  const { href } = props;

  return (
    <Link to={href} spy={true} smooth={true} offset={-100} duration={700}>
      <div className="flex justify-center ">
        <button className="text-5xl text-red-main animate-bounce">
          <FaArrowCircleDown />
        </button>
      </div>
    </Link>
  );
};

export default Btn;
