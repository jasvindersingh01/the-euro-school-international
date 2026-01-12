import { Link } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";

export default function Breadcrumb({ page, parent, parentLink }) {
  return (
    <div className="inline-flex items-center space-x-3 px-5 py-3 text-sm mt-3">

      {/* Home */}
      <Link
        to="/"
        className="flex items-center gap-2 text-white font-medium transition"
      >
        <FaHome />
        Home
      </Link>

      <FaChevronRight className="text-gray-300 text-xs" />

      {/* Parent (Programs / About etc) */}
      {parent && (
        <>
          <Link
            to={parentLink}
            className="text-white transition"
          >
            {parent}
          </Link>
          <FaChevronRight className="text-gray-300 text-xs" />
        </>
      )}

      {/* Current Page */}
      <span className="text-white font-semibold">
        {page}
      </span>

    </div>
  );
}
