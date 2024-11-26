import Navbar from "./components/navbar";
import Hero from "./components/hero-section";
import WorkManagement from "./components/work-management";
import Extension from "./components/extension";
import Customise from "./components/customise";
import YourWork from "./components/your-work";
import Sponsors from "./components/sponsors";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="w-[1922px] h-[5669px]">
      <Navbar />
      <Hero />
      <WorkManagement />
      <Extension />
      <Customise />
      <YourWork />
      <Sponsors />
      <Footer />
    </div>
  );
}
