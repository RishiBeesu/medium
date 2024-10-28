import { ChangeEvent } from "react";

interface InputBoxType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export function InputBox({ label, placeholder, onChange, type }: InputBoxType) {
  return (
    <div>
      <label className="block mb-2 font-semibold text-black pt-4 text-lg">
        {label}
      </label>
      <input
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
}
