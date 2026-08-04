import type { TripResults } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import type { Translations } from '../i18n/translations';

interface ResultsViewProps {
  results: TripResults;
}

function formatINR(value: number): string {
  return value.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  });
}

function formatLiters(value: number): string {
  return `${value.toLocaleString('en-IN', { maximumFractionDigits: 2 })} L`;
}

interface RowConfig {
  labelKey: keyof Translations;
  key: keyof TripResults;
  format: (value: number) => string;
}

const ROWS: RowConfig[] = [
  { labelKey: 'totalFreight', key: 'totalFreight', format: formatINR },
  { labelKey: 'totalDieselConsumptionL', key: 'totalDieselConsumptionL', format: formatLiters },
  { labelKey: 'fuelCost', key: 'fuelCost', format: formatINR },
  { labelKey: 'driverCommission', key: 'driverCommission', format: formatINR },
  { labelKey: 'netRoadExpense', key: 'netRoadExpense', format: formatINR },
  { labelKey: 'fixedOverheads', key: 'fixedOverheads', format: formatINR },
  { labelKey: 'totalExpense', key: 'totalExpense', format: formatINR },
];

export function ResultsView({ results }: ResultsViewProps) {
  const { t } = useLanguage();
  const isProfit = results.grossProfit >= 0;
  return (
    <div className="results">
      <div className="profit-block">
        <span className="profit-label">{isProfit ? t.grossProfit : t.grossLoss}</span>
        <span className={`profit-value ${isProfit ? 'is-profit' : 'is-loss'}`}>
          {formatINR(Math.abs(results.grossProfit))}
        </span>
      </div>
      <dl className="results-list">
        {ROWS.map((row) => (
          <div className="results-row" key={row.key}>
            <dt>{t[row.labelKey]}</dt>
            <dd>{row.format(results[row.key])}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
