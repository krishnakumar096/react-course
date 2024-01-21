import React from "react";
import ReactDOM from "react-dom";

const Title = () => {
  return <h1 className="title">Hello world from JSX!</h1>;
};

const HaedingComponent = () => {
  return (
    <div className="heading">
      <Title />
      <h1>Welcome to Functional Component!</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HaedingComponent />);
