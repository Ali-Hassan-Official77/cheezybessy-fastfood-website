'use client';

import { Mail, MessageCircle, Clock, MapPin } from 'lucide-react';
import { MobileNav, SiteHeader } from '@/components/site-header';
import { LocationMap } from '@/components/location-map';

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <div className="page-shell inner-page">
        <div className="page-title">
          <span>GET IN TOUCH</span>
          <h1>We&apos;re <em>listening.</em></h1>
          <p>Questions, bulk orders, catering or feedback — reach out any time.</p>
        </div>

        <div className="contact-grid">
          <a href="mailto:sardarabdullahsilver@websitenaem.com" className="contact-card">
            <Mail />
            <b>Email us</b>
            <p>sardarabdullahsilver@websitenaem.com</p>
          </a>
          <a href="https://wa.me/923000000000" className="contact-card">
            <MessageCircle />
            <b>WhatsApp</b>
            <p>+92 345 216 7760</p>
          </a>
          <div className="contact-card">
            <Clock />
            <b>Open daily</b>
            <p>11:00 AM – 2:00 AM</p>
          </div>
          <div className="contact-card">
            <MapPin />
            <b>Location</b>
            <p>E-11 Markaz, Rawalpindi</p>
          </div>
        </div>

        <LocationMap />
      </div>
      <MobileNav />
    </main>
  );
}