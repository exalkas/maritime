Let's get started with an enhanced plan that addresses your requirements:

## Week 1: Core Infrastructure & Multi-tenancy

### Database Architecture

- Set up PostgreSQL with multi-tenant architecture
  - Use a `tenant_id` column in all tables for isolation
  - Create schema for tenant management, users, roles, and module subscriptions
  - Add proper indexes and foreign keys for tenant isolation

### Authentication & Authorization

- Implement NextAuth.js integration
- Set up JWT with proper tenant context
- Create role-based access control system
  - Admin, Manager, Operator, Viewer roles
  - Permission matrix for each module

### Module & Billing Framework

- Create module subscription tables
  - Module activation status
  - User count allocation
  - Ship count allocation
  - Billing tier
- Basic subscription management API

## Week 2: Admin Portal & AIS Foundation

### Admin Portal

- Company/tenant management interface
- User management with role assignment
- Module activation/deactivation controls
- Subscription management

### AIS Data Foundation

- AIS data fetching script
- Data normalization and storage model
- Tenant-aware data isolation
- Background service for data updates

## Week 3: AIS Visualization & User Features

### Map Interface

- Interactive map component with Mapbox/Leaflet
- Basic vessel display with filtering
- Tenant-specific data display
- Map controls and vessel information panel

### User Management

- User invitation system
- Role assignment
- Module access control
- Profile management

## Week 4: Polish & Deployment

### UI/UX Refinement

- Responsive design improvements
- Loading states and error handling
- Performance optimization

### Billing Integration

- Usage tracking implementation
- Implement billing calculation logic
- Reporting dashboard for usage

### Deployment

- Docker compose setup
- Nginx configuration
- SSL setup
- Basic monitoring

This approach builds in multi-tenancy, module selection, and billing foundations from the start, while still focusing on delivering the core AIS functionality quickly. The multi-tenant database design is more efficient for an MVP but still provides proper data isolation between customers.

Shall we start setting up the project structure?
