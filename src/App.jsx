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
import Services from "./components/Services";
import Prayers from "./components/Prayers";
export default function App() {
  return (
    <main>
      <Header />
      <Prayers />
      <About />
      <Philosophy />
      {/* parallax */}
      <Donate />
      <Services />
      <ImageGallery />
      {/* parallax */}
      <IslamicPillars />
      <Events />
      <News />
      {/* parallax */}
      <Newsletter />
      <Footer />
    </main>
  );
} 