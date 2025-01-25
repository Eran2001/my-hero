
import "./App.css";
import Card from "./Card";

export default function App() {
  return (
    <>
      <div className="bg-div">
        <div className="left-div">
          <h2 className="left-heading">
            Orchestration with <span>Kubernets on Apple.</span>
          </h2>
          <p className="left-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            sapiente ea non obcaecati omnis. Cumque dolorem consequuntur.
          </p>
        </div>
        <div className="right-div">
          <p className="right-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            sapiente ea non obcaecati omnis. Cumque dolorem consequuntur ut
            harum ea voluptatibus.
          </p>
          <button className="btn">Contact Info</button>
        </div>
      </div>
      <div className="card-div">
        <Card />
      </div>
    </>
  );
}
