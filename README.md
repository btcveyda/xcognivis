# XCognVis Monorepo

A full-stack project with frontend landing page, Django backend API, and React Native mobile app for Android.

## 📁 Project Structure

| Folder | Tech | Purpose |
|--------|------|---------|
| **docs** | Next.js, React, TypeScript | GitHub Pages landing page |
| **backend** | Django, DRF | REST API for mobile & frontend |
| **mobile** | React Native, TypeScript | Android app |

---

## 🚀 Quick Start

### 1. Frontend (Docs) - GitHub Pages

```bash
cd docs
npm install
npm run dev
```

Visit: http://localhost:3000

### 2. Backend API - Django

```bash
cd backend
python -m venv venv
source venv/Scripts/activate  # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Visit: http://localhost:8000

### 3. Mobile App - React Native (Android)

```bash
cd mobile
npm install
npm start

# In another terminal:
npm run android
```

---

## 📋 Prerequisites

### All projects
- Git

### Docs (Frontend)
- Node.js 18+
- npm or yarn

### Backend
- Python 3.10+
- pip

### Mobile
- Node.js 18+
- Java Development Kit 11+
- Android SDK (via Android Studio)

---

## 🔗 API Integration

All services connect to the backend API:
- Backend runs on: `http://localhost:8000`
- Frontend calls: `http://localhost:8000/api/`
- Mobile calls: `http://localhost:8000/api/`

### Health Check
```bash
curl http://localhost:8000/api/health/
```

---

## 📚 Documentation

- [Frontend Setup](docs/README.md)
- [Backend Setup](backend/README.md)  
- [Mobile Setup](mobile/README.md)

---

## 🛠️ Development

Each folder has its own:
- Package management (npm or pip)
- Build process
- Testing setup

Work in individual folders when developing specific components.

---

## 🚢 Deployment

- **Docs**: Deploy to GitHub Pages
- **Backend**: Deploy to hosting (Render, Railway, AWS)
- **Mobile**: Build APK for Google Play Store
