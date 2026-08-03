import type { TripResults } from '../types';

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
  label: string;
  key: keyof TripResults;
  format: (value: number) => string;
}

const ROWS: RowConfig[] = [
  { label: 'Total Freight', key: 'totalFreight', format: formatINR },
  { label: 'Diesel Consumption', key: 'totalDieselConsumptionL', format: formatLiters },
  { label: 'Fuel Cost', key: 'fuelCost', format: formatINR },
  { label: 'Driver Commission', key: 'driverCommission', format: formatINR },
  { label: 'Net Road Expense', key: 'netRoadExpense', format: formatINR },
  { label: 'Fixed Overheads', key: 'fixedOverheads', format: formatINR },
  { label: 'Total Expense', key: 'totalExpense', format: formatINR },
];

export function ResultsView({ results }: ResultsViewProps) {
  const isProfit = results.grossProfit >= 0;
  return (
    <div className="results">
      <div className="profit-block">
        <span className="profit-label">{isProfit ? 'Gross Profit / Trip' : 'Gross Loss / Trip'}</span>
        <span className={`profit-value ${isProfit ? 'is-profit' : 'is-loss'}`}>
          {formatINR(Math.abs(results.grossProfit))}
        </span>
      </div>
      <dl className="results-list">
        {ROWS.map((row) => (
          <div className="results-row" key={row.key}>
            <dt>{row.label}</dt>
            <dd>{row.format(results[row.key])}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
