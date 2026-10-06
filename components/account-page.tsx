'use client';

import Link from 'next/link';
import { Heart, MapPin, Package, Star, UserRound } from 'lucide-react';
import { useApp } from './providers';
import { products } from '@/lib/data';
import { ProductCard } from './product-card';
import { MobileNav, SiteHeader } from './site-header';

export function AccountPage() {
  const { favorites, orders } = useApp();
  const liked = products.filter((product) => favorites.includes(product.id));

  return (
    <main>
      <SiteHeader />
      <div className="page-shell inner-page">
        <section className="account-hero">
          <div className="profile-avatar">B</div>
          <div>
            <span className="section-kicker">CHEESYBEEZY MEMBER</span>
            <h1>Welcome back.</h1>
            <p>Your saved favorites and order shortcuts, all in one place.</p>
          </div>
        </section>

        <div className="account-stats">
          <div><Package /><strong>{orders.length}</strong><span>Orders</span></div>
          <div><Heart /><strong>{favorites.length}</strong><span>Favorites</span></div>
          <div><Star /><strong>E-11</strong><span>Service area</span></div>
        </div>

        <div className="account-grid">
          <section className="account-panel">
            <span className="section-kicker">DELIVERY</span>
            <h2>Saved details</h2>
            <div className="address-box">
              <MapPin />
              <div>
                <b>E-11, Rawalpindi</b>
                <p>Use your full delivery address at checkout.</p>
              </div>
            </div>
          </section>

          <section className="account-panel">
            <span className="section-kicker">SHORTCUTS</span>
            <h2>Quick links.</h2>
            <Link href="/orders"><Package /> Order history <span>↗</span></Link>
            <Link href="/menu"><UserRound /> Browse menu <span>↗</span></Link>
            <Link href="/cart"><Heart /> Open bag <span>↗</span></Link>
            <Link href="/contact"><MapPin /> Contact &amp; location <span>↗</span></Link>
          </section>
        </div>

        <section className="favorites-section">
          <div className="section-top">
            <div><span className="section-kicker">YOUR PICKS</span><h2>Favorites.</h2></div>
            <Link href="/menu">Add more <span>↗</span></Link>
          </div>
          {liked.length ? (
            <div className="product-grid">
              {liked.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          ) : (
            <div className="empty-state">
              <Heart />
              <h2>Nothing saved yet.</h2>
              <p>Tap the heart on any item you want to remember.</p>
              <Link href="/menu" className="secondary-button">Browse menu</Link>
            </div>
          )}
        </section>
      </div>
      <MobileNav />
    </main>
  );
}