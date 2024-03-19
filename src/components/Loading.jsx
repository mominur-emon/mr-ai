import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const images = [
    "/images/Robo/1.1.gif",
    "/images/Robo/2.gif",
    "/images/Robo/3.gif",
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentImageIndex(1);
    }, 1000);

    const timer2 = setTimeout(() => {
      setCurrentImageIndex(2);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          // Navigate to "/welcome" when loading is complete
          navigate("/welcome");
          return 100;
        }
        return newProgress;
      });
    }, 500); // speed of progress

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div>
      <div className="pt-[30px] w-[284px] h-[284px] mb-[120px] mr-[-40px] ml-[-25px] ">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </div>
      <div className="relative w-full  h-4 bg-gray-200 rounded-full overflow-hidden drop-shadow-lg">
        <div
          className="absolute z-0 top-0 left-0 h-full bg-[#9686FF] transition-width duration-500 ease-in-out "
          style={{ width: `${progress}% ` }}
        ></div>
      </div>

      <p className="text-center text-[#6C6C6C]/[0.7] text-[14px] font-bold pt-[16px] pb-[25px]">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
