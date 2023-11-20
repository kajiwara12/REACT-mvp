import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
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
  }, []);

  return (
    <canvas ref={canvasRef} height={props.height} width={props.width}></canvas>
  );
};

export default Canvas;
