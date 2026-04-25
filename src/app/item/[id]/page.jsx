import Link from "next/link";
import { notFound } from "next/navigation";
import catalog from "../../../data/catalog.json";

const categoryMeta = {
  Cars: { color: "#e63946", light: "#fff0f0" },
  Bikes: { color: "#2a9d8f", light: "#f0faf9" },
  Phones: { color: "#6a4c93", light: "#f5f0fc" },
  Computers: { color: "#d4a017", light: "#fffbef" },
};

// Generates all static paths at build time
export async function generateStaticParams() {
  return catalog.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }) {
  const item = catalog.find((i) => i.id === params.id);
  return { title: item ? `${item.itemname} — Catalog` : "Not Found" };
}

export default function ItemDetailPage({ params }) {
  const item = catalog.find((i) => i.id === params.id);
  if (!item) notFound();

  const meta = categoryMeta[item.category] || {
    icon: "📦",
    color: "#888",
    light: "#f5f5f5",
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <div>
          <div className="header-logo">
            Cata<span>log</span>
          </div>
          <div className="header-subtitle">Premium Collection</div>
        </div>
        <Link href="/" className="back-btn">
          ← Back to Catalog
        </Link>
      </header>

      {/* Detail Content */}
      <div className="detail-page">
        <div className="detail-grid">
          {/* Left: Image */}
          <div className="detail-img-section">
            <div className="detail-img-wrap">
              <img
                src={item.image}
                alt={item.itemname}
                className="detail-img"
              />
            </div>
            <div
              className="detail-cat-tag"
              style={{ background: meta.light, color: meta.color }}
            >
              <span>{item.category}</span>
            </div>
          </div>

          {/* Right: Info */}
          <div className="detail-info">
            <div className="detail-label">Item Details</div>
            <h1 className="detail-name">{item.itemname}</h1>
            <div className="detail-divider" />

            <div className="specs-title">Specifications</div>

            {/* Dynamic rendering of itemprops */}
            <div className="specs-grid">
              {item.itemprops.map((prop, idx) => (
                <div className="spec-row" key={idx}>
                  <div className="spec-key">
                    <div
                      className="spec-dot"
                      style={{ background: meta.color }}
                    />
                    {prop.label}
                  </div>
                  <div className="spec-val">{prop.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
