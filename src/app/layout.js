import './globals.css';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

export const metadata = {
  title: 'Ammara Hoosen | Web Developer Portfolio | Cape Town',
  description: 'Explore the creative portfolio of Ammara, a frontend web developer passionate about building beautiful, responsive websites. Available for freelance projects.',
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
