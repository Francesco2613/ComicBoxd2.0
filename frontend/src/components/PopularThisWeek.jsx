import { Link } from "react-router-dom";
import ComicCard from "./ComicCard";

import comics from "../../data/comics.json";

/* const comics = [
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
]; */

const PopularThisWeek = () => {
  console.log("comics:", comics.comics);
  return (
    <section className="py-12 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Popular This Week</h2>
          <a className="text-cbrand-1001 hover:text-cbrand-300 flex items-center">
            <Link to="/PopUp">
              View all <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </a>
        </div>

        <div className="comics-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Comic Cards */}
          {/* <ComicCard comic={{}} />
          <ComicCard comic={{}} />
          <ComicCard comic={{}} />
          <ComicCard comic={{}} />
          <ComicCard comic={{}} /> */}

          {comics.comics.map((comic) => (
            <ComicCard comic={comic} key={comic.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularThisWeek;
