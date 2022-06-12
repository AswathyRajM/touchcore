function chart() {
  var ctx = document.getElementById("chart").getContext("2d");
  var labels = ["30", "35", "40", "45", "50", "55", "60"];
  var labelsRes = [
    "30",
    "",
    "35",
    "",
    "40",
    "",
    "45",
    "",
    "50",
    "",
    "55",
    "",
    "60",
  ];

  const image = new Image();
  image.src = "/assets/images/tick-1.png";

  let labelSet = window.innerWidth > 1000 ? labelsRes : labels;

  const data = {
    labels: labelSet,
    datasets: [
      {
        barThickness: 20,
        label: "Employer",
        backgroundColor: "#1D42A4",
        data: [57, 62, 76, 82, 88, 91, 95, 100, 105],
      },
      {
        barThickness: 20,
        label: "Employee",
        backgroundColor: "#576AFA",
        data: [55, 60, 78, 84, 87, 91, 97, 100, 104],
      },
      {
        barThickness: 20,
        label: "Total Interest",
        backgroundColor: "#86AEFB",
        data: [60, 65, 80, 87, 91, 95, 100, 105, 109],
      },
    ],
  };

  const dataRes = {
    labels: labelSet,
    datasets: [
      {
        barThickness: 20,
        label: "Employer",
        backgroundColor: "#1D42A4",
        data: [
          57, 59, 62, 65, 76, 79, 82, 85, 88, 89, 91, 94, 95, 100, 102, 105,
        ],
      },
      {
        barThickness: 20,
        label: "Employee",
        backgroundColor: "#576AFA",
        data: [
          55, 57, 60, 66, 78, 79, 84, 84, 87, 89, 91, 95, 97, 100, 103, 104,
        ],
      },
      {
        barThickness: 20,
        label: "Total Interest",
        backgroundColor: "#86AEFB",
        data: [
          60, 60, 65, 70, 80, 85, 87, 89, 91, 93, 95, 100, 103, 105, 105, 109,
        ],
      },
    ],
  };

  let dataSet = window.innerWidth > 1000 ? dataRes : data;

  const config = {
    tooltips: {
      displayColors: true,
      callbacks: {
        mode: "x",
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },

      y: {
        stacked: true,
        min: 50,
        max: 300,
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: false,
          stepSize: 100,
          callback: function (value) {
            return "$" + value;
          },
        },
      },
    },
    responsive: true,
    // cutout
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // barImage Plugin
  const barImage = {
    id: "barImage",
    afterDraw: (chart) => {
      const { ctx } = chart;
      let xAxis = chart.scales.x;
      let yAxis = chart.scales.y;
      const length = xAxis.ticks.length;
      let sum = chart.config.data.datasets.reduce(
        (sum, ds) => sum + ds.data[length - 1],
        0
      );
      let x = xAxis.getPixelForTick(length - 1);
      let y = yAxis.getPixelForValue(sum);
      ctx.drawImage(image, x, y, 15, 15);
    },
  };

  new Chart(ctx, {
    type: "bar",
    data: dataSet,
    options: config,
    plugins: [barImage],
  });
}

window.onload = chart();
