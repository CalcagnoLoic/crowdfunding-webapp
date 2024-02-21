const Component = () => {
  const isMobile = window.innerWidth < 768 ? true : false;

  return (
    <>
      {isMobile ? (
        <p className="text-white">TO DO</p>
      ) : (
        <ul className="flex gap-5 font-bold text-white ">
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer hover:underline">Discover</li>
          <li className="cursor-pointer hover:underline">Get Started</li>
        </ul>
      )}
    </>
  );
};

export default Component;
