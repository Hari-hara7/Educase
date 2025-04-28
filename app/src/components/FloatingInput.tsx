import { FC, InputHTMLAttributes } from "react";

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingInput: FC<FloatingInputProps> = ({ label, ...props }) => {
  return (
    <div className="relative w-full">
      <input
        {...props}
        placeholder=" "
        className="peer w-full border border-gray-300 rounded-md px-3 pt-4 mt-2 pb-2 text-base placeholder-transparent focus:border-purple-600 focus:outline-none"
      />
      <label
        className="absolute left-3 top-2.5 text-gray-400 bg-white px-1 text-sm transition-all 
        peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
        peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
        peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-purple-600"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
