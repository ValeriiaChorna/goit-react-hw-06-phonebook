import React from 'react';
import withTheme from '../hoc/withTheme';

function Filter({ value, onChangeFilter, theme }) {
  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <input
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

export default withTheme(Filter);
