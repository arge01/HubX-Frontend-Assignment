import { ChildPageWithProps } from '../views/Main';

import { ReactSVG } from 'react-svg';

import documentScanner from './document-scanner.svg';
import signStamp from './sign-stamp.svg';
import bacthScanning from './batch-scanning.svg';
import advancedFilters from './advanced-filters.svg';
import exportShare from './export-share.svg';

type Props = {
  icon: ChildPageWithProps['icon'];
};

function ButtonIcon({ icon }: Props) {
  switch (icon) {
    case 'document-scanner':
      return <ReactSVG src={documentScanner} />;

    case 'sign-stamp':
      return <ReactSVG src={signStamp} />;

    case 'batch-scannig':
      return <ReactSVG src={bacthScanning} />;

    case 'advanced-filters':
      return <ReactSVG src={advancedFilters} />;

    case 'export-share':
      return <ReactSVG src={exportShare} />;

    default:
      return <></>;
  }
}

export default ButtonIcon;
