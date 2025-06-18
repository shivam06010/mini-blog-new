import Image from "next/image";
import Header from "./components/header";
import BlogPage from "./pages/Blog-page";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="bg-[#FBFCFE] h-full">
        <BlogPage />
      </div>
    </div>
  );
}
