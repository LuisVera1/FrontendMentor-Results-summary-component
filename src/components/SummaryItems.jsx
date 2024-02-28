
import './styles.css'

export const SummaryItems = ({ data }) => {

  const Item = ({ fields }) => {
    const { category, icon, score, index } = fields;
    const order = index + 1
    return (<div className={`points points__result${order}`}>
      <div className="points__label-section">
        <img className='points__icon' src={`${icon}`} alt={category} />
        <p className={`points__title title${order}`}>{category}</p>
      </div>

      <p className="points__result">
        <strong className="points__result--strong">{score}</strong> / 100
      </p>
    </div>)
  }

  return (
    <>
      {
        data.map((item, index) =>
        (
          <li key={item.category}>
            <Item fields={{ ...item, index }} />
          </li>
        )
        )
      }
    </>)
}