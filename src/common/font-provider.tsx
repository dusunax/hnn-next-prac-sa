import { Lato, Noto_Sans_KR, Gowun_Dodum } from "next/font/google";

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

const gowunDodum = Gowun_Dodum({
  // preload: true, 기본값
  subsets: ["latin"],
  weight: "400",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--lato",
});

export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function FontProvider({ children }: DefaultLayoutProps) {
  return (
    <div className={cls(gowunDodum.className, lato.variable)}>{children}</div>
  );
}
