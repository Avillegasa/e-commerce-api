# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This is a **learning repository** for studying TypeScript fundamentals and microservices architecture. It is not a deployed application — it serves as notes, reference code, and a blueprint for building an e-commerce microservices system.

## TypeScript Setup

No package.json or node_modules exist. TypeScript compilation is configured via `tsconfig.json` with:
- Target: ES2016, Module: CommonJS
- Strict mode enabled

To compile TypeScript manually (requires `tsc` installed globally):
```sh
tsc learning.ts
```

## Planned Architecture (from README)

The intended system is a microservices e-commerce API with:

- **API Gateway** — sole public endpoint; handles routing, auth middleware, rate limiting (no DB)
- **user-service** — registration, login, JWT tokens → PostgreSQL
- **product-catalog-service** — product CRUD, categories, inventory, images → PostgreSQL + Cloudinary
- **shopping-cart-service** — cart management → PostgreSQL
- **order-service** — order creation, tracking, history → PostgreSQL
- **payment-service** — Stripe checkout sessions and webhooks → PostgreSQL
- **notification-service** — email notifications (confirmation, welcome) → Kafka events + Resend API

**Communication pattern:** Synchronous HTTP between services via private Docker network. Each service is an independent Node.js/TypeScript project with its own `package.json`, `Dockerfile`, and database schema.

## Current Files

- `learning.ts` — TypeScript fundamentals notes (types, unions, aliases, interfaces, literal types)
- `testing.js` — compiled JS output from `learning.ts`
- `index.html` — minimal HTML skeleton
