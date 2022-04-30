/**
 * @author heart
 * @description 用于制作页面跳转的类
 * @Date 2022-05-01
 */
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import('./pages/home/index'));
const TestUseState = React.lazy(() => import('./pages/state/index'));
export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test_use_state" element={<TestUseState />} />
      </Routes>
    </BrowserRouter>
  );
};
