interface Props {
  children?: React.ReactNode;
  borderRadiusStyle?: string;
}

export default function AlbumCover({ children, borderRadiusStyle }: Props) {
  return (
    <div
      className={`h-1/2 md:h-full flex-1 w-full md:w-2/3  bg-slate-400 drop-shadow-xl scroll-p-2 overflow-y-scroll scrollbar-hide overflow-x-hidden relative ${borderRadiusStyle}`}
    >
      <div
        className="absolute w-full h-full bg-gradient-to-b from-[#3a6570] to-transparent
  block"
      />
      <div className="absolute w-full h-full">{children}</div>
    </div>
  );
}
