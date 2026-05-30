import { Card, Table } from "antd";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function LeaderboardPage() {
  const { t } = useTranslation();
  const users = useSelector((state) => Object.values(state.polls.users));
  const data = users
    .map((user) => ({
      key: user.id,
      name: user.name,
      answered: Object.keys(user.answers).length,
      created: user.questions.length,
      score: Object.keys(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => b.score - a.score);
  return (
    <Card title={t("leaderboard.title")} className="section-card">
      <Table
        pagination={false}
        dataSource={data}
        columns={[
          { title: t("leaderboard.user"), dataIndex: "name" },
          { title: t("leaderboard.answered"), dataIndex: "answered" },
          { title: t("leaderboard.created"), dataIndex: "created" },
          { title: t("leaderboard.score"), dataIndex: "score" },
        ]}
      />
    </Card>
  );
}
