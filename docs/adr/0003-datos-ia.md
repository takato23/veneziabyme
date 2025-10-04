# ADR 0003 – Estrategia de Datos e IA

- **Estado:** Aprobado
- **Fecha:** 2025-10-03

## Contexto
- El negocio necesita reportes diarios y forecasting multinivel para cumplir metas operativas y responder a fiscalización en Argentina, Chile y Brasil.citeturn0search0turn3search0turn5search0
- Requerimos pipelines confiables que permitan auditar datos y alimentar un asistente generativo con protección de PII y explicabilidad.

## Decisión
- Adoptar arquitectura de datos tipo *lakehouse* con Databricks Delta Lake sobre S3, alimentada por CDC (Debezium) → Kafka (MSK) → pipelines Dagster.
- Gestionar features de IA a través de un Feature Store (Tecton; [Configurable] Feast) y entrenar modelos Prophet + LSTM para forecasting.
- Implementar asistente generativo en Amazon Bedrock (Claude) con RAG basado en OpenSearch vector store, aplicando masking de PII.
- Registrar cada dataset y modelo en Unity Catalog, aplicando ABAC y lineage.

## Consecuencias
- **Positivas**
  - Pipelines auditables facilitan cumplimiento fiscal y respuesta a inspecciones.citeturn0search0turn3search0turn5search0
  - Reutilización de features y experimentos controlados.
  - IA generativa gobernada con trazabilidad y explicabilidad.
- **Negativas / Trade-offs**
  - Incremento de costos operativos (Databricks, Tecton) y necesidad de skills especializados.
  - Complejidad en la gestión de acceso multi-tenant y gobierno de datos.

## Seguimiento
- Revisar trimestralmente la eficiencia de pipelines y los costos de cómputo.
- Métricas: frescura de datasets (<15 min), MAPE forecast (<15 %), porcentaje de consultas IA con explicación adjunta (100 %).
