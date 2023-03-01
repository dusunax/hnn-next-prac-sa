import { Roboto, Noto_Sans_KR } from "next/font/google";

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--roboto",
});

export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function FontProvider({ children }: DefaultLayoutProps) {
  return (
    <div className={cls(notoSansKr.className, roboto.variable)}>{children}</div>
  );
}
