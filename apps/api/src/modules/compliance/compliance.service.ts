import { Injectable } from "@nestjs/common";

type ComplianceStatus = {
  country: "AR" | "CL" | "BR";
  controller: string;
  status: "pending" | "in-progress" | "ready";
  nextCheck: string;
  notes: string;
};

@Injectable()
export class ComplianceService {
  private readonly statuses: ComplianceStatus[] = [
    {
      country: "AR",
      controller: "ARCA RG 5647/2025",
      status: "in-progress",
      nextCheck: "2025-11-15",
      notes: "Homologación Epson/Hasar en pruebas con AFIP"
    },
    {
      country: "CL",
      controller: "SII Boleta electrónica",
      status: "pending",
      nextCheck: "2025-10-30",
      notes: "Carga de checklists Resolución Exenta 12/2025"
    },
    {
      country: "BR",
      controller: "SEFAZ-SP SAT → NFC-e",
      status: "in-progress",
      nextCheck: "2025-12-05",
      notes: "Validación contingencia SVC-RS y certificados A1"
    }
  ];

  getStatus() {
    return this.statuses;
  }
}
