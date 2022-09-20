
//SOC
if ($(".dashboard-progress-1").length) {
	var socCircle = $('.dashboard-progress-1').circleProgress({
		value: 0.74,
		size: 125,
		thickness: 7,
		startAngle: Math.PI * 3 / 2,
		fill: {
			gradient: ["#7922e5", "#1579ff"]
		}
	});
}
function UpdateSOCCircle(valuePercent){
	socCircle.circleProgress('value', valuePercent/100);
	document.getElementById("soc-circle").textContent = valuePercent.substring(0, 5) + "%";
}
//SOH
if ($(".dashboard-progress-2").length) {
	var sohCircle = $('.dashboard-progress-2').circleProgress({
		value: 0.90,
		size: 125,
		thickness: 7,
		startAngle: Math.PI * 3 / 2,
		fill: {
			gradient: ["#429321", "#b4ec51"]
		}
	});
}
function UpdateSOHCircle(valuePercent){
	sohCircle.circleProgress('value', valuePercent/100);
	document.getElementById("soh-circle").textContent = valuePercent.substring(0, 5) + "%";
}

//$('.dashboard-progress-1').circleProgress({value: 0.1})
//OCV graph
if ($("#ocv-graph").length) {
	var pageiVewAnalyticDataOCV = {
		labels: [],
		datasets: [{
			label: 'OCV (V)',
			data: [],
			backgroundColor: [
				'rgba(216,247,234, 0.19)',
			],
			borderColor: [
				'#3dd597'
			],
			borderWidth: 2,
			fill: true,
			pointBorderColor: "#fff",
			pointBackgroundColor: "#3dd597",
			pointBorderWidth: 0,
			pointRadius: 0,
		}
			/*,
			{
				label: 'Simulado',
				data: [16, 19, 21, 28, 33.31, 35, 34, 39, 40, 48, 50, 50, 51, 55, 57, 62, 67, 69, 68, 70, 72, 75, 74, 80, 79, 80, 84, 90],
				backgroundColor: [
					'rgba(216,247,234, 0.19)',
				],
				borderColor: [
					'#3dd597'
				],
				borderWidth: 2,
				fill: false,
				pointBorderColor: "#fff",
				pointBackgroundColor: "#0162ff",
				pointBorderWidth: 2,
				pointRadius: 4,
			}*/
		],
	};
	var pageiVewAnalyticOptionsOCV = {
		scales: {
			yAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					display: true,
					drawTicks: false,
					color: '#eef0fa',
					zeroLineColor: 'rgba(90, 113, 208, 0)',
				},
				ticks: {
					beginAtZero: true,
					stepSize: 0.5,
					display: true,
					padding: 10,
				}
			}],
			xAxes: [{
				display: true,
				position: 'bottom',
				gridLines: {
					drawBorder: false,
					display: true,
					drawTicks: false,
				},
				ticks: {
					beginAtZero: true,
					stepSize: 10,
					fontColor: "#a7afb7",
					padding: 10,
				}
			}],
		},
		legend: {
			display: false,
		},
		legendCallback: function (chart) {
			var text = [];
			text.push('<ul class="' + chart.id + '-legend">');
			for (var i = 0; i < chart.data.datasets.length; i++) {
				text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].borderColor[i] + ';"></span><span class="legend-label text-dark">');
				if (chart.data.datasets[i].label) {
					text.push(chart.data.datasets[i].label);
				}
				text.push('</span></li>');
			}
			text.push('</ul>');
			return text.join("");
		},
		elements: {
			point: {
				radius: 1
			},
			line: {
				tension: 0
			}
		},
		tooltips: {
			backgroundColor: 'rgba(2, 171, 254, 1)',
		},
	};
	var OCVGraphCanvas = $("#ocv-graph").get(0).getContext("2d");
	// This will get the first returned node in the jQuery collection.
	var OCVGraph = new Chart(OCVGraphCanvas, {
		type: 'line',
		data: pageiVewAnalyticDataOCV,
		options: pageiVewAnalyticOptionsOCV,
	});
	document.getElementById('pageViewAnalyticLengend').innerHTML = OCVGraph.generateLegend();
}


