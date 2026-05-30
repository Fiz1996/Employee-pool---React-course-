import { Layout, Menu, Button, Space, Typography, Dropdown } from "antd";
import {
  PlusOutlined,
  TrophyOutlined,
  HomeOutlined,
  LogoutOutlined,
  BgColorsOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { logout, toggleDarkMode } from "../../features/sessionSlice.js";
import UserPreview from "./UserPreview.jsx";

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const user = useSelector(
    (state) => state.polls.users[state.session.authedUser],
  );
  const darkMode = useSelector((state) => state.session.darkMode);

  const items = [
    { key: "/", icon: <HomeOutlined />, label: t("common.dashboard") },
    { key: "/add", icon: <PlusOutlined />, label: t("common.newPoll") },
    {
      key: "/leaderboard",
      icon: <TrophyOutlined />,
      label: t("common.leaderboard"),
    },
  ];

  const languageItems = [
    { key: "en", label: "🇺🇸 English" },
    { key: "ar", label: "🇸🇦 العربية" },
  ];

  const changeLanguage = ({ key }) => {
    i18n.changeLanguage(key);
    localStorage.setItem("language", key);
  };

  return (
    <Layout.Header className="header">
      <Typography.Title level={4} className="brand">
        Employee Poll
      </Typography.Title>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={items}
        onClick={({ key }) => navigate(key)}
        className="nav-menu"
      />
      <Space>
        <UserPreview user={user} compact />
        <Dropdown
          menu={{ items: languageItems, onClick: changeLanguage }}
          trigger={["click"]}
        >
          <Button icon={<GlobalOutlined />} title="Change Language" />
        </Dropdown>
        <Button
          icon={<BgColorsOutlined />}
          onClick={() => dispatch(toggleDarkMode())}
          title={darkMode ? t("common.lightMode") : t("common.darkMode")}
        />
        <Button icon={<LogoutOutlined />} onClick={() => dispatch(logout())}>
          {t("common.logout")}
        </Button>
      </Space>
    </Layout.Header>
  );
}
