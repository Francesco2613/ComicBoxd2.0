import { useParams } from "react-router-dom";
import comics from "../../data/comics.json";
import NavBar from "../components/NavBar";

const ComicDetail = () => {
  const { id } = useParams();
  const comic = comics.comics.find((c) => c.id === id);
  return !comic ? (
    <div>Comic not found...</div>
  ) : (
    <>
      <NavBar />
      <section
        id="comic-detail"
        className="mt-16 max-w-4xl mx-auto p-4 bg-black/60 border-b border-zinc-800 flex flex-col"
      >
        <div className="flex flex-col md:flex-row gap-6 flex-1">
          <img
            src={comic.url}
            alt={comic.title}
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-2">{comic.title}</h2>
            <p className="text-cbrand-300 mb-4">{comic.description}</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span>Publisher:</span>
              <span>{comic.publisher}</span> <span>Author:</span>
              <span>{comic.author}</span> <span>Rating:</span>
              <span>{comic.rating}</span>
              <span>Release:</span>
              <span>{comic.releaseYear}</span> <span>Genre:</span>
              <span>{comic.genre}</span>
            </div>
            <div className="mt-4">
              <button className="bg-cbrand-1000 hover:bg-cbrand-1002 px-4 py-2 rounded-lg">
                Add to list
              </button>
              <button className="ml-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg">
                Rate This
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComicDetail;
