import type { TripInputs, TripResults } from './types';

const FIXED_OVERHEAD_PER_DAY = 1200;
const DRIVER_COMMISSION_RATE = 0.1;

export function calculateTrip(inputs: TripInputs): TripResults {
  const totalFreight = inputs.tonnage * inputs.ratePerTonne;

  const totalDieselConsumptionL =
    inputs.mileageKmPerL > 0
      ? (inputs.distanceToLoadingKm + inputs.distanceABKm) / inputs.mileageKmPerL
      : 0;

  const fuelCost = totalDieselConsumptionL * inputs.dieselRatePerL;

  const driverCommission = DRIVER_COMMISSION_RATE * totalFreight;

  // Replicates a quirk in the source spreadsheet: raw diesel liters are added
  // directly into this rupee total alongside Fuel Cost, which already prices
  // those same liters. Kept intentionally to match the sheet.
  const netRoadExpense =
    totalDieselConsumptionL +
    fuelCost +
    inputs.tollCost +
    driverCommission +
    inputs.loadingCharges +
    inputs.unloadingCharges +
    inputs.transportCommission +
    inputs.kataBuiltyChahapani;

  const fixedOverheads = FIXED_OVERHEAD_PER_DAY * inputs.approxDays;

  const totalExpense = fixedOverheads + netRoadExpense;

  const grossProfit = totalFreight - totalExpense;

  return {
    totalFreight,
    totalDieselConsumptionL,
    fuelCost,
    driverCommission,
    netRoadExpense,
    fixedOverheads,
    totalExpense,
    grossProfit,
  };
}
