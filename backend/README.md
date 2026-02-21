# Backend API
Built with Django and Django REST Framework.

## Setup
```bash
python -m venv venv
source venv/Scripts/activate  # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## API Endpoints
- Health check: `GET /api/health/`
