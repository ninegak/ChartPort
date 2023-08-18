var xValues = ["Money", "Car", "chicks", "Foods", "Depression"];
var yValues = [100, 80, 60, 30, 0];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("want", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "This is all i want in life"
    }
  }
});
