import phone from '../../images/sign-stamp.png';

import signature from '../../images/signature.png';
import complated from '../../images/complated.png';

function SignStamp() {
  return (
    <section className="main">
      <div className="left">
        <div className="img-container">
          <img className="animation" src={phone} alt="Sign Stamp" />
          <div className="signature">
            <img src={signature} />
          </div>
          <div className="complated">
            <img src={complated} />
          </div>
        </div>
      </div>
      <div className="right">
        <h5 className="title">Sign & Stamp</h5>
        <h2 className="desc">One-Tap Focus</h2>
        <p className="text">
          Draw, scan or import your signature and stamp with a simple touch.
          Sign and stamp any document with just a single tap!
        </p>
        <button>Learn More</button>
      </div>
    </section>
  );
}

export default SignStamp;
