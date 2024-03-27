import * as d3 from "d3";

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 500);

const data = [
  { fruit: "사과", quantity: 100, details: { color: "red", price: 550 } },
  { fruit: "바나나", quantity: 40, details: { color: "yellow", price: 150 } },
  { fruit: "복숭아", quantity: 60, details: { color: "pink", price: 350 } },
  { fruit: "블루베리", quantity: 30, details: { color: "blue", price: 700 } },
  { fruit: "청포도", quantity: 10, details: { color: "green", price: 800 } },
];

const fruit = svg
  .selectAll("fruit")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", (d) => d.details.price)
  .attr("cy", (d) => 350)
  .attr("r", (d) => d.quantity)
  .attr("fill", (d) => d.details.color)
  .attr("stroke", "black");
