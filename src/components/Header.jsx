const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="py-5 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="h-10 w-10" src="/src/assets/logo.svg" alt="logo" />
          <span className="ml-2 text-xl text-black font-bold">Tasker</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
