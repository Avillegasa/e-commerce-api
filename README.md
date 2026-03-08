# Purpose
The actual system is intended to help learning TypeScript, Coding fundamentals, Connection with APIs and using microservices. 

## Architecture
The actual systems proposes: \n
- Each Service has its own database (database-per-service pattern)
- API Gateway is the only public enpdoint; internal services communicate eachother through private network using docker
- Synchronous Communication between services through HTTP

### Map of Microservices
> Each microservices must follow the next: 
## 3. Mapa de Microservicios

Cada microservicio es un proyecto Node.js/TypeScript independiente con su propio package.json, Dockerfile, y schema de base de datos:

| Microservicio | Responsabilidad | Datos / Integraciones |
|---|---|---|
| `user-service` | Registro, login, perfil, JWT tokens | PostgreSQL (users, roles) |
| `product-catalog-service` | CRUD productos, categorías, inventario, imágenes | PostgreSQL (products, categories) + Cloudinary |
| `shopping-cart-service` | Agregar/quitar items, actualizar cantidades | PostgreSQL (carts, cart_items) |
| `order-service` | Crear orden desde cart, tracking, historial | PostgreSQL (orders, order_items) |
| `payment-service` | Stripe checkout sessions, webhooks de pago | PostgreSQL (payments, transactions) |
| `notification-service` | Emails: confirmación, envío, bienvenida | Consume eventos Kafka + Resend API |
| `api-gateway` | Routing, auth middleware, rate limiting | Sin DB — proxy a servicios internos |