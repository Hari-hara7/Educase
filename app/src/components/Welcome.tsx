import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Welcome: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-end h-screen bg-gray-100 p-4">
      <div className="relative w-full max-w-sm h-full bg-white rounded-xl shadow-lg border-2 border-gray-300 overflow-hidden">
        <div className="flex flex-col justify-start items-center h-full px-4 sm:px-8 py-6 mt-90">
          <h1 className="text-4xl font-semibold text-center text-[#6C25FF] mb-4 tracking-tight">
            Welcome to PopX
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-md mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula leo sit amet risus egestas.
          </p>

          <div className="w-full space-y-4">
            <button
              onClick={() => navigate("/create-account")}
              className="w-full bg-[#6C25FF] text-white py-3 rounded-md text-lg font-medium transition-all hover:bg-[#5a1ed6] focus:outline-none"
            >
              Create Account
            </button>

            <button
              onClick={() => navigate("/signin")}
              className="w-full bg-[#EDE9FE] text-[#6C25FF] py-3 rounded-md text-lg font-semibold transition-all hover:bg-[#d6ccfc] focus:outline-none"
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
