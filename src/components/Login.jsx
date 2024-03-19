import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form className="">
        <div className=" flex items-center relative mt-[100px]  mb-[25px]">
          <img
            src="/images/profile.png"
            alt="profile"
            className="absolute left-4  w-4 h-[18px]"
          />
          <input
            type="email"
            placeholder="User ID"
            className="pl-9 py-2  border outline-none rounded-lg bg-[#ECEEF7] w-full"
            required
          />
        </div>
        <div className="flex items-center relative">
          <img
            src="/images/lock.png"
            alt=""
            className="absolute left-4  w-4 h-[18px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="pl-9  py-2  border outline-none rounded-lg bg-[#ECEEF7] w-full"
            required
          />
        </div>

        <Link to="/loading">
          <button className="bg-[#9686ff] w-full h-[35px] rounded-full flex items-center justify-center  shadow-button mt-[30px] mb-[10px] text-white font-bold text-[14px] cursor-pointer">
            Sign In
          </button>
        </Link>

        <p className="text-[11px] text-center text-[#5E5E5E] pb-[30px]">
          Forgotten password ? or{" "}
          <Link to="/signup">
            <span className="text-[#7F6BFF] font-bold cursor-pointer">
              Sign Up
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
