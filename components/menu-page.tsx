'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, SlidersHorizontal, X } from 'lucide-react';
import { categories, products } from '@/lib/data';
import { ProductCard } from './product-card';
import { MobileNav, SiteHeader } from './site-header';

export function MenuPage() {
  const [query, setQuery] = useState(''); const [category, setCategory] = useState('all'); const [sort, setSort] = useState('popular');
  useEffect(() => { const value = new URLSearchParams(window.location.search).get('category'); if (value && categories.some((item) => item.id === value)) setCategory(value); }, []);
  const filtered = useMemo(() => [...products.filter((p) => (category === 'all' || p.category === category) && (!query.trim() || `${p.name} ${p.description} ${p.ingredients.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase())))].sort((a,b) => sort === 'price' ? a.price-b.price : sort === 'rating' ? b.rating-a.rating : Number(Boolean(b.popular))-Number(Boolean(a.popular))), [category, query, sort]);
  return <main><SiteHeader /><div className="page-shell inner-page menu-page"><Link href="/" className="back-link"><ArrowLeft /> Home</Link><div className="page-title menu-title"><span>OUR MENU</span><h1>What are you<br /><em>craving today?</em></h1><p>Freshly prepared favorites, combos and sweet finishes.</p></div><div className="menu-tools"><div className="menu-search"><Search /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search burgers, buckets, snacks..." />{query && <button onClick={() => setQuery('')}><X /></button>}</div><label className="sort-control"><SlidersHorizontal /><span>Sort</span><select value={sort} onChange={(e) => setSort(e.target.value)}><option value="popular">Popular</option><option value="rating">Top rated</option><option value="price">Lowest price</option></select></label></div><div className="menu-category-scroll"><button className={category === 'all' ? 'active' : ''} onClick={() => setCategory('all')}>All <span>{products.length}</span></button>{categories.map((item) => <button key={item.id} className={category === item.id ? 'active' : ''} onClick={() => setCategory(item.id)}>{item.icon} {item.name}<span>{products.filter((p) => p.category === item.id).length}</span></button>)}</div><div className="menu-result-line"><b>{filtered.length} items</b><span>Prices in PKR · delivery calculated at checkout</span></div>{filtered.length ? <div className="product-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state"><h2>No match found.</h2><p>Try another search or browse every category.</p><button className="secondary-button" onClick={() => { setQuery(''); setCategory('all'); }}>Reset menu</button></div>}</div><MobileNav /></main>;
}
