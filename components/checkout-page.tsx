'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Clock3, CreditCard, MapPin, ShieldCheck, ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useApp } from './providers';

export function CheckoutPage() {
  const { cart, subtotal, clearCart, saveOrder, toast } = useApp();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', phone: '', address: '', note: '' });

  const delivery = subtotal >= 1500 ? 0 : 199;
  const discount = subtotal >= 1500 ? Math.round(subtotal * 0.15) : 0;
  const total = Math.max(0, subtotal + delivery - discount);

  async function placeOrder() {
    setError('');
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim() || !cart.length) {
      setError('Please complete your name, phone and delivery address.');
      toast('Please complete the required details', 'error');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: form,
          items: cart.map(({ id, quantity }) => ({ id, quantity })),
          payment: 'cod',
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.message || 'We could not place the order.');
      saveOrder({ ...data.order, items: cart });
      clearCart();
      toast('Order confirmed! Your kitchen ticket is ready.');
      router.push(`/orders?success=${data.order.id}`);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'We could not place the order.';
      setError(message);
      toast(message, 'error');
    } finally {
      setLoading(false);
    }
  }

  if (!cart.length) return (
    <main>
      <div className="checkout-empty">
        <ShoppingBag />
        <h1>Your bag is empty.</h1>
        <p>Add something from the menu before checkout.</p>
        <Link href="/menu" className="primary-button">Browse menu <ArrowRight /></Link>
      </div>
    </main>
  );

  return (
    <main>
      <div className="checkout-top">
        <Link href="/cart" className="back-link"><ArrowLeft /> Back to bag</Link>
        <Link href="/" className="checkout-brand">
          <img src="/logo.svg" alt="CheezyBeezy" />
          <b>Cheezy<span>Beezy</span></b>
        </Link>
        <span className="secure"><ShieldCheck /> Secure checkout</span>
      </div>
      <div className="checkout-page">
        <div className="checkout-main">
          <div className="checkout-heading">
            <span>CHECKOUT / E-11</span>
            <h1>Let&apos;s get your meal moving.</h1>
            <p>Delivery from E-11, Rawalpindi. Cash on delivery is available.</p>
          </div>

          <section className="checkout-card">
            <div className="card-title">
              <span><MapPin /></span>
              <div><h2>Delivery details</h2><p>Tell us where to send your order.</p></div>
            </div>
            <div className="form-grid">
              <label>Full name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" autoComplete="name" /></label>
              <label>Phone number<input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="03xx xxxxxxx" autoComplete="tel" /></label>
              <label className="full">Delivery address<input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="House / street / sector / Rawalpindi" autoComplete="street-address" /></label>
              <label className="full">Delivery note <small>optional</small><textarea value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} placeholder="Landmark or rider instructions" /></label>
            </div>
          </section>

          <section className="checkout-card">
            <div className="card-title">
              <span><CreditCard /></span>
              <div><h2>Payment</h2><p>Simple and secure.</p></div>
            </div>
            <div className="payment-options">
              <div className="payment-option selected">
                <span className="payment-icon">₨</span>
                <div><b>Cash on delivery</b><small>Pay the rider when your order arrives.</small></div>
                <Check />
              </div>
              <div className="payment-disabled">
                <span>+</span>
                <div><b>Online payments</b><small>Cards and wallets can be connected here.</small></div>
                <em>COMING SOON</em>
              </div>
            </div>
          </section>

          {error && <div className="error-box">{error}</div>}

          <button className="primary-button place-order" disabled={loading} onClick={placeOrder}>
            {loading ? 'Sending to kitchen…' : <>Place order · Rs. {total.toLocaleString()} <ArrowRight /></>}
          </button>
        </div>

        <aside className="checkout-summary">
          <span>YOUR ORDER</span>
          <h2>Order ticket.</h2>
          {cart.map((item) => (
            <div className="mini-line" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div><b>{item.quantity}× {item.name}</b><span>Rs. {(item.price * item.quantity).toLocaleString()}</span></div>
            </div>
          ))}
          <hr />
          <div><span>Subtotal</span><b>Rs. {subtotal.toLocaleString()}</b></div>
          <div><span>Delivery</span><b>{delivery ? `Rs. ${delivery}` : 'FREE'}</b></div>
          {discount > 0 && <div><span>Discount</span><b>− Rs. {discount.toLocaleString()}</b></div>}
          <div className="total-row"><span>Total</span><b>Rs. {total.toLocaleString()}</b></div>
          <div className="checkout-assurance">
            <Clock3 />
            <span><b>20–35 min</b><br />Typical delivery window</span>
          </div>
        </aside>
      </div>
    </main>
  );
}