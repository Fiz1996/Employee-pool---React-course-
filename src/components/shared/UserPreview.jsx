import { Space, Typography } from "antd";
import Avatar from "./Avatar.jsx";

export default function UserPreview({ user, compact = false }) {
  if (!user) return null;
  return (
    <Space>
      <Avatar user={user} size={compact ? 32 : 56} />
      {!compact && <Typography.Text strong>{user.name}</Typography.Text>}
      {compact && (
        <Typography.Text className="header-user">{user.name}</Typography.Text>
      )}
    </Space>
  );
}
