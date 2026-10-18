# Maritime SaaS Platform

An early maritime operations prototype for exploring vessel positions on an interactive map. It is intended as a starting point for shipping dashboards and future AIS-provider integration.

**Current data is synthetic.** The AIS service generates vessel records around major ports, and the frontend can fall back to generated data when the API is unavailable. This repository does not currently connect to a live AIS provider. Dashboard counts and status labels are demonstration content, and the vessel-details page is not implemented.

## What's included

- A Next.js and React frontend with TypeScript, Leaflet, React Leaflet, and OpenStreetMap tiles.
- An Express core-service scaffold with a health response and a sample vessel endpoint.
- A separate Express AIS service with synthetic vessel-list and vessel-detail endpoints.
- Docker Compose configuration with a MongoDB development service. The current demo endpoints generate data rather than reading MongoDB.
- Product plans and AIS-provider research in `docs/`. Administration, billing, authentication, and live tracking remain planned work.

## Run locally

Use Node.js 20+ and npm. Docker with Compose is optional for running the complete development stack.

### Docker Compose

From the repository root:

```sh
docker compose up --build
```

Services are available at:

| Service | Address |
| --- | --- |
| Frontend | http://localhost:3000 |
| Core API | http://localhost:3001 |
| AIS API | http://localhost:3002 |
| Local MongoDB | localhost:27017 |

This is a local development configuration with exposed ports, development servers, and an unauthenticated MongoDB instance. Production deployment requires separate security and service configuration.

### Without Docker

In one terminal:

```sh
cd backend/core
npm ci
```

Copy `.env.example` to `.env`, then run `npm run dev`. In a second terminal, repeat those commands from `backend/modules/ais/`.

In a third terminal:

```sh
cd frontend
npm ci
npm run dev
```

The frontend currently uses the AIS API at `http://localhost:3002`. It requests vessel updates every 30 seconds. Without a reachable API it uses synthetic fallback data. OpenStreetMap map tiles require an internet connection.

### API examples

- `GET http://localhost:3001/` — core service status.
- `GET http://localhost:3001/api/ais/vessels` — five randomly generated vessel records.
- `GET http://localhost:3002/` — AIS service status.
- `GET http://localhost:3002/api/vessels` — 25 synthetic vessel records.
- `GET http://localhost:3002/api/vessels/123456789` — synthetic details for the supplied identifier.

Generated identities and positions are not stable between requests; this is demo data, not a vessel-position record or navigation tool.

## Repository layout

| Folder | Purpose |
| --- | --- |
| `frontend/` | Map dashboard |
| `backend/core/` | Core-service scaffold |
| `backend/modules/ais/` | Synthetic AIS endpoints |
| `docs/` | Product plans, data research, and deployment notes |
| `admin/`, `landing/`, `shared/`, `infrastructure/` | Planning placeholders |

## Development checks

Run `npm run build` from `frontend/` to check the frontend production build. Backend syntax can be checked with `node --check src/index.js` from each backend folder. The backend manifests contain Jest commands, but no automated backend test suite is currently included.

See [ROADMAP.md](ROADMAP.md), [the implementation plan](docs/plan.md), and [product requirements](docs/product-requirements.md) for future work. Research documents may describe planned features or historical vendor information rather than implemented functionality.

## Credentials and local data

Local `.env` files are ignored; commit only safe `.env.example` templates. Keep provider tokens, private keys, and real customer data out of code, configuration examples, logs, and Git history. Docker build contexts also exclude local environments and credentials.

No live provider credentials are required for the current synthetic demo. `JWT_SECRET` is reserved for future authentication work; if enabling authentication, generate a new local secret rather than using example text. Do not put private credentials in frontend `NEXT_PUBLIC_` variables.

## License

Released under the [MIT License](LICENSE). Dependencies and third-party map data retain their own licenses and attribution requirements.
