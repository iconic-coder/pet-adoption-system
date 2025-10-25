# Pet Adoption System

A full-stack web application for pet adoption built with React and JSON Server.

## Features

- Browse available pets with search functionality
- View detailed pet information
- Submit adoption applications
- Pet surrender form for owners
- Responsive design

## Tech Stack

- **Frontend:** React, React Router
- **Backend:** JSON Server
- **Styling:** CSS-in-JS

## Project Structure

```
pet-adoption-system/
├── pet-adoption-backend/     # JSON Server API
│   ├── db.json              # Database
│   └── package.json
├── pet-adoption-frontend/    # React App
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   └── utils/          # API utilities
│   └── package.json
└── README.md
```

## Local Development

### Backend Setup
```bash
cd pet-adoption-backend
npm install
npm start
```
Server runs on http://localhost:3002

### Frontend Setup
```bash
cd pet-adoption-frontend
npm install
npm start
```
App runs on http://localhost:3000

## API Endpoints

- `GET /pets` - Get all pets
- `POST /applications` - Submit adoption application
- `POST /surrenders` - Submit pet surrender request

## Deployment

- **Frontend:** Deployed on Netlify
- **Backend:** Deployed on Render/Railway

## Usage

1. Browse pets on the home page
2. Use search to filter pets
3. Click on a pet to view details
4. Fill out adoption form to apply
5. Use "Give Up Pet" for surrendering pets

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request