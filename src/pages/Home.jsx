import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaGift,
  FaSearch,
  FaBarcode,
  FaStore,
  FaCoffee,
  FaShoppingBag,
} from "react-icons/fa";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  // Mock data for the image carousel
  const carouselItems = [
    {
      id: 1,
      title: "스타벅스와 함께하는 여름",
      subtitle: "시원한 여름 음료와 함께 특별한 혜택을 만나보세요",
      image:
        "https://via.placeholder.com/400x200/006341/ffffff?text=Summer+Campaign",
    },
    {
      id: 2,
      title: "새로운 시즌 메뉴",
      subtitle: "한정 기간 특별 할인",
      image:
        "https://via.placeholder.com/400x200/1e3932/ffffff?text=New+Season",
    },
  ];

  // Mock data for rewards
  const rewards = [
    { id: 1, icon: <FaGift />, title: "리워드", points: "0" },
    { id: 2, icon: <FaBarcode />, title: "쿠폰함", count: "0" },
    { id: 3, icon: <FaStore />, title: "e-기프트카드", count: "0" },
    { id: 4, icon: <FaCoffee />, title: "What's New", count: "0" },
    { id: 5, icon: <FaShoppingBag />, title: "주문 내역", count: "0" },
  ];

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <h1 className="logo">STARBUCKS</h1>
        <div className="header-icons">
          <button className="icon-button">
            <FaBell size={20} />
          </button>
          <button className="icon-button">
            <FaSearch size={20} />
          </button>
        </div>
      </header>

      {/* Greeting */}
      <section className="greeting-section">
        <h2>안녕하세요, 회원님</h2>
        <p>스타벅스 회원이 되시면 다양한 혜택을 즐기실 수 있습니다.</p>
        <div className="auth-buttons">
          <button className="btn-login" onClick={() => navigate("/login")}>
            로그인
          </button>
          <button className="btn-signup" onClick={() => navigate("/signup")}>
            회원가입
          </button>
        </div>
      </section>

      {/* Login/Signup Buttons */}

      {/* Carousel */}
      <section className="carousel">
        <div className="carousel-inner">
          {carouselItems.map((item) => (
            <div key={item.id} className="carousel-item">
              <img src={item.image} alt={item.title} />
              <div className="carousel-caption">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rewards Section */}
      <section className="rewards-section">
        <h2>스타벅스 리워드</h2>
        <div className="rewards-grid">
          {rewards.map((reward) => (
            <div key={reward.id} className="reward-item">
              <div className="reward-icon">{reward.icon}</div>
              <div className="reward-info">
                <h3>{reward.title}</h3>
                <p>{reward.points || `${reward.count}개`}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
