import React, { useEffect, useState } from 'react';

const FadeOut: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newOpacity = Math.max(1 - scrollTop / 300, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{ opacity }}
      className='transition-opacity duration-300 ease-out'
    >
      {children}
    </div>
  );
};

export default FadeOut;
