# XcogniVis — Intelligent Systems & AI Solutions

**XcogniVis** is a full-stack technology company specializing in AI, Machine Learning, Full-Stack Development, and Cloud Architecture. We build intelligent, scalable solutions for businesses and enterprises.

## 🎯 What We Do

- **Artificial Intelligence** — Custom AI systems, NLP, computer vision, and conversational agents
- **Machine Learning** — Predictive models, neural networks, and ML pipelines
- **Full-Stack Development** — Modern web applications (React, Node.js, Python)
- **Cloud & DevOps** — AWS, Azure, GCP deployments with CI/CD pipelines
- **Data Science** — Analytics, insights, and data-driven solutions
- **Mobile Development** — Native and cross-platform Android/iOS apps
- **Database Architecture** — Optimized SQL and NoSQL systems
- **Business Intelligence** — Dashboards, analytics, and KPI frameworks

---

## 📁 Project Structure

| Folder | Technology | Purpose |
|--------|------|---------|
| **docs** | Next.js 14, React, TypeScript | Modern landing page & marketing site |
| **backend** | Django, Django REST Framework | REST API for mobile & frontend |
| **mobile** | React Native, TypeScript | Cross-platform mobile application |

---

## 🚀 Quick Start

### Frontend (Next.js Landing Page)

```bash
cd docs
npm install
npm run dev
```

Visit http://localhost:3000

### Backend API (Django)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Visit http://localhost:8000

### Mobile App (React Native)

```bash
cd mobile
npm install
npm start

# In another terminal:
npm run android  # For Android
npm run ios      # For iOS
```

---

## 📋 Requirements

### All Projects
- Git (version control)

### Frontend (docs/)
- Node.js 18+
- npm or yarn

### Backend (backend/)
- Python 3.10+
- pip

### Mobile (mobile/)
- Node.js 18+
- Java Development Kit 11+
- Android SDK or iOS SDK

---

## 🔗 API Integration

All services connect to the backend API:

```
# Backend:     http://localhost:8000
# Frontend:    http://localhost:3000
# Mobile:      Configured in app config
```

### Health Check

```bash
curl http://localhost:8000/api/health/
```

---

## 🏗️ Development Workflow

1. **Frontend Changes**: Edit components in `docs/app/components/`
2. **Backend Changes**: Update models/views in `backend/xcognvis_api/`
3. **Mobile Changes**: Modify screens in `mobile/src/screens/`

Each module has its own package management and build process.

---

## 📚 Documentation

- [Frontend Setup](docs/README.md)
- [Backend Setup](backend/README.md)
- [Mobile Setup](mobile/README.md)

---

## 💡 Key Features

✅ **Modern Stack** — Latest frameworks and best practices  
✅ **Scalable Architecture** — From MVP to enterprise-grade  
✅ **Cloud Ready** — Deploy to AWS, Azure, or GCP  
✅ **Full Stack** — Everything from frontend to backend  
✅ **Production Grade** — Security, performance, and reliability built-in  

---

## 🤝 Contributing

We welcome collaboration and contributions. Please ensure code follows project standards.

---

## 📞 Contact

For inquiries about services or partnerships:
- Website: https://xcognivis.com
- Founder: Wilfred Aquila

---

## 📄 License

See [LICENSE](LICENSE) file for details.

**Built with ❤️ by XcogniVis**

Work in individual folders when developing specific components.

---

## 🚢 Deployment

- **Docs**: Deploy to GitHub Pages
- **Backend**: Deploy to hosting (Render, Railway, AWS)
- **Mobile**: Build APK for Google Play Store
