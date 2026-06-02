import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Community from './pages/Community.jsx';
import Contact from './pages/Contact.jsx';
import OpeningStrategies from './pages/OpeningStrategies.jsx';
import EndgameTechniques from './pages/EndgameTechniques.jsx';
import BrainHealth from './pages/BrainHealth.jsx';
import ClassicGrandmasters from './pages/ClassicGrandmasters.jsx';
import ChessPuzzles from './pages/ChessPuzzles.jsx';
import TournamentGuides from './pages/TournamentGuides.jsx';
import Privacy from './pages/legal/Privacy.jsx';
import Terms from './pages/legal/Terms.jsx';
import Refund from './pages/legal/Refund.jsx';
import NotFound from './pages/NotFound.jsx';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'blog', element: <Blog /> },
      { path: 'community', element: <Community /> },
      { path: 'contact', element: <Contact /> },
      { path: 'opening-strategies', element: <OpeningStrategies /> },
      { path: 'endgame-techniques', element: <EndgameTechniques /> },
      { path: 'chess-for-brain-health', element: <BrainHealth /> },
      { path: 'classic-grandmasters', element: <ClassicGrandmasters /> },
      { path: 'chess-puzzles', element: <ChessPuzzles /> },
      { path: 'tournament-guides', element: <TournamentGuides /> },
      { path: 'legal/privacy', element: <Privacy /> },
      { path: 'legal/terms', element: <Terms /> },
      { path: 'legal/refund', element: <Refund /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

// Explicit list consumed by vite-react-ssg to know which paths to prerender.
export const ssgPaths = [
  '/',
  '/about',
  '/blog',
  '/community',
  '/contact',
  '/opening-strategies',
  '/endgame-techniques',
  '/chess-for-brain-health',
  '/classic-grandmasters',
  '/chess-puzzles',
  '/tournament-guides',
  '/legal/privacy',
  '/legal/terms',
  '/legal/refund',
  '/404',
];
