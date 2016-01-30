import React from 'react';

const Loading = ({ isVisible }) => {
  const transition = { transition: 'opacity 300ms, visbility 300ms' };

  const styles = isVisible ?
    {
      ...transition,
      visbility: 'visible',
      zIndex: 999,
      opacity: 1,
    } :
    {
      ...transition,
      visbility: 'hidden',
      zIndex: -1,
      opacity: 0,
    };

  return (
    <div
      style={ styles }
      className="bg-blue white flex flex-center fixed top-0 left-0 right-0 bottom-0">
      <div
        style={{ justifyContent: 'center' }}
        className="center flex flex-center flex-grow">
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

export default Loading;
