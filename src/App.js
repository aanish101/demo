import "./App.css";
import Icon1 from "./Assets/SVG/Icon1.svg";
import Icon2 from "./Assets/SVG/Icon2.svg";
import Icon3 from "./Assets/SVG/Icon3.svg";
import Icon4 from "./Assets/SVG/Icon4.svg";
import Icon5 from "./Assets/SVG/Icon5.svg";
import Icon6 from "./Assets/SVG/Icon6.svg";
function App() {
  const data = [
    {
      id: 1,
      heading: "Feature 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.",
      icon: Icon1,
    },
    {
      id: 2,
      heading: "Feature 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.",
      icon: Icon2,
    },
    {
      id: 3,
      heading: "Feature 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.",
      icon: Icon3,
    },
    {
      id: 4,
      heading: "Feature 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.",
      icon: Icon4,
    },
    {
      id: 5,
      heading: "Feature 5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.",
      icon: Icon5,
    },
    {
      id: 6,
      heading: "Feature 6",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.",
      icon: Icon6,
    },
  ];
  return (
    <div className="App">
      <div className="container p-6 bold fz-sm ls-39 p-md-3 pt-3">
        <h3 className="text-center  text-gray mt-5 mb-5 fz-sm font-semi-bold">
          FEATURES
        </h3>
        <h1 className="text-center main-heading mb-5 font-semi-bold">
          Here is more of what
          <br />
          it can do for you
        </h1>
        <p className="text-center sub-heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus
          turpis sed sapien amet, purus condimentum sit.
        </p>
        <div className="items-grid">
          {data.map((item) => (
            <div className="item p-3" key={item.id}>
              <div className="item-icon flex justify-center mb-3 ">
                <img src={item.icon} alt="icon" className="icon" />
              </div>
              <div className="item-text text-center">
                <h4 className="item-heading mb-2">{item.heading}</h4>
                <p className="item-text-content">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-3">
          <button className="btn">Register your Tesla</button>
        </div>
      </div>
    </div>
  );
}

export default App;
