import { Link } from "react-scroll";

const LiNavbar = (props) => {
  const { to, name } = props;

  return (
    <>
      <li className="md:mr-8 md:mb-0 mb-4 cursor-pointer text-white md:text-black">
        <Link
          className="md:hover:text-red-main transition 
            ease-out duration-500"
          to={to}
          spy={true}
          smooth={true}
          offset={-100}
          duration={700}
        >
          {name}
        </Link>
      </li>
    </>
  );
};

export default LiNavbar;
