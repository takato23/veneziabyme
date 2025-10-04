# Plan de Producto y Roadmap – Venezia By Me

> Documento vivo. Revisar trimestralmente con negocio, fiscalistas y tecnología.

## 1. Contexto y North Star
- **North Star:** lograr operación fiscalmente cumplida y rentable en Argentina, Chile y Brasil durante 2026, cumpliendo RG 5647/2025 + RG 5747/2025, Resolución Exenta N°12/2025 (nota 53/2025) y la migración SAT→NFC-e en São Paulo antes del 1 de enero de 2026.citeturn0search0turn1search0turn3search0turn5search0
- Segmentos objetivo: cadenas con 20-200 tiendas, operación omnicanal y necesidad de analítica avanzada.
- Métricas clave: SLA de emisión fiscal, uptime POS, latencia promedio de pagos, precisión de forecast, CSAT del asistente IA.

## 2. Objetivos Estratégicos (Q1 2026 – Q2 2027)
| Código | Objetivo | KPI | Fecha objetivo |
|--------|----------|-----|----------------|
| O1 | Operar 100 % de tiendas piloto con contingencia fiscal probada | SLA fiscal ≥99.5 % | 2026-03-31 |
| O2 | Disponibilizar dashboards y forecasting multinivel con adopción ≥70 % usuarios corporativos | MAU dashboards | 2026-06-30 |
| O3 | Desplegar asistente IA con políticas de privacidad aprobadas | CSAT asistente ≥4/5 | 2026-09-30 |
| O4 [Configurable] | Abrir operaciones en un cuarto país cumpliendo normativa local | Tiempo onboarding <90 días | 2027-03-31 |

## 3. Roadmap Fase 0 – Piloto Controlado (Q4 2025 – Q1 2026)
| Hito | Fecha objetivo | Responsable | Dependencias |
|------|----------------|-------------|--------------|
| H0.1 Homologación ARCA controladores Epson/Hasar | 2025-11-15 | Compliance AR | RG 5647/2025, RG 5747/2025citeturn0search0turn1search0 |
| H0.2 Integración Mercado Pago Point + modo offline | 2025-12-10 | Pagos | H0.1, contrato Mercado Pagociteturn9search0 |
| H0.3 Pipeline CDC→Delta y dashboards MVP | 2026-01-15 | Datos | Infra Kafka/MSK |
| H0.4 Checklists SII y SAT cargados en anexos | 2026-01-31 | Compliance CL/BR | Resolución Exenta N°12/2025, SAT→NFC-eciteturn3search0turn5search0 |

## 4. Roadmap Fase 1 – Go-Live Inicial (Q2 – Q3 2026)
| Hito | Fecha objetivo | Responsable | Dependencias |
|------|----------------|-------------|--------------|
| F1.1 Go-live Argentina + Chile (tiendas piloto) | 2026-05-15 | Operaciones | H0.x, contratos adquirentesciteturn10search1turn11search1 |
| F1.2 Migración SAT→NFC-e en São Paulo | 2026-06-30 | Fiscal BR | F1.1, plan SEFAZ-SPciteturn5search0turn5search1 |
| F1.3 Despliegue asistente IA (Bedrock + RAG) | 2026-07-31 | Datos/IA | F1.1, pipelines estabilizados |
| F1.4 Rollout conciliações automáticas con Posnet y Transbank | 2026-08-31 | Pagos | F1.1, certificaciones adquirentesciteturn10search1turn11search1 |

## 5. Roadmap Fase 2 – Expansión Regional (Q4 2026 – Q2 2027)
| Hito | Fecha objetivo | Región | Responsable | Dependencias |
|------|----------------|--------|-------------|--------------|
| F2.1 Onboarding Uruguay (DGI e-factura) [Configurable] | 2026-12-15 | LATAM Sur | Compliance | F1.x |
| F2.2 Onboarding Perú (SUNAT) [Configurable] | 2027-03-31 | LATAM Andina | Compliance | F2.1 |
| F2.3 Lanzamiento loyalty avanzado e IA prescriptiva | 2027-03-31 | Multipaís | Producto/IA | F1.3 |

## 6. Epics Iniciales
- **Epic A – Plataforma Fiscal:** adaptadores ARCA/DTE/SAT, monitor de dispositivos, contingencias.
- **Epic B – POS & Operaciones Tienda:** flujo omnicanal, modo offline, reconciliación turnos.
- **Epic C – Pagos & Conciliações:** Mercado Pago, Posnet, Transbank, conciliación diaria y alertas.citeturn9search0turn10search1turn11search1
- **Epic D – Datos & IA:** pipelines CDC, dashboards Power BI, forecast multinivel, asistente Bedrock.
- **Epic E – Seguridad & Compliance:** RLS, auditoría, gestión de claves, certificaciones PCI/LGPD/GDPR.

## 7. Dependencias Clave
- Certificaciones fiscales locales (AFIP/ARCA, SII, SEFAZ-SP).citeturn0search0turn3search0turn5search0
- Acuerdos técnicos/comerciales con adquirentes (Mercado Pago, Posnet, Transbank).citeturn9search0turn10search1turn11search1
- Disponibilidad de hardware fiscal homologado y logística de swap 24h.
- Infraestructura de conectividad (ISP + LTE) y capacitación de personal tienda.

## 8. Métricas y KPIs
- SLA emisión fiscal por país.
- Uptime POS tienda.
- Latencia media autorización de pago.
- Porcentaje de conciliaciones sin discrepancias.
- Precisión forecast SKU/tienda.
- Adopción de dashboards y CSAT asistente IA.
- Lead time de despliegue (commit → producción).

## 9. Acciones inmediatas (Octubre 2025)
- [ ] Completar registros de homologación por tienda en `docs/annex/homologacion-*.md`.
- [ ] Alinear con Mercado Pago, Posnet y Transbank los planes de pruebas sandbox (obtener cronograma firmado).citeturn9search0turn10search1turn11search1
- [ ] Ejecutar revisión cruzada del roadmap con legal/compliance y actualizar fechas definitivas.
- [ ] Configurar automatizaciones docs-as-code (lint Markdown, verificación de enlaces) en pipelines de CI.

## 10. Próximas Acciones
- [ ] Validar fechas con equipos legales y adquirentes.
- [ ] Completar secciones de PRD por epic en `docs/03-prd.md`.
- [ ] Socializar checklists de homologación y docs-as-code en onboarding interno.
