import { useEffect, useState } from 'react';

const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const handleDown = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };

  const handleUp = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleDown);
    window.addEventListener('keyup', handleUp);

    return () => {
      window.removeEventListener('keydown', handleDown);
      window.removeEventListener('keyup', handleUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return keyPressed;
};

export default useKeyPress;
