import { Dispatch, SetStateAction } from "react";

export default function Input({
  name,
  title,
  value,
  setState,
  showTitle = true,
}: {
  name: string;
  title: string;
  value: string;
  setState: Dispatch<SetStateAction<string>>;
  showTitle?: boolean;
}) {
  return (
    <div>
      {showTitle && <label htmlFor={name}>{title}</label>}
      <input
        className="w-full text-sm outline-none px-2 py-1"
        id={name}
        type="text"
        value={value}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
}
