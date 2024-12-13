export interface Element {
    atomicNumber: number;
    symbol: string;
    name: string;
    atomicMass: string;
    category: string;
    block: string;
    electronConfiguration: string;
    group: number;
    period: number;
    phase: string;
    density: number;
    discoveredBy?: string;
    yearDiscovered?: number;
    meltingPoint?: number;
    boilingPoint?: number;
    electronegativity?: number;
  }