# Venezia By Me – Plataforma SaaS para Cadenas de Heladerías

Venezia By Me es un SaaS multi-tenant orientado a cadenas de heladerías que inicia operaciones en Argentina, Chile y Brasil, cumpliendo la normativa vigente sobre controladores fiscales ARCA, boleta electrónica del SII y migración SAT→NFC-e en São Paulo.citeturn0search0turn1search0turn5search0

## Visión del producto
- Garantizar un punto de venta omnicanal con integración nativa a controladores fiscales ARCA, boleta/DTE y SAT o NFC-e.citeturn0search0turn1search0turn5search1
- Entregar analítica avanzada (dashboards, forecasting, IA generativa) para optimizar márgenes y abastecimiento.
- Escalar regionalmente con configuración por cadena/país y despliegues cloud-native resilientes.

## Principios de trabajo
- **Documentation-first:** toda decisión y cambio viven en `docs/`, versionados junto al código y tratados con los mismos flujos de revisión y CI/CD.citeturn7search8
- **Regulación primero:** cada release se verifica contra los últimos requisitos fiscales de AFIP/ARCA, SII y SEFAZ-SP.citeturn0search0turn3search0turn5search0
- **Seguridad y privacidad by design:** cifrado extremo a extremo, controles RLS y auditoría exhaustiva como parte de la Definition of Done.

## Mapa documental
| Recurso | Descripción |
|---------|-------------|
| [`docs/01-especificacion-tecnica-inicial.md`](docs/01-especificacion-tecnica-inicial.md) | Arquitectura lógica/física, stack tecnológico, integraciones fiscales y adquirentes, datos, IA, seguridad y despliegue. |
| [`docs/02-plan-producto-y-roadmap.md`](docs/02-plan-producto-y-roadmap.md) | Objetivos estratégicos, roadmap por fases y epics iniciales. |
| [`docs/03-prd.md`](docs/03-prd.md) | Definición de producto (problema, usuarios, casos de uso, KPIs y criterios de aceptación). |
| [`docs/04-bases-desarrollo-app.md`](docs/04-bases-desarrollo-app.md) | Cimientos técnicos iniciales de API, portal y convenciones de seguimiento. |
| [`docs/adr/`](docs/adr/) | Decisiones arquitectónicas (incluye plantilla y ADRs aprobadas). |
| [`docs/annex/`](docs/annex/) | Resúmenes normativos, checklists de homologación e institucionalización de prácticas docs-as-code. |

## Colaboración en Codex/CLI
1. Usa ramas dedicadas y PR con checklist de documentación y validaciones automáticas (lint, links, reglas fiscales).citeturn7search8
2. Actualiza los documentos relevantes en cada cambio; si la decisión es estructural, registra/actualiza el ADR correspondiente.citeturn7search8
3. Mantén sincronizados código y documentación: ningún despliegue se aprueba sin evidencias de cumplimiento fiscal.citeturn0search0turn3search0turn5search0

## Próximos pasos
- Completar fechas y responsables del roadmap en `docs/02-plan-producto-y-roadmap.md`.
- Poblar anexos normativos con evidencia documental y checklists por país.
- Planificar certificaciones (PCI DSS, LGPD, GDPR) y pruebas de resiliencia alineadas al despliegue inicial.
