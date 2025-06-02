import { Link } from "react-router-dom";
import "../css/comic-page-style.css";

//TODO make the stars dynamic according to the rating, create a detail page for each comic, create the favorite/my_comics pages

const ComicCard = ({ comic }) => {
  return (
    <Link to={`/comics/${comic.id}`}>
      <div className="comic-card group" data-comic-id={comic.id}>
        <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-lg mb-3">
          <img
            src={comic.url}
            alt={comic.title}
            className="w-full h-full object-cover"
          />
          <div className="comic-hover-details opacity-0 transition-opacity absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-4 group-hover:opacity-100">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-cbrand-1001">
                {comic.publisher}
              </span>
              <div className="flex">
                <i className="fas fa-star text-yellow-400 text-sm"></i>
                <span className="text-sm ml-1">{comic.rating}</span>
              </div>
            </div>
            <div className="flex space-x-2 mt-2">
              <button className="bg-zinc-800 hover:bg-cbrand-1002 p-2 rounded-full">
                <i className="fas fa-bookmark text-xs"></i>
              </button>
              <button className="bg-zinc-800 hover:bg-cbrand-1000 p-2 rounded-full">
                <i className="fas fa-heart text-xs"></i>
              </button>
              <button className="bg-zinc-800 hover:bg-zinc-700 flex-1 rounded-full text-xs">
                Add to list
              </button>
            </div>
          </div>
        </div>
        <h3 className="font-medium text-sm">{comic.title}</h3>
        <p className="text-cbrand-400 text-xs mb-1">{comic.author}</p>
        <div className="rating-stars text-xs">
          <i className="fas fa-star active"></i>
          <i className="fas fa-star active"></i>
          <i className="fas fa-star active"></i>
          <i className="fas fa-star active"></i>
          <i className="fas fa-star-half-alt active"></i>
        </div>
      </div>
    </Link>
  );
};

export default ComicCard;
