import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      
      
      <div className="flex flex-col md:flex-row px-16  gap-4 mt-10">
        <img
          src="/images/1.jpg"
          alt="Image 1"
          className="w-[70%] md:w-[70%] h-auto"
        />

        <img
          src="/images/2.jpg"
          alt="Image 2"
          className="w-[30%] md:w-[30%] h-auto"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;