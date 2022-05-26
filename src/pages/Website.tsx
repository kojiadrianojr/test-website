import React, { lazy } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { ResetCSS } from "@metagg/mgg-uikit";
import Menu from "components/Menu/index";
import SuspenseWithChunkError from "components/SuspenseWithChunkError";
import PageLoader from "components/PageLoader";
import GlobalStyle from "style/Global";
import Footer from "components/Footer";

const Website: React.FC = () => {
  const Homepage = lazy(() => import("./Homepage"));
  const RevenueModel = lazy(() => import('./Revenue-Model'));
  const Roadmap = lazy(() => import("./Roadmap"));
  const MggToken = lazy(() => import("./MggToken"));
  const NotFound = lazy(() => import("./NotFound"));
  return (
    <HashRouter>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/revenue-model' element={<RevenueModel /> } />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/mgg-token" element={<MggToken />} />
            {/* Redirects */}
            {/* <Route path="/" element={<Navigate replace to='/homepage' />} /> */}
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </SuspenseWithChunkError>
      </Menu>
    </HashRouter>
  );
};

export default Website;