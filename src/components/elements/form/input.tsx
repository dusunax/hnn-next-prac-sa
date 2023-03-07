import { Dispatch, SetStateAction } from "react";

export default function Input({
  name,
  title,
  value,
  setState,
}: {
  name: string;
  title: string;
  value: string;
  setState: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <input
        id={name}
        type="text"
        value={value}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
}
