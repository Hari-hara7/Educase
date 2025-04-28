import { FC } from "react";
import { useNavigate } from "react-router-dom";
import FloatingInput from "./FloatingInput";

const SignIn: FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/account-settings");
  };

  return (
    <div className="flex justify-center bg-gray-100 p-4 min-h-screen">
      <div className="relative w-full max-w-sm bg-white rounded-xl shadow-lg border-2 border-gray-300 overflow-hidden mt-8">
        <div className="flex flex-col justify-start items-center w-full px-6 py-8">
          <h1 className="text-3xl font-semibold text-center text-[#6C25FF] mb-4 tracking-tight">
            Sign in to your PopX account
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-md mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="space-y-6 w-full">
            <FloatingInput label="Email Address" type="email" />
            <FloatingInput label="Password" type="password" />

            <button
              onClick={handleLogin}
              className="bg-[#6C25FF] text-white font-semibold py-3 px-8 rounded-md w-full text-lg transition-all hover:bg-[#5a1ed6] focus:outline-none"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
