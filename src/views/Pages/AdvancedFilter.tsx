import { useEffect, useState } from 'react';

import phone from '../../images/advanced-filter.png';

import leftBar from '../../images/LeftBar.png';
import rightBar from '../../images/RightBar.png';

function AdvancedFilter() {
  const [active, setactive] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => setactive(true), 1200);
  }, []);
  return (
    <section className="main">
      <div className="left">
        <div className="img-container">
          <img className="animation" src={phone} alt="Advanced Filter" />
          {active && (
            <>
              <img className="animation bar left-bar" src={leftBar} />
              <img className="animation bar right-bar" src={rightBar} />
            </>
          )}
        </div>
      </div>
      <div className="right">
        <h5 className="title">Advanced Filters</h5>
        <h2 className="desc">Unique Filters</h2>
        <p className="text">
          Apply advanced filters and enhance quality with various custom made
          filters. Manually edit brightness and contrast by your own choice on
          the custom filters..
        </p>
        <button>Learn More</button>
      </div>
    </section>
  );
}

export default AdvancedFilter;
