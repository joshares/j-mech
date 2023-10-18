import React, { useState, useRef, useEffect } from "react";
import demo from "../../public/download.png";
import { GoPrimitiveDot } from "react-icons/go";
import { CiUndo } from "react-icons/ci";
import { useFormContext } from "@/context/form_context";

const Canvas = () => {
  const canvasRef = useRef(null);
  const { saveImage } = useFormContext();
  const [isDrawing, setIsDrawing] = useState(false);
  const [lines, setLines] = useState([]);
  const [brushWidth, setBrushWidth] = useState(5);
  const [brushColor, setBrushColor] = useState("#ff0000");
  const [active, setActive] = useState({ red: true, blue: false });
  const [ctx, setCtx] = useState(null);
  const image = useRef(null);

  const saveCanvas = () => {
    const can = canvasRef.current;
    const img = can.toDataURL("image/png");
    saveImage(img);
    console.log(img);
  };

  const handleMouseDown = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setIsDrawing(true);
    setLines((prevLines) => [
      ...prevLines,
      { points: [{ x: offsetX, y: offsetY, brushColor }] },
    ]);
  };

  const handleMouseMove = (event) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = event.nativeEvent;
    setLines((prevLines) => {
      const lastLine = prevLines[prevLines.length - 1];
      const newLine = {
        ...lastLine,
        points: [...lastLine.points, { x: offsetX, y: offsetY, brushColor }],
      };
      return [...prevLines.slice(0, -1), newLine];
    });
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleUndo = () => {
    setLines((prevLines) => prevLines.slice(0, -1));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    // canvas.width = window.innerWidth * 0.7; // set canvas width to be 100% of windows width
    canvas.height = window.innerHeight * 0.5; // set canvas height to 90% of window height
    const context = canvas.getContext("2d");
    image.current = new Image();

    image.current.onload = () => {
      context.drawImage(image.current, 0, 0, canvas.width, canvas.height);
    };
    image.current.src = demo.src;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image.current, 0, 0, canvas.width, canvas.height);

    lines.forEach((line) => {
      context.beginPath();
      context.lineWidth = 5;
      line.points.forEach(({ x, y, brushColor }, index) => {
        if (index === 0) {
          context.moveTo(x, y);
        } else {
          context.strokeStyle = brushColor;
          context.lineTo(x, y);
        }
      });
      context.stroke();
    });
    saveCanvas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lines]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={"700"}
        height={500}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="border-2 rounded-lg border-gray-300 w-full "
      />
      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center gap-10">
          <GoPrimitiveDot
            className={`${
              active.red
                ? "text-red-500 text-lg border-4 border-gray-500 rounded-full bg-red-500"
                : "text-red-500 text-xl"
            }`}
            onClick={() => {
              setBrushColor("#ff0000");
              setActive({ red: true, blue: false });
            }}
          />
          <GoPrimitiveDot
            className={`${
              active.blue
                ? "text-blue-500 text-lg border-4 border-gray-500 rounded-full bg-blue-500"
                : "text-blue-500 text-xl"
            }`}
            onClick={() => {
              setBrushColor("#0000ff");
              setActive({ red: false, blue: true });
            }}
          />
          <button onClick={handleUndo} className="text-2xl font-semibold">
            <CiUndo />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
