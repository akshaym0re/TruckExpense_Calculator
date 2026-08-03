export interface TripInputs {
  loadingLocation: string;
  unloadingLocation: string;
  distanceToLoadingKm: number;
  distanceABKm: number;
  approxDays: number;
  tonnage: number;
  ratePerTonne: number;
  mileageKmPerL: number;
  dieselRatePerL: number;
  tollCost: number;
  loadingCharges: number;
  unloadingCharges: number;
  transportCommission: number;
  kataBuiltyChahapani: number;
}

export interface TripResults {
  totalFreight: number;
  totalDieselConsumptionL: number;
  fuelCost: number;
  driverCommission: number;
  netRoadExpense: number;
  fixedOverheads: number;
  totalExpense: number;
  grossProfit: number;
}

export const EMPTY_TRIP_INPUTS: TripInputs = {
  loadingLocation: '',
  unloadingLocation: '',
  distanceToLoadingKm: 0,
  distanceABKm: 0,
  approxDays: 0,
  tonnage: 0,
  ratePerTonne: 0,
  mileageKmPerL: 0,
  dieselRatePerL: 0,
  tollCost: 0,
  loadingCharges: 0,
  unloadingCharges: 0,
  transportCommission: 0,
  kataBuiltyChahapani: 0,
};
