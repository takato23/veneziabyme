# ADR 0002 – Arquitectura Multi-tenant y Stack Principal

- **Estado:** Aprobado
- **Fecha:** 2025-10-03

## Contexto
- Debemos operar en Argentina, Chile y Brasil cumpliendo RG 5647/2025, Resolución Exenta N°12/2025 (nota 53/2025) y la migración obligatoria SAT→NFC-e.citeturn0search9turn0search0turn0search3turn0search2
- Buscamos velocidad de entrega y trazabilidad documental usando enfoque documentation-first / docs-as-code dentro de Codex/CLI.citeturn1search0turn1search3turn1search2

## Decisión
- Adoptar arquitectura de microservicios sobre Amazon EKS con Istio para políticas zero-trust y observabilidad uniforme.
- Implementar multi-tenancy con esquemas dedicados en Aurora PostgreSQL y refuerzo RLS.
- Unificar stack de desarrollo en TypeScript (NestJS backend, Next.js y React Native front) para compartir modelos y tooling.
- Utilizar Kafka (MSK) como bus de eventos para desacoplar órdenes, fiscal y conciliaciones de pago.
- Gestionar documentación junto al código, con pipelines CI que validen cambios en `docs/` antes de fusionar.

## Consecuencias
- **Positivas**
  - Facilita parametrización por país/tenant y respuesta rápida a cambios regulatorios.
  - Mejora la reutilización de componentes y reduce context switching entre equipos.
  - Ofrece observabilidad y políticas consistentes con Istio + OpenTelemetry.
  - Documentación versionada simplifica auditorías y onboarding.
- **Negativas / Trade-offs**
  - Aumenta complejidad operativa (Kubernetes, Kafka, multi-tenant RLS).
  - Requiere disciplina en pruebas de aislamiento y capacitación en service mesh.

## Seguimiento
- Revisar semestralmente o ante la incorporación de un nuevo país con normativas especiales.
- Métricas/KPIs: SLA fiscal ≥99.5 %, tiempo de despliegue <30 min, incidentes multi-tenant críticos = 0. [Configurable]
