# Especificación Técnica Inicial – Venezia By Me

## 1. Alcance y Objetivos
- Implementar un SaaS multi-tenant para cadenas de heladerías con despliegue inicial en Argentina, Chile y Brasil, cumpliendo RG 5647/2025 (ARCA), RG 5747/2025 y las obligaciones de boleta electrónica del SII y migración SAT→NFC-e en São Paulo.citeturn0search0turn1search0turn3search0turn5search0
- Ofrecer operaciones omnicanal (POS tienda, ecommerce, delivery) con IA generativa y forecasting para optimizar ventas e inventario.
- Garantizar resiliencia de tienda con modo offline, control fiscal posterior y métricas de cumplimiento.

## 2. Supuestos y Restricciones
- Disponibilidad de hardware fiscal homologado: controladores Epson/Hasar certificados ARCA, boleta/DTE habilitada por SII y dispositivos SAT con certificados A1 para transición a NFC-e.citeturn0search0turn3search0turn5search1
- Conectividad primaria cableada con respaldo LTE en cada local; latencia objetivo <200 ms para transacciones críticas.
- Equipo interno con capacidades DevSecOps, analítica y presupuesto para servicios administrados enterprise.
- [Configurable] ampliación a nuevos países mediante regiones adicionales o despliegues soberanos.

## 3. Arquitectura Lógica
```
[Portal Corporativo Next.js]            [App Tienda React Native]
             |                                   |
             v                                   v
       [API Gateway (mTLS + OIDC)] ---> [BFF Tienda]
             |
  --------------------------------------------------------------------------------
  | Svc Orders | Svc Pricing | Svc Fiscal | Svc Payments | Svc Inventory | Svc CRM | Svc Reporting/IA |
  --------------------------------------------------------------------------------
             |
      [Event Bus Kafka (tenant partitioning)]
             |
      [Data Lakehouse Delta] ---> [Dashboards / Feature Store / IA]
             |
   [Integraciones: AFIP-ARCA, SII, SEFAZ, Mercado Pago, Posnet, Transbank]
```
- Microservicios contenedorizados en Amazon EKS con service mesh (Istio) para observabilidad, políticas zero-trust y resiliencia.
- Multi-tenancy reforzado mediante `tenant_id` + `country_code` y Row Level Security en bases Aurora PostgreSQL.
- [Configurable] Feature Flags por país/cadena para activar reglas fiscales, promociones y medios de pago.

## 4. Arquitectura Física y Despliegue en Nube
- Nube principal AWS (`sa-east-1` y `us-east-1`) en activo-activo con balanceo geográfico para reducir latencia.
- Frontends servidos desde S3 + CloudFront con CDN multi-idioma.
- Backend en Amazon EKS (nodos on-demand + spot) con Istio y políticas mTLS.
- Persistencia OLTP: Aurora PostgreSQL Global Database con esquemas por tenant+país, RLS, cifrado KMS y réplicas regionales.
- Cache/locking: Redis Enterprise (AWS); [Configurable] KeyDB en regiones con presupuestos restringidos.
- Event streaming: Amazon MSK (Kafka) con topics por tenant y DLQs; [Configurable] Amazon SQS/SNS para tenants pequeños.
- Data Lakehouse: Databricks Delta Lake sobre S3 con Unity Catalog; [Configurable] BigQuery Omni para multi-cloud.
- Infraestructura-as-code: Terraform + Helm y OPA Gatekeeper para políticas de despliegue.

## 5. Selección Tecnológica

| Dominio | Opción principal | Alternativa [Configurable] | Motivación |
|---------|------------------|----------------------------|------------|
| Backend servicios | NestJS (TypeScript) | Spring Boot (Kotlin) | Consistencia con front y rapidez |
| Front corporativo | Next.js 15 | Angular 18 | SSR, i18n y monorepo TS |
| App tienda | React Native + Expo OTA | Flutter | Reutilización de componentes |
| API Gateway | Amazon API Gateway + Lambda@Edge | Kong Gateway | Integración IAM/WAF |
| Persistencia OLTP | Aurora PostgreSQL | CockroachDB | Multi-tenant + replicación |
| Cache | Redis Enterprise | KeyDB | Latencia sub-ms |
| Mensajería | Kafka (MSK) | Amazon SQS/SNS | Orden y throughput |
| ETL/Orquestación | Dagster | Prefect | DAGs declarativos |
| Analítica BI | Power BI Embedded | ThoughtSpot | Self-service gobernado |
| IA generativa | Amazon Bedrock (Claude) | Azure OpenAI | Guardrails y residencia |
| Observabilidad | Datadog + OpenTelemetry | New Relic | APM + synthetics POS |

