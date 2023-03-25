import { Dispatch, SetStateAction } from "react";

const genderOptions = [
  {
    value: "man",
    label: "남성",
  },
  {
    value: "women",
    label: "여성",
  },
];

export default function SelectGender({
  gender = "",
  setGender,
}: {
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  return (
    <>
      <h4 className="w-40 bg-slate-500 text-white text-center">성별(선택)</h4>
      <select
        value={gender}
        onChange={handleChange}
        className="py-1 px-3 rounded-md text-lg outline-none shadow-lg"
      >
        <option value="" className="text-gray-300">
          선택
        </option>
        {genderOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}
