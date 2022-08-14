import {
  TitlePage,
  PostPage,
  SwiperPage,
  TeamPage,
  QuotePage,
  ContactPage,
  FaqPage,
  BottomSwiperPage,
  Footer,
} from "../components";
import { useState, useEffect } from "react";
export default function Home() {
  const [width, setWidth] = useState();
  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setWidth(width);

    function handleResize() {
      const { innerWidth: width, innerHeight: height } = window;
      setWidth(width);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <>
      <TitlePage />
      <PostPage />
      <SwiperPage width={width} />
      <TeamPage />
      <QuotePage />
      <ContactPage />
      <FaqPage />
      <BottomSwiperPage width={width} />
      <Footer width={width} />
    </>
  );
}