## 6. Módulos Aplicativos
- `Svc Orders`: flujo de venta omnicanal, combos, devoluciones, sincronización ecommerce.
- `Svc Pricing` / `Svc PromoEngine`: listas de precios por país/tenant; motor de reglas temporales y geográficas. [Configurable]
- `Svc FiscalConnector`: abstrae controladores ARCA, boleta/DTE y SAT/NFC-e; gestiona colas priorizadas, CAEA/CAI y SVC-RS.citeturn0search0turn3search0turn5search0
- `Svc Payments`: integra Mercado Pago Point Smart (Printing API 2025), Posnet/LaPos Gateway y Transbank Smart POS con conciliación diaria y reintentos.citeturn9search0turn10search1turn11search1
- `Svc Inventory` / `Svc Supply`: manejo de stock, lotes y reposición automática.
- `Svc CRM` / `Svc Loyalty`: perfiles, segmentación, campañas y cumplimiento LGPD/GDPR.
- `Svc Reporting/IA`: orquesta ETL, dashboards, forecasting e IA generativa.

## 7. Integraciones Fiscales y Adquirentes
- **Argentina – AFIP/ARCA:** soporte a RG 5647/2025 y RG 5747/2025 con inventario de controladores homologados, CAEA/CAI y emisión con IVA discriminado.citeturn0search0turn1search0
- **Chile – SII:** integración DTE/Boleta electrónica con obligación de entrega impresa desde el 1/mayo/2025 y digital desde el 1/marzo/2026 (Resolución Exenta N°12/2025, Nota 53/2025).citeturn3search0turn2search0
- **Brasil – SEFAZ-SP:** compatibilidad con SAT CF-e, plan de migración a NFC-e antes del 31/diciembre/2025 y contingencia SVC-RS; monitoreo de avisos oficiales.citeturn5search0turn5search1
- **Mercado Pago Point Smart:** Terminals + Printing API 2025 con OAuth2, webhooks HMAC y soporte omnicanal.citeturn9search0
- **Posnet/LaPos (Prisma/Fiserv):** gateway REST/SOAP, tokenización PCI, QR interoperable y soporte ISO 8583.citeturn10search1
- **Transbank Smart POS:** integración POS Fijo/Smart POS con SDK Android, conectividad WiFi/4G y soporte 24/7.citeturn11search1
- Observabilidad dedicada: métricas `fiscal_device_health`, `payment_latency`, `webhook_retries`; alertas SLA ≥99.5 % y dashboards NOC.
- Contingencias: modo offline con colas locales cifradas, emisión de comprobantes de emergencia (CAEA, DTE, SVC-RS) y reconciliación controlada.

## 8. Modelo de Datos Lógico (alto nivel)
- Entidades multi-tenant: `Tenant`, `CountryConfig`, `Store`, `Device`, `User`, `RolePolicy`, `MenuItem`, `PriceList`, `Promotion`, `Order`, `OrderLine`, `Payment`, `TaxDocument`, `FiscalEvent`, `InventoryBatch`, `ImportJob`, `ForecastScenario`.
- Relaciones: `Tenant` 1‑N `Store`; `Store` 1‑N `Device`; `Order` N‑M `MenuItem`; `TaxDocument` 1‑1 `Order`; `CountryConfig` 1‑N `FiscalProfile`; `ImportJob` 1‑N `ImportBatch`.
- Atributos [Configurable]: `TaxSchema`, `CurrencyPolicy`, `ReceiptTemplate`, `ForecastGranularity`, `PaymentRoutingRules`, `ComplianceChecklist`.
- Aislamiento: esquemas PostgreSQL por tenant+país, RLS, enmascaramiento y auditoría JSON firmada (`AuditTrail`).

