export default function Header() {
  return (
    <header className="h-10 flex items-center justify-between bg-[#aaa] text-[#fff]">
      <div className="flex items-center relative">
        <span>로고</span>
      </div>
      <span className="absolute left-1/2 -translate-x-1/2">제목</span>
      <div></div>
    </header>
  );
}
