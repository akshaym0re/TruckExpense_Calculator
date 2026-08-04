import { useState } from 'react';
import { TripColumnForm } from './components/TripColumnForm';
import { ResultsView } from './components/ResultsView';
import { calculateTrip } from './calculations';
import { EMPTY_TRIP_INPUTS, type TripInputs, type TripResults } from './types';
import { useLanguage } from './i18n/LanguageContext';
import './App.css';

function App() {
  const [trip, setTrip] = useState<TripInputs>(EMPTY_TRIP_INPUTS);
  const [results, setResults] = useState<TripResults | null>(null);
  const { language, setLanguage, t } = useLanguage();

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
          <h1 className="brand-title">{t.appTitle}</h1>
          <p className="brand-subtitle">{t.appSubtitle}</p>
        </div>
        <div className="language-toggle" role="group" aria-label="Language">
          <button
            type="button"
            className={language === 'en' ? 'is-active' : ''}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            type="button"
            className={language === 'mr' ? 'is-active' : ''}
            onClick={() => setLanguage('mr')}
          >
            मर
          </button>
        </div>
      </header>
      <div className="content">
        <div className="form-panel">
          <TripColumnForm values={trip} onChange={setTrip} />
        </div>
        <aside className="summary-panel">
          <div className="summary-inner">
            <h2>{t.tripSummary}</h2>
            <button className="calculate-button" onClick={handleCalculate}>
              {t.calculate}
            </button>
            {results ? (
              <ResultsView results={results} />
            ) : (
              <p className="summary-placeholder">{t.placeholder}</p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
