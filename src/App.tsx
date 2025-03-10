// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { GamePage } from './pages/GamePage';
import { CategoryPage } from './pages/CategoryPage';
import { TopGamesPage } from './pages/TopGamesPage';
import { NewReleasesPage } from './pages/NewReleasesPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { AdminLoginPage } from './pages/admin/LoginPage';
import { AdminDashboard } from './pages/admin/Dashboard';
import { Toaster } from 'sonner';
import { SitemapPage } from './pages/SitemapPage'; // Import the new SitemapPage component
import { NotFoundPage } from './pages/NotFoundPage'; // Import the new NotFoundPage component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Header />
        <main className="container mx-auto px-4 pt-20 pb-12 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/g/:slug" element={<GamePage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/top-games" element={<TopGamesPage />} />
            <Route path="/new-releases" element={<NewReleasesPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/sitemap.xml" element={<SitemapPage />} /> {/* Use the new SitemapPage component */}
            <Route path="*" element={<NotFoundPage />} /> {/* Use the new NotFoundPage component */}
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;
