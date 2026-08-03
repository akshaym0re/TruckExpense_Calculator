import type { TripInputs } from '../types';

interface FieldConfig {
  key: keyof TripInputs;
  label: string;
  type: 'text' | 'number';
  unit?: string;
}

interface SectionConfig {
  title: string;
  fields: FieldConfig[];
}

const SECTIONS: SectionConfig[] = [
  {
    title: 'Trip Details',
    fields: [
      { key: 'loadingLocation', label: 'Loading Location', type: 'text' },
      { key: 'unloadingLocation', label: 'Unloading Location', type: 'text' },
      { key: 'distanceToLoadingKm', label: 'Distance to Loading Point', type: 'number', unit: 'km' },
      { key: 'distanceABKm', label: 'Distance A → B', type: 'number', unit: 'km' },
      { key: 'approxDays', label: 'Approx. Days to Complete', type: 'number', unit: 'days' },
    ],
  },
  {
    title: 'Freight',
    fields: [
      { key: 'tonnage', label: 'Tonnage of Vehicle', type: 'number', unit: 't' },
      { key: 'ratePerTonne', label: 'Rate per Tonne', type: 'number', unit: '₹' },
    ],
  },
  {
    title: 'Fuel',
    fields: [
      { key: 'mileageKmPerL', label: 'Mileage of Truck', type: 'number', unit: 'km/l' },
      { key: 'dieselRatePerL', label: 'Diesel Rate', type: 'number', unit: '₹/l' },
    ],
  },
  {
    title: 'Other Charges',
    fields: [
      { key: 'tollCost', label: 'Toll Cost', type: 'number', unit: '₹' },
      { key: 'loadingCharges', label: 'Loading Charges', type: 'number', unit: '₹' },
      { key: 'unloadingCharges', label: 'Unloading Charges', type: 'number', unit: '₹' },
      { key: 'transportCommission', label: 'Transport Commission (if any)', type: 'number', unit: '₹' },
      { key: 'kataBuiltyChahapani', label: 'Kata, Builty, Chahapani', type: 'number', unit: '₹' },
    ],
  },
];

interface TripColumnFormProps {
  values: TripInputs;
  onChange: (next: TripInputs) => void;
}

export function TripColumnForm({ values, onChange }: TripColumnFormProps) {
  function handleFieldChange(field: FieldConfig, rawValue: string) {
    onChange({
      ...values,
      [field.key]: field.type === 'number' ? Number(rawValue) || 0 : rawValue,
    });
  }

  return (
    <div className="trip-form">
      {SECTIONS.map((section) => (
        <section className="form-section" key={section.title}>
          <h3 className="section-title">{section.title}</h3>
          <div className="field-grid">
            {section.fields.map((field) => (
              <label key={field.key} className="trip-field">
                <span>{field.label}</span>
                <div className="input-wrap">
                  <input
                    type={field.type}
                    inputMode={field.type === 'number' ? 'decimal' : undefined}
                    value={values[field.key]}
                    onChange={(e) => handleFieldChange(field, e.target.value)}
                  />
                  {field.unit && <span className="input-unit">{field.unit}</span>}
                </div>
              </label>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
