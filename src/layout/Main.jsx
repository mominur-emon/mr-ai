const Main = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-[300px] min-h-[425px] rounded-3xl drop-shadow-2xl px-[40px] py-[20px] bg-[#ECEEF7] relative">
        <div>
          <img
            src="/images/mr ai.png"
            alt="Mr. AI"
            className="w-[150px] h-[50px]"
          />
        </div>
        <div className="absolute top-[-30px] right-[-30px] bg-[#ECEEF7] py-[30px] px-[20px] rounded-full  border-[#9485f6] border-[1px] drop-shadow-2xl ">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-[70px] h-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
