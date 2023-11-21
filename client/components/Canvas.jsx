import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  const drawStand = (context) => {
    context.beginPath();
    context.moveTo(20, 10);
    context.lineTo(20, 180);
    context.strokeStyle = "black";
    context.stroke();
    context.beginPath();
    context.moveTo(20, 10);
    context.lineTo(100, 10);
    context.strokeStyle = "black";
    context.stroke();
    context.beginPath();
    context.moveTo(0, 180);
    context.lineTo(40, 180);
    context.strokeStyle = "black";
    context.stroke();
  };

  const drawBody = (context, number) => {
    switch (number) {
      case 1:
        //HEAD
        context.beginPath();
        context.fillStyle = "black";
        context.arc(100, 25, 15, 0, Math.PI * 2, true);
        context.fill();
        break;
      case 2:
        //body
        context.beginPath();
        context.fillStyle = "black";
        context.arc(100, 25, 15, 0, Math.PI * 2, true);
        context.fill();
        context.beginPath();
        context.moveTo(100, 20);
        context.lineTo(100, 90);
        context.strokeStyle = "navy";
        context.stroke();
        break;
      case 3:
        context.beginPath();
        context.fillStyle = "black";
        context.arc(100, 25, 15, 0, Math.PI * 2, true);
        context.fill();
        context.beginPath();
        context.moveTo(100, 20);
        context.lineTo(100, 90);
        context.strokeStyle = "navy";
        context.stroke();
        context.beginPath();
        context.strokeStyle = "black";
        context.moveTo(100, 50);
        context.lineTo(75, 65);
        context.stroke();
        break;
      case 4:
        context.beginPath();
        context.fillStyle = "black";
        context.arc(100, 25, 15, 0, Math.PI * 2, true);
        context.fill();
        context.beginPath();
        context.moveTo(100, 20);
        context.lineTo(100, 90);
        context.strokeStyle = "navy";
        context.stroke();
        context.beginPath();
        context.strokeStyle = "black";
        context.moveTo(100, 50);
        context.lineTo(75, 65);
        context.stroke();
        context.beginPath();
        context.strokeStyle = "black";
        context.moveTo(100, 50);
        context.lineTo(125, 65);
        context.stroke();
        break;
      case 5:
        context.beginPath();
        context.fillStyle = "black";
        context.arc(100, 25, 15, 0, Math.PI * 2, true);
        context.fill();
        context.beginPath();
        context.moveTo(100, 20);
        context.lineTo(100, 90);
        context.strokeStyle = "navy";
        context.stroke();
        context.beginPath();
        context.strokeStyle = "black";
        context.moveTo(100, 50);
        context.lineTo(75, 65);
        context.stroke();
        context.beginPath();
        context.strokeStyle = "black";
        context.moveTo(100, 50);
        context.lineTo(125, 65);
        context.stroke();
        context.beginPath();
        context.strokeStyle = "black";
        context.moveTo(100, 90);
        context.lineTo(75, 140);
        context.stroke();
        break;
      case 6:
        context.beginPath();
        context.fillStyle = "black";
        context.arc(100, 25, 15, 0, Math.PI * 2, true);
        context.fill();
        context.beginPath();
        context.moveTo(100, 20);
        context.lineTo(100, 90);
        context.strokeStyle = "navy";
        context.stroke();
        context.beginPath();
        context.strokeStyle = "black";
        context.moveTo(100, 50);
        context.lineTo(75, 65);
        context.stroke();
        context.beginPath();
        context.strokeStyle = "black";
        context.moveTo(100, 50);
        context.lineTo(125, 65);
        context.stroke();
        context.beginPath();
        context.strokeStyle = "black";
        context.moveTo(100, 90);
        context.lineTo(75, 140);
        context.stroke();
        context.beginPath();
        context.strokeStyle = "black";
        context.moveTo(100, 90);
        context.lineTo(125, 140);
        context.stroke();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawStand(context);

    if (props.wrongGuesses > 0) {
      drawBody(context, props.wrongGuesses);
    }
  }, [props.wrongGuesses]);

  return (
    <canvas ref={canvasRef} height={props.height} width={props.width}></canvas>
  );
};

export default Canvas;
