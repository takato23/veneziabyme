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
    </div>
  );
}
