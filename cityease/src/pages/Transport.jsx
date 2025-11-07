import React from "react";
import "../styles/styles.css";

function Transport() {
  const trainLines = [
    {
      name: "Red Line",
      color: "#c70039",
      desc: "Runs 24/7 between Howard (North Side) and 95th/Dan Ryan (South Side). Major stops include Loyola, Fullerton, Jackson, and Sox–35th.",
      img: "/images/red-line.jpg",
      link: "https://www.transitchicago.com/redline/",
    },
    {
      name: "Blue Line",
      color: "#0057b8",
      desc: "Connects O’Hare Airport to Forest Park, operating 24 hours. Key stops include Logan Square, Clark/Lake, and UIC–Halsted.",
      img: "/images/blue-line.jpg",
      link: "https://www.transitchicago.com/blueline/",
    },
    {
      name: "Green Line",
      color: "#009739",
      desc: "Runs from Harlem/Lake to Ashland/63rd and Cottage Grove. Passes through downtown via the Loop elevated tracks.",
      img: "/images/green-line.jpg",
      link: "https://www.transitchicago.com/greenline/",
    },
    {
      name: "Orange Line",
      color: "#ff6f00",
      desc: "Connects Midway Airport to the Loop. Ideal for travelers heading to downtown Chicago from the southwest.",
      img: "/images/orange-line.jpg",
      link: "https://www.transitchicago.com/orangeline/",
    },
    {
      name: "Brown Line",
      color: "#964b00",
      desc: "Operates from Kimball (Albany Park) to the Loop, providing scenic elevated views of the city’s North Side neighborhoods.",
      img: "/images/brown-line.jpg",
      link: "https://www.transitchicago.com/brownline/",
    },
    {
      name: "Purple Line",
      color: "#800080",
      desc: "Serves Evanston and Wilmette, connecting with the Red and Brown Lines during rush hours for downtown commuters.",
      img: "/images/purple-line.jpg",
      link: "https://www.transitchicago.com/purpleline/",
    },
    {
      name: "Pink Line",
      color: "#ff69b4",
      desc: "Links 54th/Cermak (Cicero) to the Loop, passing through Pilsen and the West Side with easy transfers downtown.",
      img: "/images/pink-line.jpg",
      link: "https://www.transitchicago.com/pinkline/",
    },
  ];

  return (
    <>
      {/* ---------- Hero Section ---------- */}
      <section
        
      >
        <div className="overlay">
          <div className="hero-content">
           <center> <h1>Public Transport</h1></center>
            <p>
              Navigate Chicago’s CTA train system with line details, maps, and
              station connections. Maps for Metra will be updated, stay tuned...
            </p>
          </div>
        </div>
      </section>

      {/* ---------- CTA Train Lines ---------- */}
      <section className="transport-section">
        <h2>Chicago 'L' Lines</h2>

        <div className="train-grid">
          {trainLines.map((line, index) => (
            <div className="train-card" key={index}>
              <div
                className="line-color"
                style={{ backgroundColor: line.color }}
              ></div>
              <img src={line.img} alt={line.name} />
              <h3 style={{ color: line.color }}>{line.name}</h3>
              <p>{line.desc}</p>
              <a
                href={line.link}
                target="_blank"
                rel="noreferrer"
                className="map-link"
              >
                View Map
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Bus Info Section ---------- */}
      <section className="bus-section">
        <h2>🚌 CTA Bus Service</h2>
        <p>
          Chicago also operates over <strong>100+ bus routes</strong> that
          connect neighborhoods, train stations, and key attractions.
        </p>
        <p>
          Popular routes include: <strong>#4 Cottage Grove</strong>,{" "}
          <strong>#6 Jackson Park Express</strong>, and{" "}
          <strong>#151 Sheridan</strong>.
        </p>
        <a
          href="https://www.transitchicago.com/maps/"
          target="_blank"
          rel="noreferrer"
          className="map-link"
        >
          Full CTA Bus & Train Map
        </a>
      </section>
    </>
  );
}

export default Transport;
