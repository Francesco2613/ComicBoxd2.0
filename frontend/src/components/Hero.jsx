// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/Hero.css"; // optional for extra styles/animations
import "../css/comic-page-style.css";
import PopUp from "../pages/PopUp";
import { Link } from "react-router-dom";

const images = [
  {
    src: "/Images/dylan_dog_bg.jpg",
    alt: "Comic Collection",
  },
  {
    src: "/Images/manhattan_bg.jpg",
    alt: "Superhero Comics",
  },
  {
    src: "/Images/akira_bg.jpg",
    alt: "Manga Collection",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = images.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideCount]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  function handleClick() {
    //alert("You clicked me!");
    console.log("PopUp called");
  }

  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Image Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        <div id="carousel" className="w-full h-full relative">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-black opacity-10" />
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div id="confetti" className="md:w-3/5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeIn">
            ComicBoxd – Connect through Comics!
          </h1>
          <p className="text-lg md:text-xl text-cbrand-300 mb-8 animate-fadeIn animation-delay-300">
            Join the social network for comic and manga enthusiasts. Track what
            you’ve read, discover new titles, and connect with friends to see
            what they’re enjoying.
          </p>
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 animate-fadeIn animation-delay-500">
            <button
              id="register-button"
              href="#"
              className="bg-cbrand-1000 hover:bg-cbrand-1002 px-6 py-3 rounded-lg text-lg font-medium transition-colors"
              //onClick={handleClick}
            >
              <Link to="/PopUp">Get Started — It’s Free!</Link>
            </button>
            <button
              href="#"
              className="bg-black bg-opacity-80 hover:bg-opacity-100 px-6 py-3 rounded-lg text-lg font-medium transition-colors border border-zinc-800"
            >
              <i className="fas fa-info-circle mr-2"></i> How It Works
            </button>
          </div>
          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl animate-fadeIn animation-delay-700">
            {[
              { label: "Comics", value: "450K+" },
              { label: "Ratings", value: "12M+" },
              { label: "Members", value: "3M+" },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center bg-black bg-opacity-70 p-3 rounded-lg border border-zinc-800 hover:scale-105 transition-transform cursor-pointer"
              >
                <p className="text-2xl font-bold text-cbrand-1001 hover:text-cbrand-1002">
                  {item.value}
                </p>
                <p className="text-sm text-cbrand-300">{item.label}</p>
              </div>
            ))}
          </div>
          {/* Carousel Indicators */}
          <div className="mt-8 flex gap-2 animate-fadeIn animation-delay-1000">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index
                    ? "bg-cbrand-1001"
                    : "bg-white bg-opacity-50"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
