import { Dispatch, SetStateAction } from "react";

export default function TextArea({
  name,
  title,
  value,
  setState,
  showTitle = true,
  cols = 22,
  rows = 3,
  maxLength = 100
}: {
  name: string;
  title: string;
  value: string;
  setState: Dispatch<SetStateAction<string>>;
  showTitle?: boolean;
  cols?: number;
  rows?: number;
  maxLength?: number;
}) {
  return (
    <div className="w-full">
      {showTitle && <label htmlFor={name}>{title}</label>}
      <textarea
        id={name}
        value={value}
        cols={cols}
        rows={rows}
        maxLength={maxLength}
        onChange={(e) => setState(e.target.value)}
        className="w-full py-2 px-3 resize-none outline-none text-xs overflow-hidden"
      />
    </div>
  );
}
