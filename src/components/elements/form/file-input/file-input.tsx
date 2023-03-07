import { ChangeEvent } from "react";

import { FaFileImage } from "react-icons/fa";

export default function FileInput({
  onChange,
}: {
  onChange: (file: File) => void;
}) {
  /** onChange에 0번째 file 전달 */
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    onChange(file);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <input
        id="image"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <label
        htmlFor="image"
        className="py-2 px-4 bg-gray-600 hover:bg-gray-500 text-white text-sm rounded inline-flex gap-2 items-center cursor-pointer"
      >
        <FaFileImage size="18" color="#eee" />
        <span>이미지 업로드</span>
      </label>
    </div>
  );
}
