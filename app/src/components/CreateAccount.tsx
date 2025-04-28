import { FC } from "react";
import { useNavigate } from "react-router-dom";
import FloatingInput from "./FloatingInput";

const CreateAccount: FC = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/account-settings");
  };

  return (
    <div className="flex justify-center bg-gray-100 p-4 min-h-screen">
    
      <div className="relative w-full max-w-sm bg-white rounded-xl shadow-lg border-2 border-gray-300 overflow-hidden mt-8">
    
        <div className="flex flex-col justify-start items-center w-full px-6 py-8">
          <h1 className="text-3xl font-semibold text-center text-purple-700 mb-6 tracking-tight">
            Create your PopX account
          </h1>

          <div className="space-y-6 w-full">
            <FloatingInput label="Full Name" />
            <FloatingInput label="Phone number" />
            <FloatingInput label="Email address" />
            <FloatingInput label="Password" type="password" />
            <FloatingInput label="Company name" />

            <div className="mt-6 w-full">
              <p className="text-sm font-semibold mb-2">Are you an Agency? *</p>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input type="radio" name="agency" className="accent-purple-600" /> Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="agency" className="accent-purple-600" /> No
                </label>
              </div>
            </div>

            <button
              onClick={handleCreateAccount}
              className="bg-purple-600 text-white py-3 px-8 rounded-md w-full text-lg font-medium transition-all hover:bg-purple-700 focus:outline-none mt-6"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
