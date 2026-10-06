'use client';

import Link from 'next/link';
import { CheckCircle2, Clock3, MapPin, PackageCheck, RotateCcw, Truck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useApp } from './providers';
import { MobileNav, SiteHeader } from './site-header';

export function OrdersPage() {
  const { orders, addToCart, toast } = useApp();
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => setSuccess(new URLSearchParams(window.location.search).get('success')), []);

  return (
    <main>
      <SiteHeader />
      <div className="page-shell inner-page orders-page">
        <div className="page-title">
          <span>ORDER CENTER</span>
          <h1>{success ? 'Order received.' : 'Your orders.'}</h1>
          <p>{success ? `${success} has been sent to the CheezyBeezy kitchen.` : 'Track your recent orders and reorder favorites.'}</p>
        </div>

        {success && (
          <section className="tracking-card">
            <div className="tracking-head">
              <div><span className="live-dot" /> Kitchen queue</div>
              <b>20–35 min</b>
            </div>
            <div className="track-line">
              <div className="track-step active"><span><CheckCircle2 /></span><b>Received</b><small>Accepted</small></div>
              <div className="track-step active"><span><Clock3 /></span><b>Preparing</b><small>Kitchen</small></div>
              <div className="track-step"><span><Truck /></span><b>On the way</b><small>Next</small></div>
              <div className="track-step"><span><PackageCheck /></span><b>Delivered</b><small>Enjoy</small></div>
            </div>
            <div className="tracking-address"><MapPin /> E-11, Rawalpindi</div>
          </section>
        )}

        {orders.length ? (
          <div className="orders-list">
            {orders.map((order) => (
              <article className="order-card" key={order.id}>
                <div className="order-head">
                  <div><b>{order.id}</b><span>{new Date(order.createdAt).toLocaleString()}</span></div>
                  <span className="status-pill"><CheckCircle2 /> {order.status}</span>
                </div>
                <div className="order-items">
                  {order.items.slice(0, 4).map((item) => (
                    <div key={item.id}><img src={item.image} alt={item.name} /><span>{item.quantity}× {item.name}</span></div>
                  ))}
                </div>
                <div className="order-foot">
                  <strong>Rs. {order.total.toLocaleString()}</strong>
                  <span>ETA {order.eta}</span>
                  <button onClick={() => { order.items.forEach(addToCart); toast('Items added back to your bag.', 'info'); }}>
                    <RotateCcw /> Reorder
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <PackageCheck />
            <h2>No orders yet.</h2>
            <p>Your first CheezyBeezy order will appear here.</p>
            <Link href="/menu" className="primary-button">Start an order <RotateCcw /></Link>
          </div>
        )}
      </div>
      <MobileNav />
    </main>
  );
}