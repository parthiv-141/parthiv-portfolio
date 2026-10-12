import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Parthiv — Computer Science & Engineering Graduate',
  description: 'Portfolio of Parthiv, a 2026 Computer Science and Engineering graduate with experience across software development, machine learning, data, and IT support.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
