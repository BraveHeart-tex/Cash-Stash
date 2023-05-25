import './globals.css';
import { Nunito } from 'next/font/google';
import { Providers } from './providers';

const NunitoFont = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Cash Stash | Personal Finance',
  description:
    'Minimalist personal finance app. Track your spending, set a budget, and save more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={NunitoFont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
