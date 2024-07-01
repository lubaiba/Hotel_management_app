import Subnav from "./components/navbar/Subnav";
import Content from "./components/content/Content";
import Facilities from "./components/content/Facilities";
import Rooms from "./components/content/Rooms";

export default function Home() {
  return (
    <>
    <Subnav/>
    <Content/>
    <Facilities/>
    <Rooms/>
    </>
  );
}