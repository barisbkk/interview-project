import data from "../helper/data";
import Card from "./card/Card";

const Main = () => {
  return (
    <div className="main">
      {data.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Main;
