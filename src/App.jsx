import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];
const Good = ({ good, selectedGood, select }) => (
  <tr
    data-cy="Good"
    className={
      good === selectedGood ? 'has-background-success-light' : 'is-vcentered'
    }
  >
    <td>
      <button
        data-cy={good === selectedGood ? 'RemoveButton' : 'AddButton'}
        type="button"
        className={`button ${good === selectedGood ? 'is-info' : ''}`}
        onClick={() => select(good)}
      >
        {good === selectedGood ? '-' : '+'}
      </button>
    </td>

    <td data-cy="GoodTitle">{good}</td>
  </tr>
);

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const clearSelectedGood = () => setSelectedGood('');
  const select = good => {
    if (selectedGood === good) {
      setSelectedGood('');
    } else {
      setSelectedGood(good);
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
            {`${selectedGood} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={clearSelectedGood}
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <Good good={good} selectedGood={selectedGood} select={select} />
          ))}
        </tbody>
      </table>
    </main>
  );
};
