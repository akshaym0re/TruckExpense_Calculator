import type { TripInputs } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import type { Translations } from '../i18n/translations';

interface FieldConfig {
  key: keyof TripInputs;
  labelKey: keyof Translations;
  type: 'text' | 'number';
  unit?: string | keyof Translations;
}

interface SectionConfig {
  titleKey: keyof Translations;
  fields: FieldConfig[];
}

const SECTIONS: SectionConfig[] = [
  {
    titleKey: 'tripDetails',
    fields: [
      { key: 'loadingLocation', labelKey: 'loadingLocation', type: 'text' },
      { key: 'unloadingLocation', labelKey: 'unloadingLocation', type: 'text' },
      { key: 'distanceToLoadingKm', labelKey: 'distanceToLoadingKm', type: 'number', unit: 'km' },
      { key: 'distanceABKm', labelKey: 'distanceABKm', type: 'number', unit: 'km' },
      { key: 'approxDays', labelKey: 'approxDays', type: 'number', unit: 'daysUnit' },
    ],
  },
  {
    titleKey: 'freight',
    fields: [
      { key: 'tonnage', labelKey: 'tonnage', type: 'number', unit: 't' },
      { key: 'ratePerTonne', labelKey: 'ratePerTonne', type: 'number', unit: '₹' },
    ],
  },
  {
    titleKey: 'fuel',
    fields: [
      { key: 'mileageKmPerL', labelKey: 'mileageKmPerL', type: 'number', unit: 'km/l' },
      { key: 'dieselRatePerL', labelKey: 'dieselRatePerL', type: 'number', unit: '₹/l' },
    ],
  },
  {
    titleKey: 'otherCharges',
    fields: [
      { key: 'tollCost', labelKey: 'tollCost', type: 'number', unit: '₹' },
      { key: 'loadingCharges', labelKey: 'loadingCharges', type: 'number', unit: '₹' },
      { key: 'unloadingCharges', labelKey: 'unloadingCharges', type: 'number', unit: '₹' },
      { key: 'transportCommission', labelKey: 'transportCommission', type: 'number', unit: '₹' },
      { key: 'kataBuiltyChahapani', labelKey: 'kataBuiltyChahapani', type: 'number', unit: '₹' },
    ],
  },
];

const UNIT_KEYS = new Set<string>(['daysUnit']);

interface TripColumnFormProps {
  values: TripInputs;
  onChange: (next: TripInputs) => void;
}

export function TripColumnForm({ values, onChange }: TripColumnFormProps) {
  const { t } = useLanguage();

  function handleFieldChange(field: FieldConfig, rawValue: string) {
    onChange({
      ...values,
      [field.key]: field.type === 'number' ? Number(rawValue) || 0 : rawValue,
    });
  }

  function resolveUnit(unit?: string | keyof Translations): string | undefined {
    if (!unit) return undefined;
    return UNIT_KEYS.has(unit) ? t[unit as keyof Translations] : unit;
  }

  return (
    <div className="trip-form">
      {SECTIONS.map((section) => (
        <section className="form-section" key={section.titleKey}>
          <h3 className="section-title">{t[section.titleKey]}</h3>
          <div className="field-grid">
            {section.fields.map((field) => (
              <label key={field.key} className="trip-field">
                <span>{t[field.labelKey]}</span>
                <div className="input-wrap">
                  <input
                    type={field.type}
                    inputMode={field.type === 'number' ? 'decimal' : undefined}
                    value={values[field.key]}
                    onChange={(e) => handleFieldChange(field, e.target.value)}
                  />
                  {field.unit && <span className="input-unit">{resolveUnit(field.unit)}</span>}
                </div>
              </label>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
