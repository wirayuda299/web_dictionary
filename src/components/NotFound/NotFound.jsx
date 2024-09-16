const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-5 padding">
      <span className="text-[4rem]">😕</span>
      <p className="font-bold text-xl text-center text-black-300">
        No Definitions Found
      </p>
      <p className="font-normal text-lg text-center text-gray-100">
        Sorry, we could not find definitions for the word you were looking for.
        You can try the search again at later time or head to the web instead.
      </p>
    </div>
  );
};

export default NotFound;
