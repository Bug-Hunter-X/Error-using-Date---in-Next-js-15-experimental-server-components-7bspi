```javascript
// pages/about.js
import { useEffect, useState } from 'react';

export default function About() {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      {date && <p>Current date and time: {date.toLocaleString()}</p>}
    </div>
  );
}
```