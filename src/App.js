const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Gino's"),
    React.createElement(Pizza, {
      name: "Peperonni Pizza",
      description: "The Classic spicy cold cut pizza everybody loves",
    }),
    React.createElement(Pizza, {
      name: "Amatrician",
      description: "W/ Gorgonzola and olives",
    }),
    React.createElement(Pizza, {
      name: "Diavola",
      description: "All the spiciness you can handle",
    }),
    React.createElement(Pizza, {
      name: "Bianca",
      description: "A pizza with no pomodoro sauce",
    })
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
