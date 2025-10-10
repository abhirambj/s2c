import { Shape } from "@/redux/slice/shapes";
import React from "react";
import { Frame } from "./frame";
import { Rectangle } from "./rectangle";
import { Elipse } from "./elipse";
import { Stroke } from "./stroke";
import { Arrow } from "./arrow";
import { Line } from "./line";
import { Text } from "./text";

const ShapesRenderer = ({
	shape,
	toggleInspiration,
	toggleChat,
	generateWorkflow,
	exportDesign,
}: {
	// TODO: Add frame button
	// TODO: Add generated ui
	shape: Shape;
	toggleInspiration: () => void;
	toggleChat: (generatedUUId: string) => void;
	generateWorkflow: (generatedUUId: string) => void;
	exportDesign: (generatedUUId: string, element: HTMLElement | null) => void;
}) => {
	switch (shape.type) {
		// case "frame":
		// 	return (
		// 		<Frame shape={shape} toggleInspiration={toggleInspiration} />
		// 	);
		case "rect":
			return <Rectangle shape={shape} />;
		case "ellipse":
			return <Elipse shape={shape} />;
		case "freedraw":
			return <Stroke shape={shape} />;
		case "arrow":
			return <Arrow shape={shape} />;
		case "line":
			return <Line shape={shape} />;
		case "text":
			return <Text shape={shape} />;
		default:
			return null;
	}
};

export default ShapesRenderer;
