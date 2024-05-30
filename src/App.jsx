import About from "./components/About";
import Donate from "./components/Donate";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageGallery from "./components/ImageGallery";
import IslamicPillars from "./components/IslamicPillars";
import News from "./components/News";
import Newsletter from "./components/Newsletter";
import Philosophy from "./components/Philosophy";
import Prayers from "./components/Prayers";
import Services from "./components/Services";
import CustomCursor from "./components/atom/CustomCursor";
import Preloader from "./components/atom/Preloader";

export default function App() {
  return (
    <>
      <Preloader />
      <main>
        <CustomCursor />
        <Header />
        <Prayers />
        <About />
        <Philosophy />
        <Donate />
        <Services />
        <ImageGallery />
        <IslamicPillars />
        <Events />
        <News />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
