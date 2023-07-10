'use client';

import type { ChartOptions } from 'chart.js';
import 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        color: 'rgba(16, 24, 39, 0.15)',
        drawTicks: false,
      },
      ticks: { precision: 0, padding: 10, color: 'rgba(16, 24, 39, 0.75)' },
      beginAtZero: true,
      min: 0,
    },
    y: {
      grid: {
        color: 'rgba(16, 24, 39, 0.15)',
        drawTicks: false,
      },
      ticks: { precision: 0, padding: 10, color: 'rgba(16, 24, 39, 0.75)' },
      beginAtZero: true,
      min: 0,
      max: 100,
    },
  },
} as ChartOptions<'line'>;

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function getData(labels) {
  return labels.map(() => Math.random() * (90 - 10) + 10);
}

export default function LineChart() {
  const [dataset, setDataset] = useState(getData(labels));

  useEffect(() => {
    setTimeout(function () {
      setDataset(getData(labels));
    }, 3000);
    console.log(dataset);
    return () => {};
  }, [dataset]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Blue',
        data: dataset,
        spanGaps: false,
        borderColor: '#2563eb',
        backgroundColor: '#2563eb',
      },
      {
        label: 'Teal',
        data: getData(labels),
        spanGaps: false,
        borderColor: '#0d9488',
        backgroundColor: '#0d9488',
      },
    ],
  };

  return (
    <Chart
      type='line'
      options={options}
      data={data}
      height={null}
      width={null}
    />
  );
}
