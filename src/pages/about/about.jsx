import { useState, useEffect } from 'react';

export default function About() {
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup prevents duplicate intervals and memory leaks
    return () => clearInterval(interval);
  }, []);

  // Derive hours, minutes, and seconds cleanly during render
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  // Optional: Format with leading zeros (e.g., 01:05:09)
  const format = (num) => String(num).padStart(2, '0');

  return (
    <div className='p-15 text-9xl'>
      {format(h)}:{format(m)}:{format(s)}
    </div>
  );
}
