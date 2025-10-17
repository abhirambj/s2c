"use client";

import { useInfiniteCanvas } from "@/hooks/use-canvas";
import React from "react";
import TextSideBar from "./text-sidebar";
import { cn } from "@/lib/utils";
import ShapesRenderer from "./shapes";
import { RectanglePreview } from "./shapes/rectangle/preview";
import { FramePreview } from "./shapes/frame/preview";
import { ElipsePreview } from "./shapes/elipse/preview";
import { ArrowPreview } from "./shapes/arrow/preview";
import { LinePreview } from "./shapes/line/preview";
import { FreeDrawStrokePreview } from "./shapes/stroke/preview";
import { SelectionOverlay } from "./shapes/selection";

const InfiniteCanvas = () => {
	const {
		viewport,
		shapes,
		currentTool,
		selectedShapes,
		onPointerDown,
		onPointerMove,
		onPointerUp,
		onPointerCancel,
		attachCanvasRef,
		getDraftShape,
		getFreeDrawPoints,
		isSidebarOpen,
		hasSelectedText,
	} = useInfiniteCanvas();

	const draftShape = getDraftShape();
	const freeDrawPoints = getFreeDrawPoints();

	return (
		<>
			<TextSideBar isOpen={isSidebarOpen && hasSelectedText} />
			{/* Inspiration */}
			{/* Chat Window */}
			<div
				role="application"
				aria-label="Infinite drawing canvas"
				ref={attachCanvasRef}
				className={cn(
					"relative w-full h-full overflow-hidden select-none z-0",
					{
						"cursor-grabbing": viewport.mode === "panning",
						"cursor-grab": viewport.mode === "shiftPanning",
						"cursor-crosshair":
							currentTool !== "select" &&
							viewport.mode === "idle",
						"cursor-default":
							currentTool === "select" &&
							viewport.mode === "idle",
					}
				)}
				style={{ touchAction: "none" }}
				onPointerDown={onPointerDown}
				onPointerMove={onPointerMove}
				onPointerUp={onPointerUp}
				onPointerCancel={onPointerCancel}
				onContextMenu={(e) => e.preventDefault()}
				draggable={false}
			>
				<div
					className="absolute origin-top-left pointer-events-none z-10"
					style={{
						transform: `translate3d(${viewport.translate.x}px, ${viewport.translate.y}px, 0) scale(${viewport.scale})`,
						transformOrigin: "0 0",
						willChange: "transform",
					}}
				>
					{shapes.map((shape) => (
						<ShapesRenderer
							key={shape.id}
							shape={shape}
							// toggleInspiration={toggleInspiration}
							// toggleChat={toggleChat}
							// generateWorkflow={generateWorkflow}
							// exportDesign={exportDesign}
						/>
					))}
					{shapes.map((shape) => (
						<SelectionOverlay
							key={`selection-${shape.id}`}
							shape={shape}
							isSelected={!!selectedShapes[shape.id]}
						/>
					))}
					{draftShape && draftShape.type === "frame" && (
						<FramePreview
							startWorld={draftShape.startWorld}
							currentWorld={draftShape.currentWorld}
						/>
					)}
					{draftShape && draftShape.type === "rect" && (
						<RectanglePreview
							startWorld={draftShape.startWorld}
							currentWorld={draftShape.currentWorld}
						/>
					)}
					{draftShape && draftShape.type === "ellipse" && (
						<ElipsePreview
							startWorld={draftShape.startWorld}
							currentWorld={draftShape.currentWorld}
						/>
					)}
					{draftShape && draftShape.type === "arrow" && (
						<ArrowPreview
							startWorld={draftShape.startWorld}
							currentWorld={draftShape.currentWorld}
						/>
					)}
					{draftShape && draftShape.type === "line" && (
						<LinePreview
							startWorld={draftShape.startWorld}
							currentWorld={draftShape.currentWorld}
						/>
					)}
					{currentTool === "freedraw" &&
						freeDrawPoints.length > 1 && (
							<FreeDrawStrokePreview points={freeDrawPoints} />
						)}
				</div>
			</div>
		</>
	);
};

export default InfiniteCanvas;
