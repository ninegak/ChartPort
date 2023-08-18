new Chart(document.getElementById("skill-now"), {
    type: 'bar',
    data: {
      labels: ["C++", "JavaScript", "Python", "C#", "html/css", "Java"],
      datasets: [
        {
          label: "",
          backgroundColor: ["#ea124f","#3cba9f","#e8c3b9","#c45850","#8e5ea2","#3e95cd"],
          data: [18, 12,16,8,14,8,7,0,20]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'My Skills'
      }
    }
  });
  
  