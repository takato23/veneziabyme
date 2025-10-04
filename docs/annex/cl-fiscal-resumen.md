# Anexo CL – Boleta Electrónica (Resolución Exenta N°12/2025 + Nota 53/2025)

## Resumen normativo
- La Resolución Exenta N°12/2025 del SII exige que los contribuyentes emitan boleta electrónica con entrega impresa obligatoria desde el 1 de mayo de 2025 y digital desde el 1 de marzo de 2026.citeturn3search0
- La Nota 53/2025 aclara obligaciones operativas: disponibilidad de impresora en punto de venta, mecanismos de entrega digital y monitoreo de fallos en la emisión.citeturn2search0

## Requisitos clave
| Ítem | Descripción | Estado [Configurable] |
|------|-------------|-----------------------|
| Certificación software DTE | Validar con SII el software autorizado para emisión | |
| Impresión en tienda | Garantizar impresora operativa o backup para boleta impresa | |
| Entrega digital | Habilitar envío por correo/SMS o descarga QR para clientes | |
| Track-id y monitoreo | Registrar track-id y estados de aceptación del SII | |

## Checklist de homologación CL
1. [ ] Registrar al contribuyente y punto de venta en el portal SII.
2. [ ] Configurar firma electrónica avanzada y certificados vigentes.
3. [ ] Ejecutar pruebas de emisión en ambiente de certificación SII (boleta afecta y exenta).
4. [ ] Validar contingencia: reintentos automáticos y almacenamiento seguro si falla el envío.citeturn2search0
5. [ ] Configurar alertas si el track-id no cambia a aceptado en ≤5 minutos.
6. [ ] Documentar evidencia y guardarla en `docs/annex/homologacion-cl-registros.md` [Configurable].
