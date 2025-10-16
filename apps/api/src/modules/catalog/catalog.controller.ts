import { Controller, Get, Param } from "@nestjs/common";
import { CatalogService } from "./catalog.service";

@Controller({ path: "catalog" })
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get()
  tenants() {
    return this.catalogService.listTenants();
  }

  @Get(":tenantId/menu")
  menu(@Param("tenantId") tenantId: string) {
    return this.catalogService.getMenu(tenantId);
  }
}
