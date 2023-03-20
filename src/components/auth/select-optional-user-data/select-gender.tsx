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
    <div>
      <label>성별(선택사항)</label>
      <select value={gender} onChange={handleChange}>
        <option value="">선택</option>
        {genderOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div>선택된 성별: {gender}</div>
    </div>
  );
}
