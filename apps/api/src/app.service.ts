import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getInfo() {
    return {
      status: "ok",
      timestamp: new Date().toISOString(),
      service: "veneziabyme-api",
      version: process.env.APP_VERSION ?? "0.1.0",
      region: process.env.AWS_REGION ?? "local",
      modules: [
        "health",
        "tenants",
        "catalog",
        "compliance"
      ]
    } as const;
  }
}
