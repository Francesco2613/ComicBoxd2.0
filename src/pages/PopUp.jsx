import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import JSConfetti from "js-confetti";

//TODO make it a SPA

function PopUp() {
  // We generate confetti
  const jsConfettiRef = useRef(null);
  useEffect(() => {
    console.log("PopUp page open");
    jsConfettiRef.current = new JSConfetti();
    jsConfettiRef.current.addConfetti({
      confettiColors: ["#ef4331", "#fef200", "#02bcf4"],
      confettiNumber: 1000,
    });
  }, []);

  return (
    <div
      id="register-modal"
      className="fixed inset-0 bg-black/80 flex items-start sm:items-center justify-center overflow-y-auto py-8 px-4 z-50"
    >
      <div className="rounded-lg w-full max-w-5xl mx-4 flex flex-col sm:flex-row">
        <img
          src="Images/Cesare.png"
          alt="Join ComicBoxd"
          className="w-full sm:w-1/3 object-contain sm:object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none max-h-[80vh]"
        />
        <div className="p-4 sm:w-1/2">
          <h2 className="text-xl font-bold text-white mb-4">Join ComicBoxd!</h2>

          <p className="text-cbrand-300 mb-4">
            🎉 Thanks for choosing to join ComicBoxd! We're excited to have you
            on board. Choose the plan that suits you best and start exploring a
            world of comics!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="border border-cbrand-300 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Basic Plan
              </h3>
              <p className="text-cbrand-300 mb-2">
                Access to thousands of free comics and user ratings, but with
                tons of advertising that will ruin your experience.
              </p>
              <p className="text-xl text-white font-bold">$0/month</p>
            </div>

            <div className="border border-cbrand-1002 bg-cbrand-1002/10 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Premium Plan
              </h3>
              <p className="text-cbrand-300 mb-2">
                Everything in Basic, plus exclusive content, early releases, and
                creator spotlights.
              </p>
              <p className="text-xl text-white font-bold">$59.99/month</p>
            </div>
          </div>

          <button
            id="register-modal-close"
            className="bg-cbrand-1000 hover:bg-cbrand-1002 px-3 py-1 rounded text-lg text-white"
          >
            <Link to="/">Close</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
