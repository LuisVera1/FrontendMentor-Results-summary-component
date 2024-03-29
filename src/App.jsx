import { SummaryItems } from './components/SummaryItems'
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState([])

  const getData = async () => {
    const resp = await fetch('/data.json')
    const data = await resp.json()
    setData(data)
  }

  useEffect(() => {
    getData();
  }, [])

  const sum = data.reduce((acc, item) => acc + item.score, 0);
  const mean = Math.round(sum / data.length) || 0;

  return (
    <>
      <main>
        <section className="card">
          {/* Score */}
          <div className="card__score">
            <h3 className="score__title">Your Result</h3>

            <div className="score__circle">
              <h1 className="circle__score">{mean}</h1>
              <p className="circle__total">of 100</p>
            </div>

            <div className='score__category-section'>
              <h2 className="score__classification">Great</h2>
              <p className="score__description">
                Your performance exceed 65% of the people conducting the test
                here!
              </p>
            </div>
          </div>

          {/* Summary */}
          <div className="card__summary">
            <h3 className="summary__title">Summary</h3>

            <ul className="summary__points-section">
              <SummaryItems data={data} />
            </ul>

            <a className="summary__continue" href="#">
              Contiue
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
