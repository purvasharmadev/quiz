import { Routes, Route } from "react-router-dom";
import {PageNotFound} from "./Pages/PageNotFound"
import { HomePage } from "./Pages/HomePage";
import {Quiz} from "./Pages/Quiz/quiz";
import { Results } from "./Pages/Quiz/results";
import React from "react";

export default function URLRoutes() {
  return (
    <Routes>
      {/* 404 page */}
      <Route path="*" element={<PageNotFound/>} />

      {/* Home */}
      <Route path="/" element={<HomePage />} />

      {/* Quiz */}
      <Route path="/quiz" element={<Quiz/>}/>

      {/*Results  */}
      <Route path="/results" element={<Results/>}/>


    </Routes>
  );
}
