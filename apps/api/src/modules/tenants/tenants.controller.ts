import { Controller, Get, Param } from "@nestjs/common";
import { TenantsService } from "./tenants.service";

@Controller({ path: "tenants" })
export class TenantsController {
  constructor(private readonly tenantsService: TenantsService) {}

  @Get()
  list() {
    return this.tenantsService.findAll();
  }

  @Get(":tenantId/config")
  config(@Param("tenantId") tenantId: string) {
    return this.tenantsService.findConfig(tenantId);
  }
}
