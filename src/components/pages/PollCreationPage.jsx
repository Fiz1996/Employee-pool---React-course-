import { Button, Card, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addQuestion } from "../../features/pollsSlice.js";
import { useTranslation } from "react-i18next";

export default function PollCreationPage() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const author = useSelector((state) => state.session.authedUser);
  const onFinish = (values) => {
    dispatch(addQuestion({ ...values, author }));
    message.success("Poll created");
    navigate("/");
  };
  return (
    <Card title={t("poll.addNew")} className="section-card">
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label={t("poll.optionOne")}
          name="optionOneText"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("poll.optionTwo")}
          name="optionTwoText"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          {t("poll.createPoll")}
        </Button>
      </Form>
    </Card>
  );
}
