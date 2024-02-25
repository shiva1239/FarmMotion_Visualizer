// farm.model.ts

export class Farm implements Farm {
  id?: number; // Optional because it will be assigned by the server
  premiseId: string;
  totalAnimal: number;

  constructor() {
    // Initialize default values or leave it empty
    this.id = undefined;
    this.premiseId = '';
    this.totalAnimal = 0;
  }
}
