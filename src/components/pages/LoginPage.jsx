import { Card, Typography, Form, Input, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../features/sessionSlice.js';
import { users } from '../../features/_Data.js';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const user = users[values.username];
      
      if (!user || user.password !== values.password) {
        message.error('Invalid username or password');
        setLoading(false);
        return;
      }

      dispatch(login(user.id));
      message.success(`Welcome, ${user.name}!`);
      navigate('/');
    } catch (error) {
      message.error('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <Card className="login-card">
        <Typography.Title level={2}>Employee Poll</Typography.Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleLogin}
          style={{ marginTop: '24px' }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please enter your username' }]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>

      </Card>
    </div>
  );
}
