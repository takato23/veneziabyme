# PRD – Venezia By Me

## 1. Problema y oportunidad
- Las cadenas de heladerías en LATAM deben adaptarse a cambios fiscales frecuentes (RG 5647/2025 + RG 5747/2025 en Argentina, Resolución Exenta N°12/2025 en Chile, migración SAT→NFC-e en São Paulo) manteniendo continuidad operativa.citeturn0search0turn1search0turn3search0turn5search0
- La falta de visibilidad en inventario y ventas provoca quiebres y sobreproducción; se requieren dashboards y forecasting para tomar decisiones diarias.
- Los pagos digitales (Mercado Pago, Posnet, Transbank) se multiplican y necesitan conciliaciones automáticas sin fricción.citeturn9search0turn10search1turn11search1

## 2. Usuarios y arquetipos
| Arquetipo | Necesidades | Métricas de éxito |
|-----------|-------------|-------------------|
| **Gerente regional** | Cumplir normativa fiscal, monitorizar ventas y stock | SLA fiscal, ventas diarios, desvío inventario |
| **Encargado de tienda** | Vender rápido, imprimir comprobantes, operar offline | Tiempo emisión ticket, reconexiones, errores |
| **Equipo de pagos** | Conciliar y detectar rechazos | % conciliado, latencia pagos |
| **Analista corporativo** | Forecast y dashboards, acceso gobernado | Adopción dashboards, precisión forecast |

## 3. Casos de uso principales
1. **Venta presencial con hardware fiscal**: flujo POS, impresión ARCA/boleta/NFC-e, contingencia offline.<br>
   - *Criterio éxito:* ticket emitido ≤5 s, comprobante válido, sincronización ≤15 min tras reconexión.
2. **Pago con Mercado Pago Smart**: terminal envía resultado vía webhook y dispara impresión; reconciliación diaria.<br>
   - *Criterio éxito:* webhooks confirmados, conciliación automática 99 %.citeturn9search0
3. **Conciliación adquirentes**: Posnet/Transbank reportan lotes; sistema detecta discrepancias.<br>
   - *Criterio éxito:* discrepancias <0.5 % y alertas en <15 min.citeturn10search1turn11search1
4. **Forecast de demanda**: analistas generan pronósticos SKU/tienda para planificar producción.<br>
   - *Criterio éxito:* MAPE <15 % y explicación SHAP disponible.
5. **Gestión de importaciones corporativas**: subir listados de productos, precios y promociones con validaciones.<br>
   - *Criterio éxito:* importaciones procesadas <15 min, rollback completo disponible.

## 4. Alcance (MVP vs. posteriores)
| Área | MVP 2026 | Futuro [Configurable] |
|------|----------|-----------------------|
| Fiscal | ARCA, Boleta SII, SAT→NFC-e + contingencias | Uruguay DGI, Perú SUNAT |
| Pagos | Mercado Pago Smart, Posnet, Transbank | Adquirentes locales adicionales |
| IA | Forecast SKU/tienda, asistente generativo | IA prescriptiva para promociones |
| Loyalty | Segmentación básica | Programas omnicanal y gamificación |

## 5. KPIs y métricas
- SLA emisión fiscal por país ≥99.5 %.citeturn0search0turn3search0turn5search0
- Latencia promedio autorización pago <3 s.citeturn10search1turn11search1
- Precisión forecast (MAPE) <15 % por SKU/tienda.
- Tasa conciliación automática ≥99 %.
- Adopción dashboards ≥70 % usuarios corporativos.
- CSAT asistente IA ≥4/5.

## 6. Criterios de aceptación mínimos por Epic
### Epic A – Plataforma Fiscal
- Controladores ARCA homologados con pruebas CAEA y reporte electrónico diario.citeturn0search0
- Boleta SII entrega impresa/digital, track-id monitoreado <5 min.citeturn3search0
- NFC-e operativa antes del 2026-01-01 con contingencia SVC-RS probada.citeturn5search0turn5search1

### Epic B – POS & Operaciones Tienda
- UI tablet funciona online/offline, cola local cifrada y reconciliación ≤15 min.
- Tiempo emisión ticket ≤5 s en condiciones nominales.

### Epic C – Pagos & Conciliações
- Mercado Pago imprime voucher y confirma webhook firmado.citeturn9search0
- Posnet y Transbank registran conciliación automática diaria con alertas cuando no llegue archivo.citeturn10search1turn11search1

### Epic D – Datos & IA
- Pipeline CDC→Delta genera datasets bronze/silver/gold diariamente.
- Dashboards Power BI publicados con controles ABAC.
- Asistente IA usa RAG y bloquea PII según políticas.

### Epic E – Seguridad & Compliance
- RLS habilitada en todas las tablas multi-tenant.
- Logs auditables y exportables en <1 h.
- Checklist docs-as-code ejecutado en cada release.citeturn7search8

## 7. Supuestos y dependencias
- Contratos activos con adquirentes y acceso a sandbox (Mercado Pago, Posnet, Transbank).citeturn9search0turn10search1turn11search1
- Disponibilidad de hardware fiscal homologado y plan de swap 24 h.
- Conectividad LTE backup en todas las tiendas críticas.

## 8. Riesgos y mitigaciones
| Riesgo | Mitigación |
|--------|------------|
| Cambios normativos imprevistos | Comité compliance trimestral, feature flags por país |
| Latencia adquirentes | Circuit breakers y fallback a otro medio de pago |
| Sesgos IA | Monitoreo drift, revisión humana y explicabilidad |
| Falta de adopción dashboards | Plan de enablement y métricas de uso |

## 9. Cronograma inicial
- MVP piloto Argentina/Chile listo al 2026-05-15.
- Migración SAT→NFC-e finalizada al 2026-06-30.
- Asistente IA GA al 2026-07-31.
