'use client';

import Link from 'next/link';
import { Heart, Plus, Star } from 'lucide-react';
import { useApp } from './providers';
import type { Product } from '@/lib/data';

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const { addToCart, favorites, toggleFavorite } = useApp();
  const liked = favorites.includes(product.id);
  return <article className={`product-card ${compact ? 'compact' : ''}`}>
    <div className="product-visual">
      <Link href={`/product/${product.slug}`} className="product-image-link"><img src={product.image} alt={product.name} className="product-image" loading="lazy" onError={(e) => { e.currentTarget.src = '/food-fallback.svg'; }} /></Link>
      {product.badge && <span className="product-badge">{product.badge}</span>}
      <button type="button" className={`heart-button ${liked ? 'liked' : ''}`} onClick={() => toggleFavorite(product.id)} aria-label="Favorite"><Heart size={18} fill={liked ? 'currentColor' : 'none'} /></button>
    </div>
    <div className="product-info">
      <div className="product-rating"><Star size={12} fill="currentColor" /><b>{product.rating}</b><span>({(product.reviews / 1000).toFixed(1)}k+)</span></div>
      <Link href={`/product/${product.slug}`}><h3>{product.name}</h3></Link>
      {!compact && <p>{product.description}</p>}
      <div className="product-bottom"><div><strong>Rs. {product.price.toLocaleString()}</strong>{product.oldPrice && <del>Rs. {product.oldPrice.toLocaleString()}</del>}</div><button className="add-button" onClick={() => addToCart(product)} aria-label={`Add ${product.name}`}><Plus /></button></div>
    </div>
  </article>;
}
