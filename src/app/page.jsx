"use client";

import { useState } from "react";
import Link from "next/link";
import catalog from "../data/catalog.json";

const categoryMeta = {
  Cars: { color: "#e63946", light: "#fff0f0" },
  Bikes: { color: "#2a9d8f", light: "#f0faf9" },
  Phones: { color: "#6a4c93", light: "#f5f0fc" },
  Computers: { color: "#d4a017", light: "#fffbef" },
};

export default function HomePage() {
  const categories = [...new Set(catalog.map((item) => item.category))];
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", ...categories];

  const filteredItems =
    activeTab === "All"
      ? catalog
      : catalog.filter((i) => i.category === activeTab);

  const activeMeta = activeTab !== "All" ? categoryMeta[activeTab] : null;

  return (
    <>
      <header className="header">
        <div>
          <div className="header-logo">
            Cata<span>log</span>
          </div>
          <div className="header-subtitle">Premium Collection</div>
        </div>
      </header>

      <section className="home-hero">
        <div className="hero-tag">✦ Multi-Category Catalog</div>
        <h1 className="hero-title">
          Discover <em>Premium</em>
          <br />
          Products
        </h1>
        <p className="hero-desc">
          Explore our curated collection of Cars, Bikes, Phones &amp; Computers
          — all in one place.
        </p>
      </section>

      <div className="categories-section">
        <div className="main-box">
          <h2 className="main-title">Our Amazing Collections</h2>
        </div>
        <div className="tab-bar">
          {tabs.map((tab) => {
            const meta = tab !== "All" ? categoryMeta[tab] : null;
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                className={"tab-btn" + (isActive ? " tab-btn--active" : "")}
                style={
                  isActive && meta
                    ? {
                        background: meta.color,
                        borderColor: meta.color,
                        color: "#fff",
                      }
                    : isActive
                      ? {
                          background: "#1a1a2e",
                          borderColor: "#1a1a2e",
                          color: "#fff",
                        }
                      : {}
                }
                onClick={() => setActiveTab(tab)}
              >
                {meta && <span>{meta.icon}</span>}
                {tab}
                <span className="tab-count">
                  {tab === "All"
                    ? catalog.length
                    : catalog.filter((i) => i.category === tab).length}
                </span>
              </button>
            );
          })}
        </div>

        <div className="section-header">
          <div className="section-label">
            {activeTab === "All"
              ? "Browse all products"
              : "Browsing " + activeTab}
          </div>
          <h2 className="section-title">
            {activeTab === "All" ? "All Collections" : activeTab}
          </h2>
        </div>

        <div className="items-grid">
          {filteredItems.map((item) => {
            const meta = categoryMeta[item.category] || {
              icon: "📦",
              color: "#888",
              light: "#f5f5f5",
            };
            return (
              <Link
                key={item.id}
                href={"/item/" + item.id}
                className="item-card"
              >
                <div className="card-img-wrap">
                  <img
                    src={item.image}
                    alt={item.itemname}
                    className="card-img"
                  />
                  <div
                    className="card-cat-badge"
                    style={{ background: meta.light, color: meta.color }}
                  >
                    {meta.icon} {item.category}
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-name">{item.itemname}</div>
                  <div className="card-props-preview">
                    {item.itemprops.slice(0, 3).map((p, i) => (
                      <div className="prop-row" key={i}>
                        <span className="prop-key">{p.label}</span>
                        <span className="prop-val">{p.value}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    className="view-btn"
                    style={{ background: meta.color, color: "#fff" }}
                  >
                    View Details →
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
