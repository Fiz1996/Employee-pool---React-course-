import { Card, List, Tag, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import UserPreview from './UserPreview.jsx';

export default function QuestionsList({ title, questions, users, answered = false }) {
  const navigate = useNavigate();
  return (
    <Card title={title} className="section-card">
      <List
        dataSource={questions}
        renderItem={(q) => (
          <List.Item actions={[<Button type="primary" onClick={() => navigate(`/questions/${q.id}`)}>Open</Button>]}> 
            <List.Item.Meta avatar={<UserPreview user={users[q.author]} compact />} title={q.optionOne.text + ' OR ' + q.optionTwo.text} description={new Date(q.timestamp).toLocaleString()} />
            <Tag color={answered ? 'green' : 'blue'}>{answered ? 'Answered' : 'Unanswered'}</Tag>
          </List.Item>
        )}
      />
    </Card>
  );
}
