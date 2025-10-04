# ADR 0004 – Estrategia de Resiliencia Offline en Tiendas

- **Estado:** Aprobado
- **Fecha:** 2025-10-03

## Contexto
- Las normativas fiscales permiten emisión de comprobantes de contingencia (CAEA en Argentina, boleta electrónica con reintentos en Chile, SAT→NFC-e con SVC-RS en Brasil) siempre que se reconcilien una vez restablecida la conectividad.citeturn0search0turn2search0turn5search1
- La conectividad en tiendas puede degradarse (fallas ISP, energía, hardware fiscal) y debemos garantizar continuidad de venta y sincronización segura.

## Decisión
- Implementar modo offline en `Svc Orders` y `Svc FiscalConnector` que almacene tickets y comprobantes en bóveda local cifrada con rotación de claves.
- Utilizar colas locales persistentes (SQLite + cifrado) sincronizadas con Kafka al reconectar.
- Establecer políticas de reintento exponencial y reconciliación obligatoria en ≤15 minutos desde la reconexión.
- Instrumentar monitoreo proactivo (heartbeat cada 60 s, métricas `fiscal_device_health`) y alertas cuando backlog >50 comprobantes.

## Consecuencias
- **Positivas**
  - Garantiza continuidad de ventas y cumplimiento normativo aun con cortes de conectividad.citeturn0search0turn2search0turn5search1
  - Proporciona trazabilidad total de comprobantes emitidos en contingencia.
- **Negativas / Trade-offs**
  - Requiere gestionar claves y almacenamiento seguro en cada dispositivo.
  - Incrementa complejidad en pruebas end-to-end (online/offline).

## Seguimiento
- Revisar métricas de backlog y tasas de reconciliación mensualmente.
- Ejecutar simulacros de contingencia por país al menos una vez por trimestre.
