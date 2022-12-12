import React from "react";
import "./App.css";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./styles/theme.js";
import MainPage from "./pages/mainPage";
import QuestionsPage from "./pages/questionsPage";
import ConfirmPage from "./pages/confirmPage";
// Page

// 나중에 삭제하기 * 폰트 어썸
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid, regular, light, thin, icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/friend/9" element={<ConfirmPage />} />
          <Route path="/couple/9" element={<ConfirmPage />} />
          <Route path="/:type/:idx" element={<QuestionsPage />} />
          {/* <Route path={"/*"} element={<NotFountPage />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
