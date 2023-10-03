import { FcGoogle } from "react-icons/fc";
import { ImGithub, ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";
const RightSideNav = () => {
  return (
    <div>
      <div className="border">
        <h2 className="text-xl ml-5 mt-5 font-bold">Login With</h2>
        <div className="flex items-center gap-2 m-5 p-6 border rounded-lg">
          <FcGoogle className="text-2xl"></FcGoogle>
          <a href="#">Login With Google</a>
        </div>
        <div className="flex items-center gap-2 m-5 p-6 border rounded-lg">
          <ImGithub className="text-2xl"></ImGithub>
          <a href="#">Login With Google</a>
        </div>
      </div>
      <div>
        <h2 className="text-xl my-8 ml-5 font-bold">Find Us On</h2>
        <div className="flex items-center gap-2 p-6 border rounded-t-lg">
          <ImFacebook className="text-2xl text-blue-600"></ImFacebook>
          <a href="#">Facebook</a>
        </div>
        <div className="flex items-center gap-2 p-6 border">
          <ImTwitter className="text-2xl text-blue-600"></ImTwitter>
          <a href="#">Twitter</a>
        </div>
        <div className="flex items-center gap-2 p-6 border rounded-b-lg">
          <ImInstagram className="text-2xl text-blue-600"></ImInstagram>
          <a href="#">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
