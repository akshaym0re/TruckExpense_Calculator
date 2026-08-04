export type Language = 'en' | 'mr';

export interface Translations {
  appTitle: string;
  appSubtitle: string;
  tripSummary: string;
  calculate: string;
  placeholder: string;

  tripDetails: string;
  freight: string;
  fuel: string;
  otherCharges: string;

  loadingLocation: string;
  unloadingLocation: string;
  distanceToLoadingKm: string;
  distanceABKm: string;
  approxDays: string;
  tonnage: string;
  ratePerTonne: string;
  mileageKmPerL: string;
  dieselRatePerL: string;
  tollCost: string;
  loadingCharges: string;
  unloadingCharges: string;
  transportCommission: string;
  kataBuiltyChahapani: string;
  daysUnit: string;

  totalFreight: string;
  totalDieselConsumptionL: string;
  fuelCost: string;
  driverCommission: string;
  netRoadExpense: string;
  fixedOverheads: string;
  totalExpense: string;
  grossProfit: string;
  grossLoss: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    appTitle: 'Truck Expense Calculator',
    appSubtitle: 'Estimate diesel, tolls, and other trip costs to see your real profit',
    tripSummary: 'Trip Summary',
    calculate: 'Calculate',
    placeholder: 'Fill in the trip details and hit Calculate to see the cost breakdown and profit.',

    tripDetails: 'Trip Details',
    freight: 'Freight',
    fuel: 'Fuel',
    otherCharges: 'Other Charges',

    loadingLocation: 'Loading Location',
    unloadingLocation: 'Unloading Location',
    distanceToLoadingKm: 'Distance to Loading Point',
    distanceABKm: 'Distance A → B',
    approxDays: 'Approx. Days to Complete',
    tonnage: 'Tonnage of Vehicle',
    ratePerTonne: 'Rate per Tonne',
    mileageKmPerL: 'Mileage of Truck',
    dieselRatePerL: 'Diesel Rate',
    tollCost: 'Toll Cost',
    loadingCharges: 'Loading Charges',
    unloadingCharges: 'Unloading Charges',
    transportCommission: 'Transport Commission (if any)',
    kataBuiltyChahapani: 'Kata, Builty, Chahapani',
    daysUnit: 'days',

    totalFreight: 'Total Freight',
    totalDieselConsumptionL: 'Diesel Consumption',
    fuelCost: 'Fuel Cost',
    driverCommission: 'Driver Commission',
    netRoadExpense: 'Net Road Expense',
    fixedOverheads: 'Fixed Overheads',
    totalExpense: 'Total Expense',
    grossProfit: 'Gross Profit / Trip',
    grossLoss: 'Gross Loss / Trip',
  },
  mr: {
    appTitle: 'ट्रक खर्च कॅल्क्युलेटर',
    appSubtitle: 'डिझेल, टोल आणि इतर खर्चाचा अंदाज घेऊन तुमचा खरा नफा पहा',
    tripSummary: 'ट्रिप सारांश',
    calculate: 'गणना करा',
    placeholder: "ट्रिपची माहिती भरा आणि खर्च व नफा पाहण्यासाठी 'गणना करा' दाबा.",

    tripDetails: 'ट्रिप तपशील',
    freight: 'भाडे',
    fuel: 'इंधन',
    otherCharges: 'इतर खर्च',

    loadingLocation: 'लोडिंग ठिकाण',
    unloadingLocation: 'अनलोडिंग ठिकाण',
    distanceToLoadingKm: 'लोडिंग पॉईंटपर्यंतचे अंतर',
    distanceABKm: 'अंतर A → B',
    approxDays: 'अंदाजे पूर्ण होण्याचे दिवस',
    tonnage: 'वाहनाची टनेज',
    ratePerTonne: 'प्रति टन दर',
    mileageKmPerL: 'ट्रकचे मायलेज',
    dieselRatePerL: 'डिझेल दर',
    tollCost: 'टोल खर्च',
    loadingCharges: 'लोडिंग चार्जेस',
    unloadingCharges: 'अनलोडिंग चार्जेस',
    transportCommission: 'ट्रान्सपोर्ट कमिशन (असल्यास)',
    kataBuiltyChahapani: 'काटा, बिल्टी, चहापाणी',
    daysUnit: 'दिवस',

    totalFreight: 'एकूण भाडे',
    totalDieselConsumptionL: 'डिझेल वापर',
    fuelCost: 'इंधन खर्च',
    driverCommission: 'ड्रायव्हर कमिशन',
    netRoadExpense: 'निव्वळ रस्ता खर्च',
    fixedOverheads: 'स्थिर खर्च',
    totalExpense: 'एकूण खर्च',
    grossProfit: 'एकूण नफा / ट्रिप',
    grossLoss: 'एकूण तोटा / ट्रिप',
  },
};
