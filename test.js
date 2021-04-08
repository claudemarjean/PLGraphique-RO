var dataset = [8, 5, 1, 17 ];

var svgWidth = 700, svgHeight = 700;


var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr("height", svgHeight);

svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "white")
    .style("stroke","black")
    .style("stroke-width","4");


    var xScale = d3.scaleLinear()
        .domain([-d3.max(dataset), d3.max(dataset)])
        .range([0, svgWidth  ]);

    var yScale = d3.scaleLinear()
        .domain([-d3.max(dataset), d3.max(dataset)])
        .range([svgHeight, 0 ]);

var x_axis = d3.axisBottom()
    .scale(xScale);

var y_axis = d3.axisLeft()
    .scale(yScale);

svg.append("g")
    //.attr("transform", "translate((0, 10)")
    .attr("transform", "translate(350, 0)")
    .call(y_axis);

var xAxisTranslate = svgHeight ;

svg.append("g")
    .attr("transform", "translate(0, 350)")
    .call(x_axis);









svg.append("line")
    .attr("x1",350)
    .attr("y1",350)
    .attr("x2",400 + 160)
    .attr("y2",400 + -160)
    .style("stroke","black")
    .style("stroke-width","5");

