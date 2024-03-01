const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="flex px-20 md:flex-row flex-col items-center">
        <div className="w-1/2 space-y-4">
          <h1 className="text-2xl font-bold">
            Organize your work and life, finally be success.
          </h1>
          <p>
            Become focused, organized, and calm with Todoist. The world’s simple
            task manager and to-do list app.Join millions of people who organize
            work and life with Tasker
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <img className="h-30 w-80" src="/src/assets/hero.png" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
