import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
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
