import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryGrid from "../components/CategoryGrid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="app-content">
        <Hero />

        <section className="home-section">
          <div className="home-section-header">
            <h2 className="home-section-title">Shop by Category</h2>
            <p className="home-section-subtitle">
              Handpicked Andhra sweets, snacks, and pickles for every occasion.
            </p>
          </div>
          <CategoryGrid />
        </section>
      </main>

      <Footer />
    </div>
  );
}