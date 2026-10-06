'use client';

import Link from 'next/link';
import { Bell, Heart, Home, Menu, Moon, Search, ShoppingBag, SlidersHorizontal, Sun, UserRound, X } from 'lucide-react';
import { useState } from 'react';
import { useApp } from './providers';

export function Logo() {
  return (
    <Link href="/" className="brand" aria-label="CheezyBeezy home">
      <img src="/logo.svg" alt="" width="44" height="44" />
      <span>Cheezy<span>Beezy</span></span>
    </Link>
  );
}

export function SiteHeader() {
  const { cartCount, darkMode, toggleDarkMode } = useApp();
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <button className="icon-button mobile-only" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
          <Logo />
          <nav className="desktop-nav">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/#deals">Offers</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/account">Profile</Link>
          </nav>
          <div className="header-actions">
            <button className="icon-button desktop-only" onClick={toggleDarkMode} aria-label="Toggle dark mode">
              {darkMode ? <Sun /> : <Moon />}
            </button>
            <Link href="/menu" className="icon-button" aria-label="Search"><Search /></Link>
            <Link href="/account" className="icon-button desktop-only" aria-label="Account"><UserRound /></Link>
            <Link href="/cart" className="bag-button" aria-label="Cart"><ShoppingBag /><span>{cartCount}</span></Link>
          </div>
        </div>
        {open && (
          <div className="mobile-menu">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/menu" onClick={() => setOpen(false)}>Menu</Link>
            <Link href="/#deals" onClick={() => setOpen(false)}>Offers</Link>
            <Link href="/orders" onClick={() => setOpen(false)}>Orders</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/account" onClick={() => setOpen(false)}>Profile</Link>
            <button onClick={() => { toggleDarkMode(); setOpen(false); }}>
              {darkMode ? <Sun /> : <Moon />} {darkMode ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        )}
      </header>
    </>
  );
}

export function MobileNav() {
  const { cartCount } = useApp();
  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      <Link href="/"><Home /><span>Home</span></Link>
      <Link href="/menu"><Menu /><span>Menu</span></Link>
      <Link href="/cart" className="mobile-cart"><ShoppingBag /><b>{cartCount}</b><span>Cart</span></Link>
      <Link href="/#deals"><Heart /><span>Offers</span></Link>
      <Link href="/account"><UserRound /><span>Profile</span></Link>
    </nav>
  );
}

export function HomeSearch({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="home-search">
      <Search />
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search your favorite cheezy meal..." />
      <button type="button" aria-label="Filters"><SlidersHorizontal /></button>
    </div>
  );
}

export function NotificationButton() {
  return <button className="icon-button notification-button" aria-label="Notifications"><Bell /><span>3</span></button>;
}