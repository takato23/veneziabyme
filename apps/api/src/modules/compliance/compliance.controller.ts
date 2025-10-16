import { Controller, Get } from "@nestjs/common";
import { ComplianceService } from "./compliance.service";

@Controller({ path: "compliance" })
export class ComplianceController {
  constructor(private readonly complianceService: ComplianceService) {}

  @Get("status")
  status() {
    return this.complianceService.getStatus();
  }
}
