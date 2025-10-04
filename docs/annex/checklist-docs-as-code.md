# Checklist Docs-as-Code – Venezia By Me

> Basado en buenas prácticas de la comunidad *Docs as Code* y Write the Docs.citeturn7search8

## Antes de abrir un PR
- [ ] Actualizar los documentos afectados (`docs/…`) junto con el código.
- [ ] Ejecutar linters Markdown (`npm run lint:md`) y verificación de enlaces (`npm run lint:links`). [Configurable]
- [ ] Verificar que las fuentes normativas estén citadas correctamente.

## Durante la revisión
- [ ] Solicitar revisión cruzada técnica y de documentación.
- [ ] Confirmar que los ADR relevantes se hayan actualizado o creado.
- [ ] Validar que las pruebas QA incluyan escenarios fiscal/pagos.

## Antes de fusionar
- [ ] CI ejecuta linters, pruebas unitarias/integración y validación documental (GitHub Actions `docs-ci.yml`). [Configurable]
- [ ] Se adjuntan evidencias de homologación o certificaciones cuando aplique.
- [ ] Se etiqueta el release con los cambios documentados.

## Post-merge
- [ ] Publicar cambios en el changelog/portales internos.
- [ ] Sincronizar anexos normativos si hubo nuevas versiones (registrar versión y enlace oficial). [Configurable]
- [ ] Planificar sesiones de enablement para equipos afectados.

## Automatización sugerida
- `npm run lint:md`: ejecuta remark/markdownlint sobre `docs/`.
- `npm run lint:links`: utiliza `lychee` o `markdown-link-check` para verificar enlaces externos.
- GitHub Actions `docs-ci.yml`: orquesta linters, spellcheck y verificación de citaciones.
- Dependabot/renovate para mantener versiones de herramientas de documentación al día.
