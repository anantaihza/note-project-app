import { Link } from "react-router-dom";

export default function TitleActive() {
  return (
    <>
      <h1 className="text-3xl font-bold">Catatan Aktif</h1>
      <Link to="/add" className="my-auto text-[#219BFF]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 inline"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>{" "}
        Tambah Catatan
      </Link>
    </>
  );
}
