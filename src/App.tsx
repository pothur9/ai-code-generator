import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Documentation } from './pages/Documentation';
import { Examples } from './pages/Examples';
import { Blog } from './pages/Blog';
import { Playground } from './pages/Playground';
import { Templates } from './pages/Templates';
import { Enterprise } from './pages/Enterprise';
import { Pricing } from './pages/Pricing';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}export default App;