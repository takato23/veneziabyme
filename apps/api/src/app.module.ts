import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HealthModule } from "./modules/health/health.module";
import { TenantsModule } from "./modules/tenants/tenants.module";
import { CatalogModule } from "./modules/catalog/catalog.module";
import { ComplianceModule } from "./modules/compliance/compliance.module";

@Module({
  imports: [HealthModule, TenantsModule, CatalogModule, ComplianceModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
