"use client";
import { useEffect, useRef } from "react";
import { Chart, DoughnutController, ArcElement, CategoryScale } from "chart.js";

Chart.register(DoughnutController, ArcElement, CategoryScale);

function CategoriesChart() {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    if (chartRef && chartRef.current) {
      var ctx = chartRef.current.getContext("2d");
      myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Accepted", "Pending", "Rejected", "Retail"],
          datasets: [
            {
              data: [
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
              ],

              borderColor: [
                "rgb(75, 192, 192)",
                "rgb(255, 205, 86)",
                "rgb(255, 99, 132)",
                "rgb(43,220,232)",
              ],
              backgroundColor: [
                "rgb(75, 192, 192 )",
                "rgb(255, 205, 86)",
                "rgb(255, 99, 132)",
                "rgb(43,220,232)",
              ],
              borderWidth: 2,
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                display: false,
              },
            ],
            yAxes: [
              {
                display: false,
              },
            ],
          },
        },
      });
    }

    // when component unmounts
    return () => {
      if (myChart !== null) {
        myChart.destroy();
      }
    };
  }, []);

  return (
    <div className="h-64 bg-purple-2">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default CategoriesChart;
