import { Dispatch, SetStateAction } from "react";

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
  mbti,
  setMbti,
}: {
  mbti: string[];
  setMbti: Dispatch<SetStateAction<string[]>>;
}) {
  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newMbti = [...mbti];
    newMbti[index] = event.target.value;
    setMbti(newMbti);
  };

  return (
    <div className="flex flex-col gap-4 text-center items-center">
      <h4 className="w-40 bg-black text-white">MBTI(필수)</h4>
      <div className="flex gap-4">
        {mbtiOptions.map((group, index) => (
          <div key={index}>
            <select
              className={`w-14 h-14 rounded-full font-lato text-center outline-none shadow-lg`}
              value={mbti[index]}
              onChange={(event) => handleChange(index, event)}
            >
              <option value="" className="text-gray-300">
                {group.label}
              </option>
              {group.options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className={"text-blue-500"}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <h1 className="h-11 text-4xl font-bold">{mbti.join("")}</h1>
    </div>
  );
}
