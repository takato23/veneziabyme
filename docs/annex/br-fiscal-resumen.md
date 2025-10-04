# Anexo BR – SAT CF-e y Migración NFC-e (São Paulo)

## Resumen normativo
- La Secretaría da Fazenda de São Paulo determinó el fin del CF-e SAT y la obligatoriedad de migrar a NFC-e antes del 31 de diciembre de 2025, con exigencia plena desde el 1 de enero de 2026.citeturn5search0
- Se mantienen ventanas de contingencia mediante SVC-RS/SVC-SP y uso de certificados digitales A1 para transmisión.citeturn5search1

## Requisitos clave
| Ítem | Descripción | Estado [Configurable] |
|------|-------------|-----------------------|
| Inventario SAT | Identificar modelos homologados y plan de retiro | |
| Certificados A1 | Renovar certificados antes de la migración NFC-e | |
| Ambiente NFC-e | Configurar emisión en ambiente de homologación SEFAZ | |
| Contingencia SVC | Documentar uso de SVC-RS/SP y reenvío al normalizarse | |

## Checklist de homologación BR
1. [ ] Levantar inventario de dispositivos SAT por tienda y calendarizar reemplazos.
2. [ ] Configurar `Svc FiscalConnector` para emitir NFC-e y manejar QR/NFC digital.
3. [ ] Validar comunicación con SEFAZ en ambiente de homologación y producción.
4. [ ] Probar contingencia SVC-RS con reconversión automática a NFC-e al restablecer.citeturn5search1
5. [ ] Garantizar almacenamiento seguro de recibos XML y DANFE simplificado.
6. [ ] Registrar resultados en `docs/annex/homologacion-br-registros.md` [Configurable].
