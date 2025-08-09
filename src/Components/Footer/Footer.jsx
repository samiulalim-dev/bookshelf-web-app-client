import {
  FaBookOpen,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-tr from-[#0F2027] via-[#203A43] to-[#2C5364] text-gray-300 pt-16 pb-10 overflow-hidden">
      {/* Background overlay with subtle animated gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-900 via-slate-900 to-teal-900 opacity-80 animate-gradient-x"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-12">
        {/* Logo & Description */}
        <div className="space-y-4">
          <Link className="flex items-center gap-1" to="/">
            <span className=" text-4xl md:text-5xl  text-purple-600 ">
              {" "}
              <FaBookOpen></FaBookOpen>{" "}
            </span>
            <span className=" text-xl md:text-2xl font-medium md:font-semibold">
              BookShelf
            </span>
          </Link>
          <p className="text-sm leading-relaxed opacity-90">
            Track, manage and enjoy your personal reading journey. Your library,
            always with you.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-purple-600 pb-2">
            Contact Us
          </h3>
          <p className="flex items-center gap-3 mb-3 hover:text-purple-400 cursor-pointer transition">
            <FaEnvelope /> virtual@bookshelf.com
          </p>
          <p className="flex items-center gap-2 hover:text-purple-400 cursor-pointer transition">
            <FaPhone /> +880 1402790001
          </p>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-purple-600 pb-2">
            Legal
          </h3>
          <ul className="space-y-2 opacity-90">
            <li>
              <a
                href="https://www.goodreads.com/about/terms"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 transition"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="https://www.goodreads.com/about/privacy"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.goodreads.com/about/privacy"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 transition"
              >
                Return Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-purple-600 pb-2">
            Follow Us
          </h3>
          <div className="flex gap-5 text-2xl text-gray-300">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-500 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-500 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 transition"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="sm:border-t border-purple-700 opacity-40 mt-18 w-11/12 mx-auto"></div>

      {/* Footer Bottom & Images */}
      <div className="relative mt-6 text-center z-50 text-white text-sm select-none">
        &copy; {new Date().getFullYear()} BookShelf. All rights reserved.
      </div>

      {/* Decorative overlapping images */}
      <img
        src="https://i.ibb.co/zNk7XT4/Rectangle-97.png"
        alt="decorative wave 1"
        className="absolute bottom-[15px] sm:bottom-0 left-0 right-0 z-10 w-full opacity-60"
      />
      <img
        src="https://i.ibb.co/0mp2FwS/Rectangle-95.png"
        alt="decorative wave 2"
        className="absolute bottom-0 left-0 right-0 z-20  w-full opacity-80"
      />
    </footer>
  );
};

export default Footer;
