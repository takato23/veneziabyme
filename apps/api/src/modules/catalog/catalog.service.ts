import { Injectable, NotFoundException } from "@nestjs/common";

type MenuCategory = {
  id: string;
  name: string;
  items: Array<{
    sku: string;
    name: string;
    price: number;
    currency: "ARS" | "CLP" | "BRL";
    taxCode: string;
  }>;
};

@Injectable()
export class CatalogService {
  private readonly menus: Record<string, MenuCategory[]> = {
    "gelato-sur": [
      {
        id: "classics",
        name: "Sabores clásicos",
        items: [
          { sku: "GEL-CHOC", name: "Chocolate amargo", price: 4200, currency: "ARS", taxCode: "IVA 21" },
          { sku: "GEL-FRAM", name: "Frambuesa patagónica", price: 4500, currency: "ARS", taxCode: "IVA 21" }
        ]
      },
      {
        id: "temporada",
        name: "Edición temporada",
        items: [
          { sku: "GEL-PISCO", name: "Pisco sour", price: 3800, currency: "CLP", taxCode: "IVA 19" }
        ]
      }
    ],
    "gelateria-br": [
      {
        id: "premium",
        name: "Linha premium",
        items: [
          { sku: "GEL-BR-A", name: "Açaí c/ banana", price: 32, currency: "BRL", taxCode: "ICMS" },
          { sku: "GEL-BR-D", name: "Doce de leite mineiro", price: 30, currency: "BRL", taxCode: "ICMS" }
        ]
      }
    ]
  };

  listTenants() {
    return Object.keys(this.menus);
  }

  getMenu(tenantId: string) {
    const menu = this.menus[tenantId];

    if (!menu) {
      throw new NotFoundException(`Menu for tenant ${tenantId} not found`);
    }

    return menu;
  }
}
