import { Button, Card, message, Typography, Divider } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { answerQuestion } from "../../features/pollsSlice.js";
import Responses from "../shared/Responses.jsx";
import UserPreview from "../shared/UserPreview.jsx";

export default function PollPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { questions, users } = useSelector((state) => state.polls);
  const authedUser = useSelector((state) => state.session.authedUser);

  if (!questions || !users || !authedUser) return <Navigate to="/" replace />;

  const question = questions[id];
  if (!question) return <Navigate to="/" replace />;

  const [selected, setSelected] = useState(users[authedUser]?.answers[id]);
  const answered = Boolean(users[authedUser]?.answers[id]);
  const submit = () => {
    dispatch(answerQuestion({ authedUser, qid: id, answer: selected }));
    message.success("Vote saved");
  };

  return (
    <Card className="section-card" title="Would you rather?">
      <UserPreview user={users[question.author]} />
      <Divider />
      <Responses
        question={question}
        selected={selected}
        onSelect={setSelected}
        showResults={answered}
      />
      {!answered && (
        <Button
          type="primary"
          className="mt"
          disabled={!selected}
          onClick={submit}
        >
          Submit vote
        </Button>
      )}
    </Card>
  );
}