//SOC graph

if ($("#SOC-graph").length) {
	var pageiVewAnalyticDataSOC = {
		labels: [],
		datasets: [{
			label: 'SOC (%)',
			data: [],
			backgroundColor: [
				'rgba(216,247,234, 0.19)',
			],
			borderColor: [
				'#3dd597'
			],
			borderWidth: 2,
			fill: true,
			pointBorderColor: "#fff",
			pointBackgroundColor: "#3dd597",
			pointBorderWidth: 0,
			pointRadius: 0,
		}
		],
	};
	var pageiVewAnalyticOptionsSOC = {
		scales: {
			yAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					display: true,
					drawTicks: false,
					color: '#eef0fa',
					zeroLineColor: 'rgba(90, 113, 208, 0)',
				},
				ticks: {
					beginAtZero: true,
					stepSize: 10,
					display: true,
					padding: 10,
				}
			}],
			xAxes: [{
				display: true,
				position: 'bottom',
				gridLines: {
					drawBorder: false,
					display: true,
					drawTicks: false,
				},
				ticks: {
					beginAtZero: true,
					stepSize: 10,
					fontColor: "#a7afb7",
					padding: 10,
				}
			}],
		},
		legend: {
			display: false,
		},
		legendCallback: function (chart) {
			var text = [];
			text.push('<ul class="' + chart.id + '-legend">');
			for (var i = 0; i < chart.data.datasets.length; i++) {
				text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].borderColor[i] + ';"></span><span class="legend-label text-dark">');
				if (chart.data.datasets[i].label) {
					text.push(chart.data.datasets[i].label);
				}
				text.push('</span></li>');
			}
			text.push('</ul>');
			return text.join("");
		},
		elements: {
			point: {
				radius: 1
			},
			line: {
				tension: 0
			}
		},
		tooltips: {
			backgroundColor: 'rgba(2, 171, 254, 1)',
		},
	};
	var SOCCanvas = $("#SOC-graph").get(0).getContext("2d");
	// This will get the first returned node in the jQuery collection.
	var SOCGraph = new Chart(SOCCanvas, {
		type: 'line',
		data: pageiVewAnalyticDataSOC,
		options: pageiVewAnalyticOptionsSOC,
	});
	document.getElementById('SOClegend').innerHTML = SOCGraph.generateLegend();
}


// Current graph
if ($("#current-graph").length) {
	var pageiVewAnalyticDataCurrent = {
		labels: [],
		datasets: [{
			label: 'SOC (%)',
			data: [],
			backgroundColor: [
				'rgba(216,247,234, 0.19)',
			],
			borderColor: [
				'#3dd597'
			],
			borderWidth: 2,
			fill: true,
			pointBorderColor: "#fff",
			pointBackgroundColor: "#3dd597",
			pointBorderWidth: 0,
			pointRadius: 0,
		}
		],
	};
	var pageiVewAnalyticOptionsCurrent = {
		scales: {
			yAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					display: true,
					drawTicks: false,
					color: '#eef0fa',
					zeroLineColor: 'rgba(90, 113, 208, 0)',
				},
				ticks: {
					beginAtZero: true,
					stepSize: 0.5,
					display: true,
					padding: 1,
				}
			}],
			xAxes: [{
				display: true,
				position: 'bottom',
				gridLines: {
					drawBorder: false,
					display: true,
					drawTicks: false,
				},
				ticks: {
					beginAtZero: true,
					stepSize: 10,
					fontColor: "#a7afb7",
					padding: 10,
				}
			}],
		},
		legend: {
			display: false,
		},
		legendCallback: function (chart) {
			var text = [];
			text.push('<ul class="' + chart.id + '-legend">');
			for (var i = 0; i < chart.data.datasets.length; i++) {
				text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].borderColor[i] + ';"></span><span class="legend-label text-dark">');
				if (chart.data.datasets[i].label) {
					text.push(chart.data.datasets[i].label);
				}
				text.push('</span></li>');
			}
			text.push('</ul>');
			return text.join("");
		},
		elements: {
			point: {
				radius: 1
			},
			line: {
				tension: 0
			}
		},
		tooltips: {
			backgroundColor: 'rgba(2, 171, 254, 1)',
		},
	};
	var currentGraphCanvas = $("#current-graph").get(0).getContext("2d");
	// This will get the first returned node in the jQuery collection.
	var currentGraph = new Chart(currentGraphCanvas, {
		type: 'line',
		data: pageiVewAnalyticDataCurrent,
		options: pageiVewAnalyticOptionsCurrent,
	});
	document.getElementById('currentlegend').innerHTML = currentGraph.generateLegend();
}

