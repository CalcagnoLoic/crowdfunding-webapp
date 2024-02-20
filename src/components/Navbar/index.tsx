const Component = () => {
  const isMobile = window.innerWidth < 768 ? true : false;

  return (
    <>
      {isMobile ? (
        <p className="text-white">TO DO</p>
      ) : (
        <ul className="flex text-white gap-5 font-bold">
            <li>About</li>
            <li>Discover</li>
            <li>Get Started</li>
        </ul>
      )}
    </>
  );
};

export default Component;
