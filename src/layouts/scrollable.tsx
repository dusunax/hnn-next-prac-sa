import { defaultProps } from "@/models/props";

export default function Scrollable({ children }: defaultProps) {
  return (
    <div className="h-full flex-1 overflow-y-scroll scrollbar-hide overflow-x-hidden">
      {children}
    </div>
  );
}
