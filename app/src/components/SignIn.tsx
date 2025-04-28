import { FC } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import FloatingInput from "./FloatingInput";

const SignIn: FC = () => {
  const navigate = useNavigate(); // Creating navigate function

  const handleLogin = () => {
    // Redirecting to the '/account-settings' page after login
    navigate("/account-settings");
  };

  return (
    <div className="flex justify-center bg-gray-100 p-4 min-h-screen">
      {/* Phone border container */}
      <div className="relative w-full max-w-sm bg-white rounded-xl shadow-lg border-2 border-gray-300 overflow-hidden mt-8">
        {/* Phone screen content */}
        <div className="flex flex-col justify-start items-center w-full px-6 py-8">
          <h1 className="text-3xl font-semibold text-center text-purple-700 mb-4 tracking-tight">
            Sign in to your PopX account
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-md mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="space-y-6 w-full">
            <FloatingInput label="Email Address" type="email" />
            <FloatingInput label="Password" type="password" />

            {/* Login Button that triggers navigation to /account-settings */}
            <button
              onClick={handleLogin} // Added onClick to trigger navigation
              className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-md w-full text-lg transition-all hover:bg-purple-700 focus:outline-none"
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
