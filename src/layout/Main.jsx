import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-[300px] min-h-[350px] rounded-3xl drop-shadow-2xl px-[40px] py-[20px] bg-[#ECEEF7] relative">
        <div className="absolute top-[-70px] left-[-120px]">
          <img
            src="/images/Robo/Looping.gif"
            alt="Mr. AI"
            className="w-full h-[250px]"
          />
        </div>
        <div className="absolute bg-[#715CFF] top-[-30px] right-[-30px] w-[110px] h-[110px] rounded-full drop-shadow-circle  ">
          <div className="absolute top-[0.7px] left-[0.7px] bottom-[0.2px] bg-[#ECEEF7] py-[30px] px-[20px] rounded-full  ">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-[70px] h-[50px]"
            />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
  S;
};

export default Main;
