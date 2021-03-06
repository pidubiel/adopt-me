import React, { useState } from 'react';

const SearchParams = () => {
  // const location = 'Seattle, WA';
  const [location, setLocation] = useState('Seattle, WA');
  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="location" onChange={e => setLocation(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
