import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <div className="pl-5 pt-20">
        <p className="text-xl text-black font-semibold">
          JOIN THE WAITLIST: BE FIRST TO SHOP OUR MODEST COLLECTION WHEN WE
          LAUNCH.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 px-5 pt-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 "
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="border p-2 rounded w-full sm:w-480px h-12"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="bg-gray-700 text-white px-4 py-2 font-bold rounded hover:bg-black h-12"
          >
            Subscribe
          </button>
        </form>

        <div className="flex gap-4 mt-2 lg:mt-0">
          <Link
            to="https://www.facebook.com/people/MDST-Market/61573840771917/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/f.png" alt="facebook" className="w-4 h-4" />
          </Link>

          <Link
            to="https://www.instagram.com/mdst_market/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/i.png" alt="instagram" className="w-4 h-4" />
          </Link>

          <Link
            to="https://www.tiktok.com/@mdst.market"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/tt.png" alt="tiktok" className="w-4 h-4" />
          </Link>
        </div>
      </div>

      
      <div className="bg-gray-50 text-sm text-gray-500 mt-10">
        <ul className="flex flex-wrap gap-5 ml-5 py-5 items-center">
          <li>2025, MDST Market · 28 Church Street, Winchester, MA 01890</li>

          <li>
            <Link to="/contact" className="text-blue-600">
              hello@mdstmarket.com
            </Link>
          </li>

          <li>
            <Link to="/privacy-policy" className="text-blue-600">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
