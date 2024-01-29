import { useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import Pages from './Pages';
import ButtonGroup from './ButtonGroup';

export type ChildPageWithProps = React.PropsWithChildren<{
  text?:
    | 'Document Scanner'
    | 'Sign Stamp'
    | 'Batch Scannig'
    | 'Advanced Filters'
    | 'Expot Share';
  icon?:
    | 'document-scanner'
    | 'sign-stamp'
    | 'batch-scannig'
    | 'advanced-filters'
    | 'export-share';
  page:
    | 'document-scanner'
    | 'sign-stamp'
    | 'batch-scannig'
    | 'advanced-filters'
    | 'export-share';
  setPage: React.Dispatch<React.SetStateAction<ChildPageWithProps['page']>>;
}>;

export const buttonContainer: Array<
  React.PropsWithChildren<{
    text: ChildPageWithProps['text'];
    icon: ChildPageWithProps['page'];
    page: ChildPageWithProps['page'];
  }>
> = [
  {
    text: 'Document Scanner',
    icon: 'document-scanner',
    page: 'document-scanner',
  },
  {
    text: 'Sign Stamp',
    icon: 'sign-stamp',
    page: 'sign-stamp',
  },
  {
    text: 'Batch Scannig',
    icon: 'batch-scannig',
    page: 'batch-scannig',
  },
  {
    text: 'Advanced Filters',
    icon: 'advanced-filters',
    page: 'advanced-filters',
  },
  {
    text: 'Expot Share',
    icon: 'export-share',
    page: 'export-share',
  },
];

function Main() {
  const [page, setPage] =
    useState<ChildPageWithProps['page']>('document-scanner');

  return (
    <Container>
      <Row className="align-items-center min-vh-100">
        <Row className="w-100 flex-column">
          <Col>
            <Row className="pages">
              <Pages page={page} setPage={setPage} />
            </Row>
          </Col>
          <Col>
            <Row className="button-group">
              <ButtonGroup page={page} setPage={setPage} />
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Main;
