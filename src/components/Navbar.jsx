
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-4">

        {/* Logo */}
        <Link to="/" className="text-lg font-semibold">
          sts
        </Link>

        {/* Menu Tengah */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-8">
          <Link
            to="/"
            className="text-sm text-gray-600 hover:text-black"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-sm text-gray-600 hover:text-black"
          >
            About
          </Link>

          <Link
            to="/testimony"
            className="text-sm text-gray-600 hover:text-black"
          >
            Testimony
          </Link>

          <Link
            to="/faq"
            className="text-sm text-gray-600 hover:text-black"
          >
            FAQ
          </Link>
        </div>

        {/* Sign In */}
        <Link
          to="/signin"
          className="ml-auto rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Sign In
        </Link>

      </div>
    </nav>
  );
}

