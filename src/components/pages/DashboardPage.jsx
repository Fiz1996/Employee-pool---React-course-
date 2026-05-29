import { Tabs } from 'antd';
import { useSelector } from 'react-redux';
import QuestionsList from '../shared/QuestionsList.jsx';

export default function DashboardPage() {
  const { questions, users } = useSelector((state) => state.polls);
  const authedUser = useSelector((state) => state.session.authedUser);
  const all = Object.values(questions).sort((a, b) => b.timestamp - a.timestamp);
  const answered = all.filter((q) => users[authedUser].answers[q.id]);
  const unanswered = all.filter((q) => !users[authedUser].answers[q.id]);
  return <Tabs defaultActiveKey="unanswered"
               items={
      [
          { key: 'unanswered', label: 'Unanswered', children: <QuestionsList title="Questions to answer" questions={unanswered} users={users} /> }
          ,{ key: 'answered', label: 'Answered', children: <QuestionsList title="Completed questions" questions={answered} users={users} answered />
      }
      ]} />;
}
