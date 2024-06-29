import Subnav from "./components/navbar/Subnav";
import Content from "./components/content/Content";
import Facilities from "./components/content/Facilities";
import Footer from "./components/footer/Footer";
import Textcontent from "./components/content/Textcontent";

export default function Home() {
  return (
    <>
    <Subnav/>
    <Content/>
    <Facilities/>
    <Textcontent/>
    <Footer/>
    </>
  );
}