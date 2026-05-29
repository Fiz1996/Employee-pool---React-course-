import { Button, Card, Form, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addQuestion } from '../../features/pollsSlice.js';

export default function PollCreationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const author = useSelector((state) => state.session.authedUser);
  const onFinish = (values) => { dispatch(addQuestion({ ...values, author })); message.success('Poll created'); navigate('/'); };
  return <Card title="Create a new poll" className="section-card"><Form layout="vertical" onFinish={onFinish}><Form.Item label="Option one" name="optionOneText" rules={[{ required: true }]}><Input /></Form.Item><Form.Item label="Option two" name="optionTwoText" rules={[{ required: true }]}><Input /></Form.Item><Button type="primary" htmlType="submit">Create Poll</Button></Form></Card>;
}
