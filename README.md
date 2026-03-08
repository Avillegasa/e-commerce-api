# Purpose
The actual system is intended to help learning TypeScript, Coding fundamentals, Connection with APIs and using microservices. 

## Architecture
The actual systems proposes: \n
- Each Service has its own database (database-per-service pattern)
- API Gateway is the only public enpdoint; internal services communicate eachother through private network using docker
- Synchronous Communication between services through HTTP
