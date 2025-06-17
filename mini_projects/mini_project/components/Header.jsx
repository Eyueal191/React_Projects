function Header({ languages }) {
  const colors = [
    "bg-red-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-indigo-200",
    "bg-orange-200",
    "bg-teal-200",
    "bg-rose-200",
  ];

  const languagesJsx = languages.map((language, i) => (
    <li
      key={i}
      className={`w-28 h-12 flex items-center justify-center text-sm font-semibold border border-gray-300 rounded-xl shadow-sm ${colors[i % colors.length]}`}
    >
      {language}
    </li>
  ));

  return (
    <div className="mb-8 p-6 border border-gray-700 rounded-2xl bg-gray-900 shadow-lg">
      <h2 className="text-lg font-bold mb-5 text-center text-white">Languages</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
        {languagesJsx}
      </ul>
    </div>
  );
}

export default Header;
