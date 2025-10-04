# Anexo AR – Controladores Fiscales ARCA (RG 5647/2025 y RG 5747/2025)

## Resumen normativo
- La RG 5647/2025 establece el régimen ARCA para controladores fiscales de nueva generación, detallando requisitos de homologación, reporte electrónico y trazabilidad de dispositivos.citeturn0search0
- La RG 5747/2025 complementa ARCA con cambios operativos para la emisión de comprobantes con IVA discriminado, definiciones de CAEA/CAI y actualiza el cronograma de adopción.citeturn1search0
- Se exige inventario online de equipos, firma digital autorizada y sincronización diaria de reportes con AFIP.

## Requisitos clave
| Ítem | Descripción | Estado [Configurable] |
|------|-------------|-----------------------|
| Homologación de modelos | Validar que Epson/Hasar o equivalentes figuren en listado oficial ARCA | |
| Certificados digitales | Gestionar certificados por dispositivo y usuario responsable | |
| Reportes electrónicos | Transmisión diaria de reportes Z y registros de eventos | |
| CAEA / CAI contingencia | Planificar emisión de comprobantes contingentes y reconciliación posterior | |

## Checklist de homologación AR
1. [ ] Registrar cada dispositivo con número de serie y local asociado.
2. [ ] Configurar conexión segura (mTLS) entre `Svc FiscalConnector` y controlador.
3. [ ] Validar impresión de comprobantes con IVA discriminado y códigos QR exigidos.citeturn1search0
4. [ ] Ejecutar pruebas de contingencia CAEA (facturación offline) y reconciliación en 24 h.
5. [ ] Sincronizar reportes con AFIP y archivar acuses de recibo.
6. [ ] Documentar pruebas en `docs/annex/homologacion-ar-registros.md` [Configurable].
