import { Injectable, NotFoundException } from "@nestjs/common";

type TenantConfig = {
  id: string;
  name: string;
  countries: Array<"AR" | "CL" | "BR">;
  features: {
    pos: boolean;
    ecommerce: boolean;
    delivery: boolean;
    forecasting: boolean;
    compliance: boolean;
  };
  fiscalProfiles: Array<{
    country: "AR" | "CL" | "BR";
    schema: string;
    contingency: string;
  }>;
};

@Injectable()
export class TenantsService {
  private readonly tenants: TenantConfig[] = [
    {
      id: "gelato-sur",
      name: "Gelato Sur",
      countries: ["AR", "CL"],
      features: {
        pos: true,
        ecommerce: true,
        delivery: true,
        forecasting: true,
        compliance: true
      },
      fiscalProfiles: [
        {
          country: "AR",
          schema: "RG 5647/2025",
          contingency: "CAEA 24h"
        },
        {
          country: "CL",
          schema: "Boleta electrónica",
          contingency: "Impresión local"
        }
      ]
    },
    {
      id: "gelateria-br",
      name: "Gelateria Brasil",
      countries: ["BR"],
      features: {
        pos: true,
        ecommerce: false,
        delivery: true,
        forecasting: true,
        compliance: true
      },
      fiscalProfiles: [
        {
          country: "BR",
          schema: "SAT → NFC-e",
          contingency: "SVC-RS"
        }
      ]
    }
  ];

  findAll() {
    return this.tenants.map(({ id, name, countries, features }) => ({
      id,
      name,
      countries,
      activeFeatures: Object.entries(features)
        .filter(([, enabled]) => enabled)
        .map(([feature]) => feature)
    }));
  }

  findConfig(tenantId: string) {
    const tenant = this.tenants.find((item) => item.id === tenantId);

    if (!tenant) {
      throw new NotFoundException(`Tenant ${tenantId} not found`);
    }

    return tenant;
  }
}
