import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-[300px] min-h-[350px] rounded-3xl drop-shadow-2xl px-[40px] py-[20px] bg-[#ECEEF7] relative">
        <div>
          <img
            src="/images/mr ai.png"
            alt="Mr. AI"
            className="w-[130px] h-[45px]"
          />
        </div>
        {/* <div className="absolute top-[-30px] right-[-30px] bg-[#ECEEF7] py-[30px] px-[20px] rounded-full  border-[#9485f6] border-[1px]   border-r-0   drop-shadow-2xl ">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-[70px] h-[50px]"
          />
        </div> */}
        <div className="absolute bg-[#9485f6] top-[-30px] right-[-30px] w-[110px] h-[110px] rounded-full style={{ opacity: 0.8 }} ">
          <div className="absolute top-[0.7px] left-[0.7px] bottom-[0.2px] bg-[#ECEEF7] py-[30px] px-[20px] rounded-full drop-shadow-2xl ">
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
