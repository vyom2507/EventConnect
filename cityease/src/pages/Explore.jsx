import React from "react";
import "../styles/styles.css";

function Explore() {
  const housingData = [
    {
      name: "Housing near Illinois Institute of Technology",
      desc: "Student housing near Illinois Tech campus with modern amenities.",
      img: "/images/flats.jpg",
      link: "https://www.google.com/maps/place/Illinois+Institute+of+Technology,+Chicago,+IL+60616/",
    },
    {
      name: "The Shelby Apartments",
      desc: "Luxury apartments near South Loop with skyline views.",
      img: "/images/shelby.jpg",
      link: "https://www.google.com/maps/place/The+Shelby+Apartments/@41.8576558,-87.6253898,17z/",
    },
    {
      name: "777 South State",
      desc: "Affordable downtown housing near CTA Red Line.",
      img: "/images/777south.jpg",
      link: "https://www.google.com/maps/place/777+S+State+St,+Chicago,+IL+60605/",
    },
  ];

  const groceryData = [
    {
      name: "Trader Joe’s",
      desc: "Popular grocery chain offering fresh produce and organic options.",
      img: "/images/traderjoes.jpg",
      link: "https://www.google.com/maps/place/Trader+Joe's/@41.8721692,-87.626403,17z/",
    },
    {
      name: "Mariano’s South Loop",
      desc: "Large grocery store with bakery, deli, and ready-to-eat meals.",
      img: "/images/marianos.jpg",
      link: "https://www.google.com/maps/place/Mariano's/@41.8606711,-87.6238985,17z/",
    },
    {
      name: "Target Express",
      desc: "Quick essentials, groceries, and home items near downtown.",
      img: "/images/target.jpg",
      link: "https://www.google.com/maps/place/Target/@41.8694737,-87.6248862,17z/",
    },
  ];

  const cafeData = [
    {
      name: "Yolk South Loop",
      desc: "Trendy breakfast and brunch café famous for pancakes & omelets.",
      img: "/images/yolk.jpg",
      link: "https://www.google.com/maps/place/Yolk+-+South+Loop/@41.8671193,-87.6220033,17z/",
    },
    {
      name: "Hero Coffee Bar",
      desc: "Cozy spot for espresso, pastries, and peaceful study time.",
      img: "/images/hero-coffee.jpg",
      link: "https://www.google.com/maps/place/Hero+Coffee+Bar/@41.879543,-87.626868,17z/",
    },
    {
      name: "Dollop Coffee Co.",
      desc: "Neighborhood coffeehouse with a relaxing vibe and great pastries.",
      img: "/images/dollop.jpg",
      link: "https://www.google.com/maps/place/Dollop+Coffee+Co./@41.879236,-87.623475,17z/",
    },
  ];

  const parksData = [
    {
      name: "Grant Park",
      desc: "Massive downtown park hosting events, gardens, and the famous Buckingham Fountain.",
      img: "/images/grantpark.jpg",
      link: "https://www.google.com/maps/place/Grant+Park/@41.872217,-87.619537,17z/",
    },
    {
      name: "Millennium Park",
      desc: "Iconic park with The Bean, art, and outdoor concerts.",
      img: "/images/millennium.jpg",
      link: "https://www.google.com/maps/place/Millennium+Park/@41.882552,-87.622551,17z/",
    },
    {
      name: "Lakefront Trail",
      desc: "Beautiful walking and cycling path along Lake Michigan.",
      img: "/images/lakefront.jpg",
      link: "https://www.google.com/maps/place/Lakefront+Trail,+Chicago,+IL/",
    },
  ];

  const hospitalData = [
    {
      name: "University of Chicago Medical Center",
      desc: "Leading hospital offering advanced care and research facilities.",
      img: "/images/uchicago-hospital.jpg",
      link: "https://www.google.com/maps/place/University+of+Chicago+Medical+Center/@41.7899317,-87.6049517,17z/",
    },
    {
      name: "Rush University Medical Center",
      desc: "Top-rated hospital with comprehensive treatment and trauma center.",
      img: "/images/rush.jpg",
      link: "https://www.google.com/maps/place/Rush+University+Medical+Center/@41.874531,-87.674212,17z/",
    },
    {
      name: "Mercy Hospital & Medical Center",
      desc: "Community hospital located in Bronzeville with ER services.",
      img: "/images/mercy.jpg",
      link: "https://www.google.com/maps/place/Mercy+Hospital+%26+Medical+Center/@41.8477997,-87.6210632,17z/",
    },
  ];

  const renderSection = (title, data) => (
    <div className="explore-section">
      <h2>{title}</h2>
      <div className="explore-grid">
        {data.map((item, index) => (
          <div className="explore-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="map-link"
            >
              View on Map
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section
        className="page-hero"
        style={{
          backgroundImage: "url('/images/explore-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay">
          <div className="hero-content">
            <h1>
              <center>Explore Chicago</center>
            </h1>
            <p>Discover housing, groceries, and everyday essentials near you.</p>
          </div>
        </div>
      </section>

      {/* Sections */}
      {renderSection("🏘 Housing Options", housingData)}
      {renderSection("🛒 Groceries & Essentials", groceryData)}
      {renderSection("☕ Cafes & Restaurants", cafeData)}
      {renderSection("🌳 Parks & Attractions", parksData)}
      {renderSection("🏥 Hospitals & Clinics", hospitalData)}
    </>
  );
}

export default Explore;
