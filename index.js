function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your Age: {props.age}</p>
    </div>
  );
}

var app = (
  <div>
    <Person name="Gojira" age="9" />
    <Person name="Kaiju" age="3" />
  </div>
);

ReactDOM.render(app, document.querySelector("#app"));
