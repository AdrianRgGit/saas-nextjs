"use client";
import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { useUserData } from "@/store/userStore";

Chart.register(...registerables);

function Breakdown() {
  const monthly_expenses = useUserData((state) => state.monthly_expenses);
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    if (chartRef && chartRef.current) {
      var ctx = chartRef.current.getContext("2d");
      myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              data: monthly_expenses,

              borderColor: ["#7723FE"],
              backgroundColor: ["#7723FE"],
              borderWidth: 2,
              borderRadius: 10,
            },
          ],
        },
        options: {
          scales: {
            x: {
              grid: {
                color: "rgba(0,0,0,0)",
              },
              display: true,
              categoryPercentage: 0.8, // Espacio total disponible para una categoría
              barPercentage: 0.1, // Espacio que ocupará una barra
            },
            y: {
              grid: {
                color: "rgba(0,0,0,0)",
              },
              display: false,
            },
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
    <>
      <div className="flex w-full flex-col items-center bg-purple-2 p-2 rounded">
        <h2 className="self-start text-2xl ml-2 mt-2">Breakdown</h2>
        <canvas className="max-h-72" ref={chartRef}></canvas>
      </div>
    </>
  );
}

export default Breakdown;
