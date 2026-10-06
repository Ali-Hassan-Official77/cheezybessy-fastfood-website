'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight, Clock3, MapPin, Search, SlidersHorizontal, Star } from 'lucide-react';
import { useState } from 'react';
import { categories, offers, products } from '@/lib/data';
import { ProductCard } from './product-card';
import Hero from './hero';
import { LocationMap } from './location-map';
import { Logo, MobileNav, NotificationButton, SiteHeader } from './site-header';
import { useApp } from './providers';

export function HomePage() {
  const [query, setQuery] = useState('');
  const { cartCount } = useApp();
  const popular = products.filter((p) => p.popular).slice(0, 6);
  const filtered = query
    ? products.filter((p) => `${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase())).slice(0, 4)
    : [];

  return (
    <main className="app-main">
      <SiteHeader />
      <div className="home-shell">
        <div className="mobile-greeting">
          <div><small>Hello, Food Lover! 🐝</small><Logo /></div>
          <div className="greeting-actions">
            <NotificationButton />
            <Link href="/cart" className="icon-button"><span className="mini-bag-count">{cartCount}</span><span className="bag-glyph">🛍</span></Link>
          </div>
        </div>

        <div className="search-row">
          <div className="app-search">
            <Search />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search pizza, burgers, shakes..." />
            <button><SlidersHorizontal /></button>
          </div>
        </div>

        {filtered.length > 0 && (
          <div className="search-results">
            {filtered.map((p) => (
              <Link href={`/product/${p.slug}`} key={p.id}>
                <img src={p.image} alt="" />
                <span>{p.name}<small>Rs. {p.price.toLocaleString()}</small></span>
                <ChevronRight />
              </Link>
            ))}
          </div>
        )}

        <Hero />

        <section className="category-strip">
          <div className="section-top">
            <h2>Categories</h2>
            <Link href="/menu">View all <ChevronRight /></Link>
          </div>
          <div className="category-scroller">
            {categories.map((category) => (
              <Link href={`/menu?category=${category.id}`} className="category-pill" key={category.id}>
                <span className="category-image">{category.icon}</span>
                <b>{category.name}</b>
              </Link>
            ))}
          </div>
        </section>

        <section className="popular-section">
          <div className="section-top">
            <div><h2>Popular Picks</h2><p>Most loved by CheezyBeezy fans</p></div>
            <Link href="/menu">View All <ChevronRight /></Link>
          </div>
          <div className="product-grid popular-grid">
            {popular.map((product) => <ProductCard key={product.id} product={product} compact />)}
          </div>
        </section>

        <section className="offer-banner" id="deals">
          <div>
            <span>EXCLUSIVE OFFER</span>
            <h2>Up to 30% OFF</h2>
            <p>On selected Cheezy combos</p>
            <Link href="/menu" className="hero-order">Order now <ArrowRight /></Link>
          </div>
          <img src={products[0].image} alt="CheezyBeezy combo" />
          <strong>30<small>%</small><em>OFF</em></strong>
        </section>

        <section className="why-kappa">
          <div>
            <span>WHY CHEESYBEEZY</span>
            <h2>Fast food, made with care.</h2>
          </div>
          <div className="why-grid">
            <div><b>01</b><Clock3 /><h3>Quick delivery</h3><p>Typical delivery window 20–35 minutes.</p></div>
            <div><b>02</b><Star /><h3>Fresh ingredients</h3><p>Prepared fresh for every order.</p></div>
            <div><b>03</b><MapPin /><h3>Local service</h3><p>Serving Islamabad &amp; Rawalpindi with a focused menu.</p></div>
          </div>
        </section>

        <section className="offer-codes">
          <div className="section-top">
            <div><h2>Today at CheezyBeezy</h2><p>Simple offers, no hidden surprises.</p></div>
          </div>
          <div className="offer-code-grid">
            {offers.map((offer) => (
              <div key={offer.code} className="offer-code">
                <span>{offer.label}</span>
                <strong>{offer.title}</strong>
                <p>{offer.sub}</p>
                <code>{offer.code}</code>
              </div>
            ))}
          </div>
        </section>

        <LocationMap />

        <section className="location-card">
          <div>
            <span>DELIVERY AREA</span>
            <h2>E-11 · Rawalpindi</h2>
            <p>Fast local delivery, carefully packed and sent fresh.</p>
          </div>
          <Link href="/menu" className="primary-button">Start order <ArrowRight /></Link>
        </section>
      </div>

      <footer className="footer">
        <div>
          <Logo />
          <p>Premium cheezy comfort food, made fresh in Rawalpindi.</p>
        </div>
        <div>
          <b>Explore</b>
          <Link href="/menu">Menu</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/account">Profile</Link>
        </div>
        <div>
          <b>Contact</b>
          <span>E-11, Rawalpindi</span>
          <a href="mailto:sardarabdullahsilver@websitenaem.com">sardarabdullahsilver@websitenaem.com</a>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} CheezyBeezy · Melt. Munch. Repeat.</div>
      </footer>

      <MobileNav />
    </main>
  );
}