# KappaFood

Production-style fast-food ordering frontend rebuilt from the supplied EmberBite project while preserving the existing ordering API contract.

## Included

- KappaFood branding, premium SVG logo and favicon
- Warm cream/red food-app interface inspired by the supplied mobile reference
- Responsive mobile bottom navigation and desktop navigation
- Rotating promotional hero with real product data
- Search, category filters and sorting
- Product detail pages
- Favorites / saved items
- Cart and checkout
- Existing `/api/orders` validation and server-side price calculation retained
- Cash on delivery flow
- Order confirmation, order history and reorder
- Dark/light mode with persistence
- Premium skeleton loading screen
- Toast notifications for cart, favorites, validation and order actions
- Responsive layouts for phone, tablet and desktop
- New product images, names, descriptions, prices and offers

## Run

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm start
```

The existing order endpoint remains at `/api/orders` and continues to calculate prices from `lib/data.ts` on the server rather than trusting client-submitted prices.
