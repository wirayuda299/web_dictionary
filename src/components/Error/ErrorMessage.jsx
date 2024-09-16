export default function ErrorMessage({ errorMessage, onReload }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-lg p-3 font-semibold">{errorMessage}</p>
      <button
        onClick={onReload}
        className="text-sm px-4 py-2 rounded-md mt-2 bg-black text-white"
      >
        Reload
      </button>
    </div>
  );
}
