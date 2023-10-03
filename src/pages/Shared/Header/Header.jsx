import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto my-6" src={logo} alt="" />
      <p className=" my-4">Journalism Without Fear or Favour</p>
      <p className="text-xl my-4">
        {moment().format("dddd, D MMMM,  YYYY")}
      </p>
    </div>
  );
};

export default Header;