## 9. Datos, Reportes e IA
- Pipelines CDC (Debezium) → Kafka → Delta Lake con validaciones Great Expectations orquestadas por Dagster. [Configurable]
- Dashboards Power BI Embedded (corporativo/región/tienda) con datasets certificados y alertas proactivas.
- Feature Store (Tecton/Feast) para modelos de forecasting y personalización. [Configurable]
- IA generativa: Amazon Bedrock (Claude) con RAG (OpenSearch vector store), prompts controlados y masking de PII.
- Forecasting multinivel: modelos Prophet + LSTM por SKU/tienda/país, explicabilidad SHAP y monitoreo de drift.
- Gobernanza: Unity Catalog + ABAC, lineage completo y sandbox analítico con datos anonimizados.

## 10. Gestión de Importaciones
- Formatos: CSV (RFC4180), XLSX, JSONL; [Configurable] conectores SFTP/Google Sheets.
- Validaciones: JSON Schema + reglas de negocio (duplicados, impuestos, monedas); previsualización con score de calidad.
- Herramientas: wizard corporativo, plantillas descargables, API bulk con seguimiento.
- Rollback/auditoría: `ImportJob` versionado, transacciones por lote, diff visual y reversión automática; retención 5 años.

## 11. Seguridad, Cumplimiento y Auditoría
- Cumplimiento fiscal: RG 5647/2025 + RG 5747/2025, Resolución Exenta N°12/2025 (Nota 53/2025) y migración SAT→NFC-e 2026.citeturn0search0turn1search0turn3search0turn5search0
- Identidad: OIDC (Auth0/AWS Cognito) con MFA, SCIM y SSO corporativo.
- Acceso: RBAC + ABAC (tenant, país, rol), segregación de funciones y revisiones trimestrales.
- Protección de datos: cifrado KMS, TLS 1.3, Secrets Manager y WAF + Shield.
- Auditoría: CloudTrail, Datadog SIEM, logs inmutables (Lake Formation), retención 5 años, exportaciones firmadas.
- [Configurable] alineación con PCI DSS, LGPD, GDPR según expansión.

## 12. Estrategia de Despliegue y Operaciones
- Entornos: `dev`, `qa`, `preprod`, `prod`; [Configurable] `pilot` por cadena/país.
- CI/CD: GitHub Actions → Argo CD con quality gates (SonarQube, OWASP ZAP) y firmas de imagen.
- Observabilidad: Datadog (APM, métricas, logs), OpenTelemetry tracing, synthetics POS.
- Backups: snapshots Aurora cada 15 min (retención 35 días) + replicación cross-region; Delta Lake incremental.
- Resiliencia: chaos testing trimestral (Litmus), DR RPO 5 min / RTO 30 min, runbooks de contingencia hardware fiscal.
- Expansión: roadmap Uruguay/Perú 2027 sujeto a evaluación normativa semestral.

## 13. Riesgos Técnicos y Mitigaciones
| Riesgo | Impacto | Mitigación |
|--------|---------|------------|
| Obsolescencia hardware fiscal | Interrupción facturación | Inventario dinámico, monitoreo SNMP, stock swap 24 h, fallback nube |
| Conectividad tienda deficiente | Pérdida de ventas/duplicados | SD-WAN + LTE, colas locales cifradas, reconciliación automática |
| Fugas multi-tenant | Riesgo reputacional/compliance | RLS testing continuo, escáner config, aislamiento de esquemas |
| Cambios regulatorios acelerados | Re-trabajo y multas | Comité compliance trimestral, feature flags, sandbox homologación |
| Sesgos IA / falta explicabilidad | Decisiones erróneas | SHAP, revisión humana, datasets curados, logging prompts |
| Fallas adquirentes | Caída ventas | Healthchecks, circuit breakers, fallback adquirente, conciliación diaria |

## 14. Elementos Configurables (Resumen)
- Regiones cloud adicionales, proveedor IA, orquestador ETL, motor de reglas promociones, conectores de importación, umbrales NOC, entornos piloto, plantillas fiscales, estrategias de reconciliación de pagos.

## 15. Próximos Pasos
1. Coordinar talleres con asesores fiscales por país para validar homologaciones y contingencias.citeturn0search0turn3search0turn5search0
2. Desarrollar PoC Mercado Pago Printing API + controlador ARCA con pruebas de modo offline.citeturn9search0turn0search0
3. Definir pipelines CDC → Delta con métricas de calidad y gobierno.
4. Planificar certificaciones PCI/LGPD/GDPR y simulacros de DR.
