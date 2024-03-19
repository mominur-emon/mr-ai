import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Start = () => {
  const images = [
    "/images/Robo/1.1.gif",
    "/images/Robo/2.gif",
    "/images/Robo/3.gif",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentImageIndex(1); // Display the second image after 1 second
    }, 1000);

    const timer2 = setTimeout(() => {
      setCurrentImageIndex(2); // Display the third image after another second
    }, 2000);

    // Clear timeouts when the component unmounts
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div>
      <div className="pt-[30px] w-[284px] h-[284px] mb-[120px] mr-[-40px] ml-[-25px] ">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </div>

      <Link to="/login">
        <button className="bg-[#9686ff] w-full h-[35px] rounded-full flex items-center justify-center  shadow-button  mb-[45px] text-white text-[14px] cursor-pointer ">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Start;
