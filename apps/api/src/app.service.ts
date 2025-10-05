import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHealth() {
    return {
      status: "ok",
      timestamp: new Date().toISOString(),
      service: "veneziabyme-api",
      region: process.env.AWS_REGION ?? "local"
    } as const;
  }
}
