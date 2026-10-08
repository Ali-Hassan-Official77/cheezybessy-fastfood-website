import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/components/providers';

export const metadata: Metadata = {
  title: { default: 'CheezyBeezy — Melt. Munch. Repeat.', template: '%s — CheezyBeezy' },
  description: 'CheezyBeezy premium fast-food ordering — pizza, burgers, wraps, pasta & shakes in E-11 Rawalpindi, Pakistan.',
  keywords: ['CheezyBeezy', 'fast food Rawalpindi', 'pizza E-11', 'burgers Islamabad', 'cheezy food delivery'],
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg', apple: '/favicon.svg' },
  openGraph: {
    title: 'CheezyBeezy — Melt. Munch. Repeat.',
    description: 'Premium cheezy fast food in E-11 Rawalpindi. Order online.',
    siteName: 'CheezyBeezy',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <AppProvider>{children}</AppProvider>

        <script src="https://cdn.zanderio.ai/widget/loader.js" data-id="wdg_ZVxoL3mjKipdEY8Yg8SJHjf0" defer></script>
      </body>
    </html>
  );
}
