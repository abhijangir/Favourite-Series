import "./App.css";
import Card from "./components/Card";
import Heading from "./components/Heading";
import sData from "./components/SeriesData";

function App() {
  return (
    <>
      <Heading />
      {sData.map((val) => {
        return (
          <Card
            sname={val.sname}
            imgsrc={val.imgsrc}
            title={val.title}
            link={val.link}
          />
        );
      })}
    </>
  );
}

export default App;
