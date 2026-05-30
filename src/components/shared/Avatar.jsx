import { Avatar as AntAvatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function Avatar({ user, size = 48 }) {
  return (
    <AntAvatar
      size={size}
      src={user?.avatarURL || undefined}
      icon={!user?.avatarURL && <UserOutlined />}
    />
  );
}
