import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Aboutus() {
  return (
    <div>
      <Header />
      <Navbar />
      

      <div className="mt-16 text-center">
        <div className="flex flex-col  justify-center items-center gap-4">
          <img
            src="/images/img1.gif"
            alt="Image 1"
            className="w-[70%] md:w-[70%] h-auto"
          />
        </div>

        <div className="flex flex-col  justify-center items-center gap-4 mt-2 md:mt-4">
          <img
            src="/images/img2.gif"
            alt="Image 2"
            className="w-[70%] md:w-[70%] h-auto"
          />
        </div>

        <div className="flex flex-col  justify-center items-center gap-4 mt-2 md:mt-4">
          <img
            src="/images/img3.gif"
            alt="Image 3"
            className="w-[70%] md:w-[70%] h-auto"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-4 mt-2 md:mt-4">
          <img
            src="/images/img4.gif"
            alt="Image 4"
            className="w-[70%] md:w-[70%] h-auto"
          />
        </div>

        <div className="flex flex-col  justify-center items-center gap-4 mt-2 md:mt-4">
          <img
            src="/images/img5.gif"
            alt="Image 5"
            className="w-[70%] md:w-[70%] h-auto"
          />
        </div>

        <div className="flex flex-col  justify-center items-center gap-4 mt-2 md:mt-4">
          <img
            src="/images/img6.gif"
            alt="Image 6"
            className="w-[70%] md:w-[70%] h-auto"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutus;
