'use client';

import { MapPin, Navigation, Phone, Mail } from 'lucide-react';

export function LocationMap() {
  const lat = 33.5246;
  const lng = 73.0018;
  const bbox = `${lng - 0.01},${lat - 0.008},${lng + 0.01},${lat + 0.008}`;

  return (
    <section className="location-section" id="location">
      <div className="location-header">
        <span className="section-kicker">VISIT US</span>
        <h2>Find us in E-11, Rawalpindi.</h2>
        <p>Fresh cheezy food, fast delivery across Islamabad &amp; Rawalpindi.</p>
      </div>

      <div className="location-grid">
        <div className="map-wrapper">
          <iframe
            title="CheezyBeezy E-11 Rawalpindi Location"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=16/${lat}/${lng}`}
            target="_blank"
            rel="noreferrer"
            className="map-directions"
          >
            <Navigation size={16} /> Get directions
          </a>
        </div>

        <div className="location-info">
          <div className="info-card">
            <span className="info-icon"><MapPin /></span>
            <div>
              <b>Address</b>
              <p>E-11 Markaz, Rawalpindi, Punjab, Pakistan</p>
            </div>
          </div>
          <div className="info-card">
            <span className="info-icon"><Phone /></span>
            <div>
              <b>Phone / WhatsApp</b>
              <p>+92 345 216 7760</p>
            </div>
          </div>
          <div className="info-card">
            <span className="info-icon"><Mail /></span>
            <div>
              <b>Email</b>
              <p>sardarabdullahsilver@websitenaem.com</p>
            </div>
          </div>
          <div className="info-card">
            <span className="info-icon">🕒</span>
            <div>
              <b>Opening Hours</b>
              <p>Mon–Sun · 11:00 AM – 2:00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}