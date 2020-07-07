import React from 'react';
import { render } from '@testing-library/react';
import {chart1Data} from '../dummyData';
import ChartCard from './chartCard';

test('renders chart title and subtitle', () => {
  const { getByTestId } = render( <ChartCard chartTitle={chart1Data.chartTitle} chartSubtitle={chart1Data.chartSubtitle} chartData={chart1Data.chartData}/>);
  const title  = getByTestId("card-chart-title");
  const subtitle  = getByTestId("card-chart-subtitle");
  
  expect(title).toHaveTextContent(chart1Data.chartTitle);
  expect(subtitle).toHaveTextContent(chart1Data.chartSubtitle);
});

test('renders chart total', () => {
  const { getByTestId } = render( <ChartCard chartTitle={chart1Data.chartTitle} chartSubtitle={chart1Data.chartSubtitle} chartData={chart1Data.chartData}/>);
  const chart  = getByTestId("chart-total");

  let total = 0;
  for (let sectionData of chart1Data.chartData) {
    total += sectionData.data;
  }
  
  expect(chart).toHaveTextContent(total);
});
