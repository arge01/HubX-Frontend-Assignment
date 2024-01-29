import { useEffect, useState } from 'react';

import phone from '../../images/batch-scanning.png';

import f1 from '../../images/Fit-1.png';
import f2 from '../../images/Fit-2.png';
import f3 from '../../images/Fit-3.png';

function BatchScanning() {
  const [active, setactive] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => setactive(true), 1200);
  }, []);
  return (
    <section className="main">
      <div className="left">
        <div className="img-container">
          <img className="animation" src={phone} alt="Batch Scanning" />
          {active && (
            <>
              <img className="fit fit-1" src={f1} />
              <img className="fit fit-2" src={f2} />
              <img className="fit fit-3" src={f3} />
            </>
          )}
        </div>
      </div>
      <div className="right">
        <h5 className="title">Batch Scanning</h5>
        <h2 className="desc">Multiple Page Scan</h2>
        <p className="text">
          Scan multiple pages or documents in multiple-scanning mode. Batch all
          scans as a single document.
        </p>
        <button>Learn More</button>
      </div>
    </section>
  );
}

export default BatchScanning;
