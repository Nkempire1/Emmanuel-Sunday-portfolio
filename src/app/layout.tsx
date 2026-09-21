import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LiveBackground from '@/components/ui/LiveBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Emmanuel Sunday | Growth Marketing Portfolio',
  description: 'Marketing portfolio showcasing scalable acquisition engines and high-converting automation workflows in B2B Tech and Real Estate.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased min-h-screen relative`}>
        <LiveBackground />
        {children}
      </body>
    </html>
  );
}
