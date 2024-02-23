export class Movement {
  id?: number; // Optional because it will be assigned by the server
  accountCompany: string = '';
  newMovementReason: string = '';
  newSpecies: string = '';
  newOriginAddress: string = '';
  newOriginCity: string = '';
  newOriginName: string = '';
  newOriginPostalCode: string = '';
  newOriginPremId: string = '';
  newOriginState: string = '';
  newDestinationAddress: string = '';
  newDestinationCity: string = '';
  newDestinationName: string = '';
  newDestinationPostalCode: string = '';
  newDestinationPremId: string = '';
  newDestinationState: string = '';
  originLat: number = 0;
  originLon: number = 0;
  destinationLat: number = 0;
  destinationLon: number = 0;
  newNumItemsMoved: number = 0;
  newShipmentsStartDate: Date = new Date();

  constructor() {
    
  }
}
