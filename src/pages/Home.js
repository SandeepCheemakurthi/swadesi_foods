import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import CategoryGrid from "../components/CategoryGrid";
import Footer from "../components/Footer";
export default function Home(){

  return (
    <div className="app-shell">

      <Navbar/>

      <main className="app-content">
        <Hero/>

        {/* <CategoryGrid/> */}
      </main>

      <Footer/>

    </div>
  );

}