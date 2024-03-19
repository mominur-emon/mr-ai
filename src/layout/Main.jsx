import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  const images = ["/images/Robo/Starting.gif", "/images/Robo/Looping.gif"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentImageIndex(1); // Display the second image after 1 second
    }, 2000);

    // Clear timeouts when the component unmounts
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-[300px] min-h-[350px] rounded-3xl drop-shadow-2xl px-[40px] py-[20px] bg-[#ECEEF7] relative">
        <div className="absolute top-[-70px] left-[-120px]">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="w-full h-[250px]"
          />
        </div>
        <div className="absolute bg-[#715CFF] top-[-30px] right-[-30px] w-[110px] h-[110px] rounded-full drop-shadow-circle  ">
          <div className="absolute top-[0.7px] left-[0.7px]  bg-[#ECEEF7] py-[30px] px-[20px] rounded-full  ">
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
};

export default Main;
