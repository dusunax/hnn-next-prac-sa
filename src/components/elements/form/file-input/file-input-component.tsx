import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import FileInput from "./file-input";

// 이미지 미리보기 + 파일 인풋 핸들러
export default function FileInputWithPreview({
  file,
  setFile,
}: {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
}) {
  const handleFileChange = (newFile: File) => {
    setFile(newFile);
  };

  return (
    <div>
      <div className="w-64 h-64 bg-slate-200 mb-4">
        {file && (
          <Image
            src={URL.createObjectURL(file)}
            width={100}
            height={100}
            alt="preview"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <FileInput onChange={handleFileChange} />
    </div>
  );
}
