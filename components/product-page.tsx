'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Heart, Minus, Plus, ShoppingBag, Star } from 'lucide-react';
import { useState } from 'react';
import { findProduct } from '@/lib/data';
import { useApp } from './providers';
import { MobileNav, SiteHeader } from './site-header';

export function ProductPage({ slug }: { slug: string }) {
  const product = findProduct(slug);
  const { addToCart, favorites, toggleFavorite } = useApp();
  const [qty, setQty] = useState(1);

  if (!product) return <main><SiteHeader /><div className="page-shell inner-page"><div className="empty-state"><div className="empty-symbol">?</div><h1>We couldn't find that plate.</h1><Link href="/menu" className="primary-button">Back to menu <ArrowRight size={16} /></Link></div></div><MobileNav /></main>;

  const liked = favorites.includes(product.id);
  const total = product.price * qty;

  return (
    <main>
      <SiteHeader />
      <div className="page-shell inner-page product-page">
        <Link href="/menu" className="back-link"><ArrowLeft size={16} /> Back to menu</Link>
        <div className="product-detail">
          <div className="detail-visual">
            <div className="detail-ring" />
            <div className="detail-image-wrap"><img src={product.image} alt={product.name} className="detail-product-image" loading="eager" decoding="async" onError={(e) => { e.currentTarget.src = '/food-fallback.svg'; }} /></div>
            <span className="detail-number">{product.category.toUpperCase()} / 01</span>
            <span className="detail-badge">{product.badge || 'KAPPAFOOD PICK'}</span>
          </div>
          <div className="detail-copy">
            <div className="product-rating detail-rating"><Star size={14} fill="currentColor" /><b>{product.rating}</b><span>{product.reviews} reviews</span></div>
            <span className="detail-category">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="detail-description">{product.description}</p>
            <div className="detail-price"><strong>Rs. {product.price.toLocaleString()}</strong>{product.oldPrice && <del>Rs. {product.oldPrice.toLocaleString()}</del>}<span>PKR</span></div>
            <div className="ingredients"><span>WHAT'S INSIDE</span><div>{product.ingredients.map((item) => <b key={item}>{item}</b>)}</div></div>
            <div className="detail-actions"><div className="quantity"><button onClick={() => setQty((v) => Math.max(1, v - 1))} aria-label="Decrease"><Minus size={15} /></button><b>{qty}</b><button onClick={() => setQty((v) => Math.min(20, v + 1))} aria-label="Increase"><Plus size={15} /></button></div><button className="primary-button detail-cart-button" onClick={() => { for (let i = 0; i < qty; i++) addToCart(product); }}><ShoppingBag size={18} /> Add to bag · Rs. {total.toLocaleString()}</button><button className={`heart-button detail-favorite ${liked ? 'liked' : ''}`} onClick={() => toggleFavorite(product.id)} aria-label="Favorite"><Heart size={19} fill={liked ? 'currentColor' : 'none'} /></button></div>
            <div className="detail-facts"><span>{product.calories} cal</span><i /> <span>{product.spicy ? 'Spicy' : 'Mild'}</span><i /> <span>Made fresh to order</span></div>
          </div>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
