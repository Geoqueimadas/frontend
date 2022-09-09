var xValues = [
    'Janeiro', 
    'Fevereiro', 
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [4030,2865,5213,2842,2963,7258,13394,51935,53234,25613,20585,7700],
      label: 2019,
      lineTension: 0,
      backgroundColor: "red",
      borderColor: "#f704046b",
      fill: false
    }, { 
      data: [2866,2657,3880,4117,4002,7109,15804,50694,69329,41468,13463,7408],
      label: 2020,
      lineTension: 0,
      backgroundColor: "green",
      borderColor: "#04f7106b",
      fill: false
    }, { 
      data: [2237,2187,2501,2548,5288,7470,15985,51711,49829,28342,11596,4387],
      label: 2021,
      lineTension: 0,
      backgroundColor: "blue",
      borderColor: "#0428f76b",
      fill: false
    }]
  },
  options: {
    title: {
        display: true,
        text: 'Comparação do total de focos de fogo ativo detectados pelo satélite de referência em cada mês, no período de 2019 até 2021'
    },
    legend: {display: true},
    scales: {
      yAxes: [{ticks: {min: 0, max:100000}}],
    },
  }
  
});