import { ChildPageWithProps } from '../Main';

import DocumentScanner from './DocumentScanner';
import AdvancedFilter from './AdvancedFilter';
import BatchScanning from './BatchScanning';
import ExportShare from './ExportShare';
import SignStamp from './SignStamp';

type Props = ChildPageWithProps;

function Pages({ page }: Props) {
  switch (page) {
    case 'document-scanner':
      return <DocumentScanner />;

    case 'advanced-filters':
      return <AdvancedFilter />;

    case 'batch-scannig':
      return <BatchScanning />;

    case 'export-share':
      return <ExportShare />;

    case 'sign-stamp':
      return <SignStamp />;

    default:
      return <>No Page</>;
  }
}

export default Pages;
