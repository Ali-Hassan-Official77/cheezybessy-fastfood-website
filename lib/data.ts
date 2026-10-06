export type Category = { id: string; name: string; icon: string; accent: string; note: string };

export type Product = {
  id: string; slug: string; name: string; category: string;
  price: number; oldPrice?: number; rating: number; reviews: number;
  description: string; ingredients: string[]; image: string;
  badge?: string; calories: number; spicy?: boolean; popular?: boolean;
};

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=88`;

export const categories: Category[] = [
  { id: 'pizza',    name: 'Pizza',          icon: '🍕', accent: '#E11D2E', note: 'Stone-baked cheesy' },
  { id: 'burgers',  name: 'Burgers',        icon: '🍔', accent: '#F5B921', note: 'Loaded & juicy' },
  { id: 'wraps',    name: 'Wraps & Rolls',  icon: '🌯', accent: '#D98C0E', note: 'Handheld heat' },
  { id: 'pasta',    name: 'Pasta',          icon: '🍝', accent: '#E8792B', note: 'Creamy & cheesy' },
  { id: 'sandwich', name: 'Sandwiches',     icon: '🥪', accent: '#3DA35D', note: 'Toasted fresh' },
  { id: 'sides',    name: 'Sides & Snacks', icon: '🍟', accent: '#F2C94C', note: 'Perfect pairings' },
  { id: 'drinks',   name: 'Drinks & Shakes',icon: '🥤', accent: '#D93B2B', note: 'Cold & refreshing' },
  { id: 'desserts', name: 'Desserts',       icon: '🍨', accent: '#C68B6E', note: 'Sweet finish' },
];

export const products: Product[] = [
  // PIZZA
  { id: 'cheezy-tikka', slug: 'cheezy-chicken-tikka-pizza', name: 'Cheezy Chicken Tikka Pizza', category: 'pizza',
    price: 1299, oldPrice: 1499, rating: 4.9, reviews: 412,
    description: 'Stone-baked pizza with tikka chicken, three-cheese blend, onions and capsicum on a thick crust.',
    ingredients: ['Tikka chicken', 'Mozzarella', 'Cheddar', 'Capsicum', 'Onion'],
    image: img('photo-1565299624946-b28f40a0ae38'), badge: 'BESTSELLER', calories: 1420, popular: true },

  { id: 'beezy-supreme', slug: 'beezy-supreme-pizza', name: 'Beezy Supreme Pizza', category: 'pizza',
    price: 1599, rating: 4.8, reviews: 287,
    description: 'Loaded with chicken, olives, mushrooms, peppers and extra mozzarella cheese.',
    ingredients: ['Chicken', 'Olives', 'Mushroom', 'Peppers', 'Mozzarella'],
    image: img('photo-1513104890138-7c749659a591'), badge: 'KAPPA PICK', calories: 1680, popular: true },

  { id: 'fajita-pizza', slug: 'chicken-fajita-pizza', name: 'Chicken Fajita Pizza', category: 'pizza',
    price: 1199, rating: 4.7, reviews: 198,
    description: 'Fajita chicken, bell peppers, onions and olives on a rich tomato base.',
    ingredients: ['Fajita chicken', 'Bell peppers', 'Olives', 'Tomato base'],
    image: img('photo-1571407970349-bc81e7e96d47'), calories: 1380 },

  // BURGERS
  { id: 'beezy-zinger', slug: 'beezy-zinger-burger', name: 'Beezy Zinger Burger', category: 'burgers',
    price: 649, oldPrice: 799, rating: 4.8, reviews: 356,
    description: 'Crispy chicken fillet, lettuce, cheese and signature honey-mustard sauce in a toasted bun.',
    ingredients: ['Crispy chicken', 'Lettuce', 'Cheese', 'Honey mustard'],
    image: img('photo-1568901346375-23c9450c58cd'), badge: 'POPULAR', calories: 820, popular: true },

  { id: 'double-cheese', slug: 'double-cheese-burger', name: 'Double Cheese Burger', category: 'burgers',
    price: 899, rating: 4.8, reviews: 241,
    description: 'Two juicy patties, double cheese, pickles and smoky beezy sauce.',
    ingredients: ['Double patty', 'Cheddar', 'Pickles', 'Smoky sauce'],
    image: img('photo-1550547660-d9450f859349'), badge: 'NEW', calories: 1040, popular: true },

  { id: 'beef-smash', slug: 'beef-smash-burger', name: 'Beef Smash Burger', category: 'burgers',
    price: 999, rating: 4.7, reviews: 187,
    description: 'Smashed beef patty with caramelised onions, cheese and tangy sauce.',
    ingredients: ['Beef patty', 'Onions', 'Cheese', 'Tangy sauce'],
    image: img('photo-1571091718767-18b5b1457add'), calories: 980 },

  // WRAPS
  { id: 'peri-wrap', slug: 'peri-peri-wrap', name: 'Peri Peri Chicken Wrap', category: 'wraps',
    price: 549, rating: 4.7, reviews: 218,
    description: 'Grilled peri chicken, fresh veggies and garlic mayo in a soft tortilla.',
    ingredients: ['Peri chicken', 'Tortilla', 'Veggies', 'Garlic mayo'],
    image: img('photo-1626700051175-6818013e1d4f'), badge: 'SPICY', calories: 620, spicy: true },

  { id: 'paratha-roll', slug: 'desi-paratha-roll', name: 'Desi Paratha Roll', category: 'wraps',
    price: 349, rating: 4.9, reviews: 512,
    description: 'Crispy paratha stuffed with chicken tikka, onions, mint chutney and raita.',
    ingredients: ['Chicken tikka', 'Paratha', 'Mint chutney', 'Raita'],
    image: img('photo-1606491956689-2ea866880c84'), badge: 'LOCAL FAV', calories: 720, popular: true },

  // PASTA
  { id: 'cheezy-pasta', slug: 'cheezy-alfredo-pasta', name: 'Cheezy Alfredo Pasta', category: 'pasta',
    price: 799, rating: 4.8, reviews: 234,
    description: 'Creamy alfredo pasta loaded with grilled chicken and a three-cheese blend.',
    ingredients: ['Pasta', 'Chicken', 'Cream', 'Parmesan', 'Mozzarella'],
    image: img('photo-1621996346565-e3dbc646d9a9'), badge: 'CHEEZY PICK', calories: 890, popular: true },

  { id: 'arrabbiata', slug: 'spicy-arrabbiata-pasta', name: 'Spicy Arrabbiata Pasta', category: 'pasta',
    price: 749, rating: 4.6, reviews: 156,
    description: 'Penne in spicy tomato sauce with herbs, chilli flakes and chicken.',
    ingredients: ['Penne', 'Tomato', 'Chilli', 'Herbs', 'Chicken'],
    image: img('photo-1551183053-bf91a1d81141'), calories: 780, spicy: true },

  // SANDWICH
  { id: 'club-sandwich', slug: 'beezy-club-sandwich', name: 'Beezy Club Sandwich', category: 'sandwich',
    price: 599, rating: 4.7, reviews: 189,
    description: 'Triple-decker toasted sandwich with chicken, cheese, egg and fresh veggies.',
    ingredients: ['Chicken', 'Cheese', 'Egg', 'Lettuce', 'Tomato'],
    image: img('photo-1528735602780-2552fd46c7af'), calories: 640, popular: true },

  { id: 'grilled-cheese', slug: 'grilled-cheese-sandwich', name: 'Grilled Cheese Sandwich', category: 'sandwich',
    price: 449, rating: 4.8, reviews: 267,
    description: 'Golden toasted bread stuffed with molten cheddar, mozzarella and a hint of garlic butter.',
    ingredients: ['Cheddar', 'Mozzarella', 'Garlic butter', 'Bread'],
    image: img('photo-1528735602780-2552fd46c7af'), badge: 'VEG', calories: 520 },

  // SIDES
  { id: 'loaded-fries', slug: 'loaded-fire-fries', name: 'Loaded Fire Fries', category: 'sides',
    price: 399, rating: 4.8, reviews: 321,
    description: 'Crispy fries topped with spicy chicken, cheese sauce and chilli drizzle.',
    ingredients: ['Fries', 'Chicken bites', 'Cheese sauce', 'Chilli'],
    image: img('photo-1573080496219-bb080dd4f877'), badge: 'FAN FAV', calories: 690, popular: true },

  { id: 'mozz-sticks', slug: 'mozzarella-sticks', name: 'Mozzarella Sticks', category: 'sides',
    price: 449, rating: 4.7, reviews: 198,
    description: 'Golden-fried mozzarella sticks with marinara dip.',
    ingredients: ['Mozzarella', 'Breadcrumbs', 'Marinara'],
    image: img('photo-1531749668029-2db88e4276c7'), calories: 480 },

  { id: 'garlic-bread', slug: 'cheezy-garlic-bread', name: 'Cheezy Garlic Bread', category: 'sides',
    price: 349, rating: 4.8, reviews: 245,
    description: 'Toasted garlic bread topped with melted mozzarella and herbs.',
    ingredients: ['Bread', 'Garlic butter', 'Mozzarella', 'Herbs'],
    image: img('photo-1573140247632-f8fd74997d5c'), badge: 'VEG', calories: 420, popular: true },

  // DRINKS
  { id: 'mango-shake', slug: 'mango-cream-shake', name: 'Mango Cream Shake', category: 'drinks',
    price: 449, rating: 4.9, reviews: 254,
    description: 'Rich mango shake with silky cream layer — the perfect desi cooler.',
    ingredients: ['Mango', 'Milk', 'Cream', 'Vanilla'],
    image: img('photo-1579954115545-a95591f28bfc'), badge: 'NEW', calories: 510, popular: true },

  { id: 'choco-shake', slug: 'chocolate-fudge-shake', name: 'Chocolate Fudge Shake', category: 'drinks',
    price: 499, rating: 4.8, reviews: 198,
    description: 'Thick chocolate shake topped with whipped cream and fudge drizzle.',
    ingredients: ['Chocolate', 'Milk', 'Fudge', 'Cream'],
    image: img('photo-1572490122747-3968b75cc699'), calories: 580 },

  { id: 'cola', slug: 'cheezy-cola', name: 'Cheezy Cola', category: 'drinks',
    price: 199, rating: 4.5, reviews: 132,
    description: 'Ice-cold fizzy cola — perfect with any cheezy meal.',
    ingredients: ['Cola', 'Ice'],
    image: img('photo-1544145945-f90425340c7e'), calories: 160 },

  // DESSERTS
  { id: 'choco-lava', slug: 'chocolate-lava-cup', name: 'Chocolate Lava Cup', category: 'desserts',
    price: 399, rating: 4.9, reviews: 289,
    description: 'Warm chocolate cake with molten centre and vanilla cream.',
    ingredients: ['Chocolate', 'Cocoa', 'Vanilla cream'],
    image: img('photo-1606313564200-e75d5e30476c'), badge: 'SWEET PICK', calories: 440, popular: true },

  { id: 'cheese-cake', slug: 'cheezy-cheesecake', name: 'Cheezy Cheesecake Slice', category: 'desserts',
    price: 549, rating: 4.9, reviews: 176,
    description: 'Creamy baked cheesecake with berry compote on a buttery biscuit base.',
    ingredients: ['Cream cheese', 'Biscuit', 'Berries', 'Butter'],
    image: img('photo-1567327613485-fbc7bf196198'), badge: 'NEW', calories: 520 },
];

export const offers = [
  { code: 'BEEZY300', title: 'Rs. 300 OFF', sub: 'On your first order above Rs. 1,800', label: 'WELCOME OFFER' },
  { code: 'CHEESY15', title: '15% OFF', sub: 'On selected CheezyBeezy combos this week', label: 'COMBO DROP' },
  { code: 'FREESHIP', title: 'FREE DELIVERY', sub: 'On orders above Rs. 1,500', label: 'DELIVERY PERK' },
];

export function findProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}