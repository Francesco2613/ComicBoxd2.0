import "../css/GetStarted.css";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <section
      className="get-started relative py-16 bg-cover bg-center bg-no-repeat"
      /* style="background-image: url(Images/bonelli_bg.jpg)" */
    >
      <div class="absolute inset-0 bg-black bg-opacity-80"></div>

      <div class="relative max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold mb-4 text-white">
          Ready to start your comic journey?
        </h2>
        <p class="text-lg text-cbrand-300 mb-8">
          Join thousands of comic enthusiasts. Track what you read, discover new
          titles, and connect with other fans.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            class="bg-cbrand-1000 hover:bg-cbrand-1002 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
          >
            <Link to="/PopUp"> Create your free account</Link>
          </a>
          <a
            href="#"
            class="bg-zinc-800 hover:bg-zinc-700 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
          >
            Browse as guest
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
