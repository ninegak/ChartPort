new Chart(document.getElementById("personal"), {
  type: 'bar',
  data: {
    labels: ["Self-Efficacy", "Responsability", "Consciousness", "Agreeableness", "Gregariousness"],
    datasets: [
      {
        label: "",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [18, 12,18,19,9,0]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'My personality'
    }
  }
});

