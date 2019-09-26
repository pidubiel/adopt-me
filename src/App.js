import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  // return React.createElement('div', { id: 'something-important' }, [
  //   React.createElement('h1', {}, 'Adopt Me!'),
  //   React.createElement(Pet, {
  //     name: 'Pepper',
  //     animal: 'Bird',
  //     breed: 'Cockatiel'
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Doink',
  //     animal: 'Cat',
  //     breed: 'Mixed'
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Bolt',
  //     animal: 'Dog',
  //     breed: 'Mixed'
  //   })
  // ]);
  return (
    <div>
      <h1 id="something-important">Adopt Me</h1>
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
      <Pet name="Claw" animal="Cat" breed="Persian" />
    </div>
  );
};

render(<App />, document.getElementById('root'));
