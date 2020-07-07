import React from 'react';
import { render, screen } from '@testing-library/react';
import {table1Data} from '../dummyData';
import TableCard from './tableCard';

test('renders table title', () => {
  const { getByText } = render(<TableCard cardTitle="Test Title" tableData={table1Data}/>);
  const tableTitle = getByText(/Test Title/i);
  
  expect(tableTitle).toHaveTextContent("Test Title");
});

test('renders table rows', () => {
  const { getAllByTestId } = render(<TableCard cardTitle="Test Title" tableData={table1Data}/>);
  const rows = getAllByTestId("body-row");
  
  expect(rows).toHaveLength(5)
});

