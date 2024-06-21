import logo from "./logo.svg";
import Header from "./Header";
import Filters from "./filters/Filters";
import Card from "./Card";
import card1 from "./images/card1.jpeg";
import card2 from "./images/card2.jpeg";
import "./App.css";

function App() {
  const events = [
    {
      image: card1,
      title: "The Parcels @ The Ogden",
      description: "10 Tickets Remaining! 25 Stand by tickets :)",
    },
    {
      image: card2,
      title: "Khruangbin @ The Ogden",
      description: "10 Tickets Remaining! 25 Stand by tickets :)",
    },
    {
      image: card1,
      title: "The Parcels @ The Ogden",
      description: "10 Tickets Remaining! 25 Stand by tickets :)",
    },
    {
      image: card2,
      title: "The Parcels @ The Ogden",
      description: "10 Tickets Remaining! 25 Stand by tickets :)",
    },
    // Add more events as needed
  ];

  return (
    <div className="App">
      <Header />
      <Filters />
      <div className="content">
        {events.map((event, index) => (
          <Card
            key={index}
            image={event.image}
            title={event.title}
            description={event.description}
          />
        ))}
      </div>

      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
