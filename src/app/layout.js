import './globals.css';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

export const metadata = {
  title: 'My Portfolio',
  description: 'Created with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <CustomCursor />
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
