'use client';

import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { products } from '@/lib/data';
import { useApp } from './providers';

export default function Hero() {
  const slides = products.filter((p) => p.popular).slice(0, 4);
  const [index, setIndex] = useState(0);
  const { favorites, toggleFavorite } = useApp();
  const product = slides[index];
  const liked = favorites.includes(product.id);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((v) => (v + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero-banner" aria-label="Featured CheezyBeezy offer">
      <div className="hero-copy">
        <span className="hero-mini">LIMITED TIME</span>
        <h1>CHEEZY.<br />CRISPY.<br /><em>IRRESISTIBLE.</em></h1>
        <p>100% real ingredients.<br />Made fresh. Served always.</p>
        <Link href={`/product/${product.slug}`} className="hero-order">
          Order now <span><ArrowRight /></span>
        </Link>
      </div>
      <div className="hero-food">
        <img key={product.id} src={product.image} alt={product.name} />
        <button className={`hero-favorite ${liked ? 'liked' : ''}`} onClick={() => toggleFavorite(product.id)} aria-label="Save to favorites">
          <Heart fill={liked ? 'currentColor' : 'none'} />
        </button>
        <div className="hero-product-meta">
          <strong>{product.name}</strong>
          <span><Star fill="currentColor" /> {product.rating}</span>
        </div>
      </div>
      <div className="hero-controls">
        <button onClick={() => setIndex((v) => (v - 1 + slides.length) % slides.length)} aria-label="Previous"><ChevronLeft /></button>
        {slides.map((_, i) => (
          <button key={i} className={i === index ? 'active' : ''} onClick={() => setIndex(i)} aria-label={`Slide ${i + 1}`} />
        ))}
        <button onClick={() => setIndex((v) => (v + 1) % slides.length)} aria-label="Next"><ChevronRight /></button>
      </div>
    </section>
  );
}