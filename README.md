---

## ⚙️ Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## ✨ Features

- **Category Overview** — Items grouped by Cars, Bikes, Phones, Computers
- **Dynamic Detail Page** — `itemprops[]` iterated automatically, no hardcoded labels
- **Next.js Routing** — `/item/[id]` dynamic routes with `generateStaticParams`
- **Responsive Design** — Works on mobile, tablet, and desktop
- **Image Fallback** — Handles broken image URLs gracefully

---

## 📦 Data Format

Each item follows this JSON structure:

```json
{
  "id": "tesla-model-3",
  "itemname": "Tesla Model 3",
  "category": "Cars",
  "image": "https://...",
  "itemprops": [
    { "label": "Range", "value": "341 miles" },
    { "label": "Top Speed", "value": "125 mph" }
  ]
}
```

---

## 🗂️ Categories

| Category     | Items |
| ------------ | ----- |
| 🚗 Cars      | 13    |
| 🏍️ Bikes     | 9     |
| 📱 Phones    | 8     |
| 💻 Computers | 6     |
