import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>스타벅스에 오신것을 환영합니다!</h1>
      </div>

      <div className="button-group">
        <button className="btn btn-outline" onClick={() => navigate("/login")}>
          로그인
        </button>
        <button className="btn btn-primary" onClick={() => navigate("/signup")}>
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Home;
