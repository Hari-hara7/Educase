import { FC } from "react";

const AccountSettings: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      
      <div className="relative w-full max-w-sm h-full bg-white rounded-xl shadow-lg border-2 border-gray-300 overflow-hidden">
     
        <div className="flex flex-col justify-start items-center h-full px-6 py-8">
          <h1 className="text-3xl font-semibold text-center text-purple-700 mb-6 tracking-tight">
            Account Settings
          </h1>

         
          <div className="flex items-center gap-4 mb-6">
          
            <div className="relative mr-auto">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 bg-purple-500 rounded-full p-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L3 14.172V17h2.828l11.586-11.586a2 2 0 000-2.828z"></path>
                </svg>
              </span>
            </div>

          
            <div className="flex flex-col items-start">
              <h2 className="font-bold text-lg">Marry Doe</h2>
              <p className="text-gray-500 text-sm">Marry@Gmail.Com</p>
            </div>
          </div>

        
          <p className="text-gray-500 text-sm text-center mb-6">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
