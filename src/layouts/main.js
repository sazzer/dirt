'use strict';

function start() {
    const applicationNode = document.getElementById("Application");
    const measurementNode = document.createElement("span");
    measurementNode.setAttribute("class", "output");
    measurementNode.innerText = "M";
    applicationNode.appendChild(measurementNode);
    
    const width = measurementNode.offsetWidth;
    const height = measurementNode.offsetHeight;
    
    const totalWidth = applicationNode.offsetWidth;
    const totalHeight = applicationNode.offsetHeight;
    
    const gridWidth = Math.floor(totalWidth / width);
    const gridHeight = Math.floor(totalHeight / height);
    
    console.log(`The measurement node measures ${width} by ${height}`);
    console.log(`The output area measures ${totalWidth} by ${totalHeight}`);
    console.log(`The grid therefore measures ${totalWidth / width} by ${totalHeight / height}`);
    
    applicationNode.removeChild(measurementNode);
    
    let output = "";
    for (let i = 0; i < gridWidth; ++i) {
        output += 'M';
    }
    
    for (let i = 0; i < gridHeight; ++i) {
        const lineNode = document.createElement("div");
        lineNode.setAttribute("class", "output");
        lineNode.innerText = output;
        applicationNode.appendChild(lineNode);
    }
}
