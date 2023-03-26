import { Dispatch, SetStateAction } from "react";

import FileImage from "./file-image";

import { FaCog } from "react-icons/fa";

interface FileInputWithPreviewProps {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
  imageOnChange: (newFile: File) => void;

  // CSS 스타일
  width?: string;
  height?: string;
  rounded?: string;
  hasButton?: boolean;
  defaultImage?: string;
}

// 이미지 미리보기 + 파일 인풋 핸들러
export default function FileInputWithPreview({
  file,
  setFile,
  imageOnChange = () => {},
  width = "w-64",
  height = "h-64",
  rounded = "",
  hasButton = true,
  defaultImage = "",
}: FileInputWithPreviewProps) {
  const handleFileChange = (newFile: File) => {
    setFile(newFile);
    imageOnChange(newFile);
  };

  return (
    <>
      <div className={`shrink-0 ${width} ${height} mb-4`}>
        <label
          className={`w-full h-full block relative cursor-pointer`}
          htmlFor="image"
        >
          <div
            className={`w-full h-full ${rounded} overflow-hidden  bg-slate-200`}
          >
            {(file || defaultImage) && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={
                  (file !== null && URL.createObjectURL(file)) || defaultImage
                }
                alt="이미지 미리보기"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          {!hasButton && (
            <div className="p-1 absolute right-0 bottom-0 rounded-full box-border bg-gray-500">
              <FaCog size="12" color="#fff" className="" />
            </div>
          )}
        </label>
      </div>

      <FileImage setFileState={handleFileChange} hasButton={hasButton} />
    </>
  );
}
