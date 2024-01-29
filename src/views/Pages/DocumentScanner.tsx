import phone from '../../images/document-scanner.png';

function DocumentScanner() {
  return (
    <section className="main">
      <div className="left">
        <div className="img-container">
          <img className="animation" src={phone} alt="Document Scanner" />
        </div>
      </div>
      <div className="right">
        <h5 className='title'>Document Scanner</h5>
        <h2 className='desc'>Scan with Ease</h2>
        <p className='text'>
          Scan any document instantly with your mobile device by just a few
          steps. Save as PDF,JPG,ZIP,TXT and Word format.
        </p>
        <button>Learn More</button>
      </div>
    </section>
  );
}

export default DocumentScanner;
