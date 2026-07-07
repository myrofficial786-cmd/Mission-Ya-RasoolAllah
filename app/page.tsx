import Footer from "./components/Footer";
import Contact from "./components/Contact";
import PrayerTimes from "./components/PrayerTimes";
import Donation from "./components/Donation";
import Gallery from "./components/Gallery";
import Programs from "./components/Programs";
import Announcements from "./components/announcements";
import About from "./components/about";
import Stats from "./components/Stats";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
<Hero />
<Stats />
<About />
<Announcements />
<Programs />
<Gallery />
<Donation />
<PrayerTimes />
<Contact />
<Footer />


      <main className="min-h-screen bg-[#081C15] text-white">
      </main>
      </>
    
  );
}