// Dynamic data methods

function UpdateOCVGraph(newValueX, newValueY) {
	OCVGraph.data.labels.push(newValueX);
	OCVGraph.data.datasets[0].data.push(newValueY)
	OCVGraph.update();
}

function UpdateSOCGraph(newValueX, newValueY) {
	SOCGraph.data.labels.push(newValueX);
	SOCGraph.data.datasets[0].data.push(newValueY)
	SOCGraph.update();
}

function UpdateCurrentGraph(newValueX, newValueY) {
	currentGraph.data.labels.push(newValueX);
	currentGraph.data.datasets[0].data.push(newValueY)
	currentGraph.update();
}

function UpdateSOHData(SOHData){
	UpdateSOHCircle(SOHData[SOHData.length - 1]);
}

// Graph data initalize methods
function InitOCVData(OCVData, timestampArr){
	OCVData.forEach((element, index) => {
		OCVGraph.data.datasets[0].data.push(element);
		pageiVewAnalyticDataOCV.labels.push(timestampArr[index]/1000);
	});
	OCVGraph.update();
}

function InitSOCData(SOCData, timestampArr){
	SOCData.forEach((element, index) => {
		SOCGraph.data.datasets[0].data.push(element);
		pageiVewAnalyticDataSOC.labels.push(timestampArr[index]/1000);
	});
	UpdateSOCCircle(SOCData[SOCData.length - 1]);
	SOCGraph.update();
}



function InitCurrentData(currentData, timestampArr){
	currentData.forEach((element, index) => {
		currentGraph.data.datasets[0].data.push(element);
		pageiVewAnalyticDataCurrent.labels.push(timestampArr[index]/1000);
	});
	currentGraph.update();
}


//
// WEBSOCKETS
//




var webSocket = new WebSocket("ws://localhost:3000/readLast");

const SERVER_URL = "http://localhost:3000/allData";

//performs http request to get initial data
fetch(SERVER_URL)
	.then(data => { return data.json() })
	.then(res => {
		let timestampData = [];
		timestampData = res.map((item) => item.timestamp);

		let OCVData = [];
		OCVData = res.map((item) => item.ocv);
		InitOCVData(OCVData, timestampData);

		let currentData = [];
		currentData = res.map((item) => item.corrente);
		InitCurrentData(currentData, timestampData);

		let SOCData = [];
		SOCData = res.map((item) => item.soc);
		InitSOCData(SOCData, timestampData);

		let SOHData = [];
		SOHData = res.map((item) => item.soh);
		UpdateSOHData(SOHData);

		console.log(JSON.stringify(res));
	})

webSocket.onopen = (event) => {
	var sendObject = { userName: "Dashboard", message: "Trying to connect" };
	webSocket.send(JSON.stringify(sendObject));
};

webSocket.onmessage = (event) => {
	console.log(event.data)
}
/*
var test = 8.5
setInterval(function () {
	UpdateOCVGraph(test, test/2);
	test++;

}, 1000);*/

//TODO
//Add UpdateGraph() -> insert new value throught websocket
//Add InitDataGraph() -> uses allData to create the main graph
//Add SendCommand() -> sends 'charge' or 'discharge' command to server throught websocket








