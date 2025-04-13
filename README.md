# Maritime SAAS Platform

A comprehensive maritime software-as-a-service platform that helps shipping companies optimize operations, track assets, and make data-driven decisions.

## Project Structure

```
maritime-saas/
├── frontend/             # Next.js application for the main web app
├── admin/                # Admin portal (to be implemented)
├── backend/
│   ├── core/             # Core backend service (auth, users, billing)
│   └── modules/
│       ├── ais/          # AIS tracking service
│       └── ... other modules to be implemented
├── infrastructure/       # Infrastructure configurations
├── shared/               # Shared utilities and types
├── landing/              # Marketing website (to be implemented)
└── docs/                 # Documentation
```

## Quick Start

### Using Docker Compose (Recommended)

The easiest way to start all services together is using Docker Compose:

```bash
docker-compose up
```

This will start:

- Frontend on http://localhost:3000
- Core backend on http://localhost:3001
- AIS service on http://localhost:3002
- MongoDB database

### Manual Setup

If you prefer to run services individually:

#### Frontend (Next.js App)

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at http://localhost:3000

#### Core Backend Service

```bash
cd backend/core
npm install
npm run dev
```

The core service will be available at http://localhost:3001

#### AIS Module Service

```bash
cd backend/modules/ais
npm install
npm run dev
```

The AIS service will be available at http://localhost:3002

## Features (Current MVP)

- **AIS Ship Tracking**:
  - Real-time vessel position monitoring
  - Visualize vessels on an interactive map
  - Basic vessel details

## Implementation Roadmap

### Phase 1 (Current MVP)

- Core user management
- AIS tracking (basic)
- Web interface

### Phase 2

- Weather integration
- Email management
- Route planning

### Phase 3

- Cargo marketplace
- Advanced routing
- API for developers

### Phase 4

- Market intelligence
- Advanced analytics
- Multi-tenant deployments

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS, Leaflet
- **Backend**: Node.js, Express, MongoDB
- **Infrastructure**: Docker, Nginx (future: Kubernetes)

## Development

This project is under active development. The current MVP demonstrates the AIS tracking functionality, which is the core module of the platform.
