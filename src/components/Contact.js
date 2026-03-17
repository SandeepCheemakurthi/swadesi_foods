import React, { useMemo } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const withPublicUrl = (path) => `${process.env.PUBLIC_URL || ""}${path}`;

// Fill these when ready (use digits with country code, no + or spaces; ex: 919876543210)
const WHATSAPP_NUMBER_PRIMARY = "9621199989";
const WHATSAPP_NUMBER_SECONDARY = "8074819770";

// Optional: set this to your Google Maps place/link
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/fZDwueVW3pJZpKK58";

export default function Contact() {
  const whatsappContacts = useMemo(
    () => [
      { id: "primary", label: "WhatsApp (Primary)", number: WHATSAPP_NUMBER_PRIMARY },
      { id: "secondary", label: "WhatsApp (Secondary)", number: WHATSAPP_NUMBER_SECONDARY },
    ],
    []
  );

  return (
    <div className="app-shell">
      <Navbar />

      <main className="app-content">
        <div className="contact-page">
          <header className="contact-hero">
            <h1>Contact</h1>
            <p>Send us a message or chat with us on WhatsApp.</p>
          </header>

          <div className="contact-grid">
            <section className="contact-card">
              <h2>Reach us</h2>

              {/* <div className="contact-form">
                <label>
                  Name
                  <input placeholder="" />
                </label>

                <label>
                  Phone
                  <input placeholder="" />
                </label>
              </div> */}

              <div className="whatsapp-section">
                <h3>WhatsApp</h3>
                <div className="whatsapp-list">
                  {whatsappContacts.map((c) => {
                    const href = c.number ? `https://wa.me/${c.number}` : undefined;
                    return (
                      <a
                        key={c.id}
                        className={`whatsapp-pill ${href ? "" : "disabled"}`}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          if (!href) e.preventDefault();
                        }}
                        aria-disabled={!href}
                      >
                        <FaWhatsapp />
                        <span>{c.label}</span>
                        <span className="whatsapp-number">{c.number || "Add number"}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className="contact-card">
              <h2>
                <FaLocationDot /> Store address
              </h2>

              <div className="address-fields disabled-fields">
                <label>
                  Store name
                  <input placeholder="Ashritha Curry Point"/>
                </label>

                <label>
                  Address
                  <textarea placeholder="Car Shed Rd, Anand Nagar, SBI Colony, Pothinamallayya Palem" rows={4}/>
                </label>

                <div className="address-row">
                  <label>
                    City
                    <input placeholder="Visakhapatnam" />
                  </label>

                  <label>
                    Pincode
                    <input placeholder="530041" />
                  </label>
                </div>
              </div>

              <div className="map-wrap">
                {GOOGLE_MAPS_URL ? (
                  <a className="map-link" href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer">
                    <img
                      className="map-image"
                      src={withPublicUrl("/images/map-marker-5-svgrepo-com.svg")}
                      alt="Open store location in Google Maps"
                    />
                  </a>
                ) : (
                  <img
                    className="map-image"
                    src={withPublicUrl("/images/map-marker-5-svgrepo-com.svg")}
                    alt="Store location map"
                  />
                )}
                <p className="map-hint">
                  {GOOGLE_MAPS_URL ? "Tap the map to open Google Maps." : "Click the map to open Google Maps."}
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
