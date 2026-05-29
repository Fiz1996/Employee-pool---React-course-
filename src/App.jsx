import { Layout } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
import Nav from './components/shared/Nav.jsx';
import Footer from './components/shared/Footer.jsx';
import DashboardPage from './components/pages/DashboardPage.jsx';
import LoginPage from './components/pages/LoginPage.jsx';
import PollCreationPage from './components/pages/PollCreationPage.jsx';
import PollPage from './components/pages/PollPage.jsx';
import LeaderboardPage from './components/pages/LeaderboardPage.jsx';
import { useSelector } from 'react-redux';

const { Content } = Layout;

export default function App() {
  const authedUser = useSelector((state) => state.session.authedUser);
  return (
    <Layout className="app-shell">
      {authedUser && <Nav />}
      <Content className="app-content">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={authedUser ? <DashboardPage /> : <Navigate to="/login" replace />} />
          <Route path="/add" element={authedUser ? <PollCreationPage /> : <Navigate to="/login" replace />} />
          <Route path="/questions/:id" element={authedUser ? <PollPage /> : <Navigate to="/login" replace />} />
          <Route path="/leaderboard" element={authedUser ? <LeaderboardPage /> : <Navigate to="/login" replace />} />
        </Routes>
      </Content>
      <Footer />
    </Layout>
  );
}
