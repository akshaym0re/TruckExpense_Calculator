import { useState } from 'react';
import { TripColumnForm } from './components/TripColumnForm';
import { ResultsView } from './components/ResultsView';
import { calculateTrip } from './calculations';
import { EMPTY_TRIP_INPUTS, type TripInputs, type TripResults } from './types';
import './App.css';

function App() {
  const [trip, setTrip] = useState<TripInputs>(EMPTY_TRIP_INPUTS);
  const [results, setResults] = useState<TripResults | null>(null);

  function handleCalculate() {
    setResults(calculateTrip(trip));
  }

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand-badge">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <rect x="1" y="4" width="14" height="10" rx="1" />
            <path d="M15 8h4.5a1 1 0 01.8.4l2.2 2.93a1 1 0 01.2.6V14a1 1 0 01-1 1H15V8z" />
            <circle cx="6" cy="17" r="2.3" />
            <circle cx="18" cy="17" r="2.3" />
          </svg>
        </div>
        <div className="brand-text">
          <h1 className="brand-title">Truck Expense Calculator</h1>
          <p className="brand-subtitle">Estimate diesel, tolls, and other trip costs to see your real profit</p>
        </div>
      </header>
      <div className="content">
        <div className="form-panel">
          <TripColumnForm values={trip} onChange={setTrip} />
        </div>
        <aside className="summary-panel">
          <div className="summary-inner">
            <h2>Trip Summary</h2>
            <button className="calculate-button" onClick={handleCalculate}>
              Calculate
            </button>
            {results ? (
              <ResultsView results={results} />
            ) : (
              <p className="summary-placeholder">
                Fill in the trip details and hit Calculate to see the cost breakdown and profit.
              </p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
