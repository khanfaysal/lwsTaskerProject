import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="container md:w-full bg-white">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
