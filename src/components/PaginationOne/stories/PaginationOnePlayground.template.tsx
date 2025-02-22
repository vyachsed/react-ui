import * as React from 'react';
import { PaginationOne } from '@admiral-ds/react-ui';
import type { PaginationOneProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const PaginationOnePlaygroundTemplate = (args: PaginationOneProps) => {
  const [pageSize, setPageSize] = React.useState(8);
  const [page, setPage] = React.useState(1);
  const pageSizes = [8, 20, 50, 100, 200];
  const totalElements = args.totalItems || 100;

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <PaginationOne
        {...args}
        onChange={({ page, pageSize }) => {
          setPage(page);
          setPageSize(pageSize);
        }}
        page={page}
        pageSize={pageSize}
        totalItems={totalElements}
        pageSizes={pageSizes}
        data-dropdown-container-id="pagination-with-dropdown"
        data-dropdown-container-test-id="pagination-test-id-with-dropdown"
        className="pagination-class-name"
        pageSizeDropContainerStyle={{ dropContainerClassName: 'pageSizeDropContainerClass' }}
        pageNumberDropContainerStyle={{ dropContainerClassName: 'pageNumberDropContainerClass' }}
      />
    </ThemeProvider>
  );
};
