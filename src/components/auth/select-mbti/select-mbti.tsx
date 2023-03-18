import { useState, Dispatch, SetStateAction } from "react";

const mbtiOptions = [
  {
    label: "E/I",
    options: [
      { value: "E", label: "E" },
      { value: "I", label: "I" },
    ],
  },
  {
    label: "S/N",
    options: [
      { value: "S", label: "S" },
      { value: "N", label: "N" },
    ],
  },
  {
    label: "T/F",
    options: [
      { value: "T", label: "T" },
      { value: "F", label: "F" },
    ],
  },
  {
    label: "J/P",
    options: [
      { value: "J", label: "J" },
      { value: "P", label: "P" },
    ],
  },
];

export default function MBTISelect({
  mbti = ["", "", "", ""],
  setMbti,
}: {
  mbti: string[];
  setMbti: Dispatch<SetStateAction<string[]>>;
}) {
  // const [mbti, setMbti] = useState(["", "", "", ""]);

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newMbti = [...mbti];
    newMbti[index] = event.target.value;
    setMbti(newMbti);
  };

  return (
    <div>
      {mbtiOptions.map((group, index) => (
        <div key={index}>
          <label>{group.label}</label>
          <select
            value={mbti[index]}
            onChange={(event) => handleChange(index, event)}
          >
            <option value="">선택</option>
            {group.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ))}
      <div>선택된 MBTI: {mbti.join("")}</div>
    </div>
  );
}
