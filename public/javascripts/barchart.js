//Define the data for the bar chart.
var data = [4, 8, 15, 16, 23, 42];
function makeBarchartFromData(data, options){
	options = options || {};
	//Define the barchart size :
	var width = options.width || 420,
	    barHeight = options.barHeight || 20;

	//Define a range in d3.
	var x = d3.scale.linear()
	    .domain([0, d3.max(data)])
	    .range([0, width]);
	//Set the size to the svg element: 
	var chart = d3.select(".chart")
	    .attr("width", width)
	    .attr("height", barHeight * data.length);
	//fill the svg with data.
	var bar = chart.selectAll("g")
	               .data(data)
	               .enter().append("g")
	               .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
	bar.append("rect")
	    .attr("width", x)
	    .attr("height", barHeight - 1);

	bar.append("text")
	    .attr("x", function(d) { return x(d) - 3; })
	    .attr("y", barHeight / 2)
	    .attr("dy", ".35em")
	    .text(function(d) { return d; });
}

makeBarchartFromData(data);
