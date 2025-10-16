const featureCards = [
  {
    title: "Backoffice omnicanal",
    description:
      "Configura catálogos, precios y promociones centralizados por país y cadena. La información se replica en segundos a tiendas, ecommerce y delivery."
  },
  {
    title: "Producción y abastecimiento",
    description:
      "Planifica batches, controla mermas y obtén alertas de reposición basadas en forecast SKU/tienda alimentado por datos de ventas reales."
  },
  {
    title: "Pagos y fiscal",
    description:
      "Conciliamos automáticamente Mercado Pago, Posnet y Transbank, mientras los comprobantes fiscales cumplen RG 5647/2025, Resolución 12/2025 y NFC-e."
  }
];

const roadmap = [
  {
    milestone: "MVP piloto",
    description: "Argentina + Chile con homologación fiscal y conciliaciones Mercado Pago/Posnet.",
    eta: "Mayo 2026"
  },
  {
    milestone: "Migración NFC-e",
    description: "Lanzamiento SaaS en São Paulo con transición SAT→NFC-e y monitoreo en tiempo real.",
    eta: "Junio 2026"
  },
  {
    milestone: "IA Generativa",
    description: "Asistente corporativo multi-idioma con RAG seguro para operaciones y compliance.",
    eta: "Julio 2026"
  }
];

const foundations = [
  {
    title: "API NestJS",
    description:
      "Servicios iniciales para salud, tenants, catálogos y compliance listos para iterar y conectar con bases de datos.",
    endpoints: [
      "GET /api/v1/health",
      "GET /api/v1/tenants",
      "GET /api/v1/catalog/:tenantId/menu",
      "GET /api/v1/compliance/status"
    ]
  },
  {
    title: "Portal Next.js",
    description:
      "Layout corporativo document-first que comunica roadmap, bases técnicas y próximos pasos de entrega.",
    endpoints: ["Backoffice web", "Documentación integrada", "Estrategia omnicanal"]
  },
  {
    title: "Documentación viva",
    description:
      "Especificaciones, PRD y roadmap se versionan junto al código para mantener alineado al equipo.",
    endpoints: ["docs/01-especificacion-tecnica-inicial.md", "docs/02-plan-producto-y-roadmap.md", "docs/03-prd.md"]
  }
];

const executionSteps = [
  {
    label: "Homologación fiscal AR/CL/BR",
    status: "En curso",
    owner: "Compliance",
    due: "Nov 2025"
  },
  {
    label: "PoC Pagos Mercado Pago + modo offline",
    status: "En curso",
    owner: "Pagos",
    due: "Dic 2025"
  },
  {
    label: "Pipelines CDC → Delta Lake",
    status: "Planificado",
    owner: "Datos",
    due: "Ene 2026"
  }
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section>
        <header>
          <h2>Todo el control en un solo lugar</h2>
          <p>
            Unifica ventas, producción e inteligencia de datos para escalar tu cadena de heladerías con
            foco en la rentabilidad y el cumplimiento normativo.
          </p>
        </header>
        <div className="feature-grid">
          {featureCards.map((card) => (
            <article key={card.title} className="space-y-3">
              <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <header>
          <h2>Roadmap inicial</h2>
          <p>
            Trabajamos con documentación viva y métricas de adopción para entregar releases confiables
            en cada país.
          </p>
        </header>
        <ol>
          {roadmap.map((item) => (
            <li key={item.milestone}>
              <strong>{item.milestone}</strong> – {item.description} <span>({item.eta})</span>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <header>
          <h2>Bases técnicas disponibles</h2>
          <p>
            Primeros módulos implementados para acelerar el desarrollo iterativo, integrando controladores fiscales, catálogos y
            gestión multi-tenant.
          </p>
        </header>
        <div className="foundation-grid">
          {foundations.map((foundation) => (
            <article key={foundation.title} className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-ink">{foundation.title}</h3>
                <p>{foundation.description}</p>
              </div>
              <ul className="endpoint-list">
                {foundation.endpoints.map((endpoint) => (
                  <li key={endpoint} className="endpoint-pill">
                    {endpoint}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <header>
          <h2>Primeros pasos del desarrollo</h2>
          <p>
            Este portal Next.js servirá como base del backoffice corporativo, integrado con microservicios
            NestJS para órdenes, pagos y fiscalización. Seguiremos expandiendo módulos y autenticación
            en las próximas iteraciones.
          </p>
        </header>
        <p>
          Próximamente incluiremos dashboards operativos, gestión de catálogos multi-país y acceso
          gobernado por tenant. Los documentos en <code>docs/</code> se mantendrán como fuente de verdad.
        </p>
      </section>

      <section>
        <header>
          <h2>Próximas actividades en ejecución</h2>
          <p>
            Seguimos el enfoque documentation-first; cada actividad tiene responsables claros y fechas objetivo que se reflejarán
            en los PR y tableros de entrega.
          </p>
        </header>
        <ul className="execution-list">
          {executionSteps.map((step) => (
            <li key={step.label} className="execution-card">
              <div className="execution-header">
                <span className="execution-status">{step.status}</span>
                <span className="execution-due">{step.due}</span>
              </div>
              <h3>{step.label}</h3>
              <p>
                Equipo responsable: <strong>{step.owner}</strong>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
