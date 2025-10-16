# Bases de Desarrollo Inicial – Venezia By Me

## 1. Objetivo
Establecer los cimientos técnicos mínimos para continuar la ejecución iterativa del SaaS, alineados con los documentos de arquitectura, roadmap y PRD.

## 2. Componentes habilitados
- **API NestJS (`apps/api`)**
  - Módulo `health`: expone `GET /api/v1/health` con estado y uptime del servicio.
  - Módulo `tenants`: entrega catálogo de tenants y configuración fiscal inicial via `GET /api/v1/tenants` y `GET /api/v1/tenants/:id/config`.
  - Módulo `catalog`: sirve menús y precios de referencia (`GET /api/v1/catalog/:tenantId/menu`).
  - Módulo `compliance`: resume el avance de homologaciones (`GET /api/v1/compliance/status`).
- **Portal Next.js (`apps/portal`)**
  - Presenta roadmap, bases técnicas y actividades en ejecución.
  - Refuerza el enfoque documentation-first enlazando especificaciones y PRD.

## 3. Convenciones de seguimiento
- Prefijo de rutas API: `api/v1` (definido en `main.ts`).
- Estructura modular bajo `apps/api/src/modules/*` para mantener responsabilidades aisladas.
- Datos iniciales en memoria para acelerar PoC; se reemplazarán por repositorios persistentes en las próximas iteraciones.
- Portal corporativo utiliza componentes declarativos y estilos globales simples para permitir migración posterior a un sistema de diseño.

## 4. Próximos pasos sugeridos
1. Instrumentar pruebas unitarias básicas por módulo (Nest Testing + Jest).
2. Conectar servicios a fuentes reales (PostgreSQL multi-tenant, Kafka/MSK) y reemplazar mocks.
3. Integrar autenticación corporativa (OIDC) en el portal y exponer documentación Swagger en la API.
4. Publicar checklist automatizado en CI para validar rutas activas y cobertura de pruebas.
