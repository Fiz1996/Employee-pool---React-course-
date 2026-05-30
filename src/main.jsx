import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { I18nextProvider, useTranslation } from "react-i18next";
import "antd/dist/reset.css";
import "./styles.css";
import App from "./App.jsx";
import { store } from "./app/store.js";
import i18n from "./i18n/config.js";

function Root() {
  const darkMode = useSelector((state) => state.session.darkMode);
  const { i18n: i18nInstance } = useTranslation();
  const isRTL = i18nInstance.language === "ar";

  React.useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = i18nInstance.language;
  }, [isRTL, i18nInstance.language]);

  return (
    <ConfigProvider
      theme={{
        token: { borderRadius: 10 },
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
      direction={isRTL ? "rtl" : "ltr"}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Root />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
);
