import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaBookOpen,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        <div className="space-y-2">
          <Link className="flex items-center gap-1" to="/">
            <span className=" text-4xl md:text-5xl   text-purple-600">
              {" "}
              <FaBookOpen></FaBookOpen>{" "}
            </span>
            <span className=" text-xl md:text-2xl font-medium md:font-semibold">
              BookShelf
            </span>
          </Link>
          <p className="text-sm">
            Track, manage and enjoy your personal reading journey.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="flex items-center gap-2">
            <FaEnvelope /> virtual@bookshelf.com
          </p>
          <p className="flex items-center gap-2">
            <FaPhone /> +880 1402790001
          </p>
        </div>

        {/* Terms & Conditions */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Legal</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.goodreads.com/about/terms"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="https://www.goodreads.com/about/privacy"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.goodreads.com/about/privacy"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Return Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-700"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-700"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-base-300 text-sm">
        &copy; {new Date().getFullYear()} Bookshelf. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
