import React, { FC, useEffect, useRef } from 'react';
import Chart, { ChartData } from 'chart.js/auto';

type ChartType = {
  data: ChartData;
  width?: number;
  height?: number;
};

const ChartComponent: FC<ChartType> = ({ data, width = 250, height = 250 }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    if (ctx) {
      chartInstance.current = new Chart(ctx, {
        type: 'radar',
        data,
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return (
    <div
      style={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        margin: 'auto',
      }}
    >
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartComponent;
