"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Toggle } from "@/components/ui/toggle";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { TextShape, updateShape } from "@/redux/slice/shapes";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
	AlignLeft,
	AlignCenter,
	AlignRight,
	AlignJustify,
	Underline,
	Strikethrough,
	Italic,
	Bold,
	Palette,
} from "lucide-react";
import React from "react";

type Props = {
	isOpen: boolean;
};

const TextSideBar = ({ isOpen }: Props) => {
	const dispatch = useAppDispatch();
	const selectedShapes = useAppSelector((state) => state.shapes.selected);
	const shapesEntities = useAppSelector(
		(state) => state.shapes.shapes.entities
	);

	const fontFamilies = [
		"Manrope",
		"Inter",
		"Roboto",
		"Lato",
		"Montserrat",
		"Open Sans",
		"Nunito",
		"Poppins",
		"Oswald",
		"Playfair Display",
		"Merriweather",
		"Fira Code",
		"Source Code Pro",
		"IBM Plex Mono",
		"Comic Sans MS",
		"Courier New",
		"Arial",
		"Verdana",
		"Georgia",
		"Times New Roman",
		"Lucida Sans Unicode",
	];

	const selectedTextShape = Object.keys(selectedShapes)
		.map((id) => shapesEntities[id])
		.find((shape) => shape?.type === "text") as TextShape | undefined;

	const [colorInput, setColorInput] = React.useState(
		selectedTextShape?.fill ?? "#ffffff"
	);

	const updateTextProperty = (
		property: keyof TextShape,
		value: string | number
	) => {
		if (!selectedTextShape) return;

		dispatch(
			updateShape({
				id: selectedTextShape.id,
				patch: {
					[property]: value,
				},
			})
		);
	};

	const handleColorChange = (color: string) => {
		setColorInput(color);
		if (/^#[0-9A-F]{6}$/i.test(color) || /^#[0-9A-F]{3}$/i.test(color)) {
			updateTextProperty("fill", color);
		}
	};

	if (!isOpen || !selectedTextShape) return null;

	return (
		<div
			className={cn(
				"fixed right-5 top-1/2 -translate-y-1/2 w-80 backdrop-blur-xl bg-white/[0.08] border-white/[0.12] gap-2 p-3 saturate-150 border rounded-lg z-50 transition-transform duration-300",
				true ? "translate-x-0" : "translate-x-full"
			)}
		>
			<div className="p-4 flex flex-col gap-10 overflow-y-auto max-h-[calc(100vh-8rem)]">
				<div className="space-y-2">
					<Label className="text-white/80">Font Family</Label>
					<Select
						value={selectedTextShape?.fontFamily}
						onValueChange={(value) =>
							updateTextProperty("fontFamily", value)
						}
					>
						<SelectTrigger className="bg-white/5 border-white/10 w-full text-white">
							<SelectValue />
						</SelectTrigger>
						<SelectContent className="bg-black/90 border-white/10">
							{fontFamilies.map((font) => (
								<SelectItem
									key={font}
									value={font}
									className="text-white hover:bg-black/10"
								>
									<span style={{ fontFamily: font }}>
										{font.split(",")[0]}
									</span>
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div className="space-y-2">
					<Label className="text-white/80">
						Font Size: {selectedTextShape?.fontSize}px
					</Label>
					<Slider
						value={[selectedTextShape?.fontSize]}
						onValueChange={([value]) =>
							updateTextProperty("fontSize", value)
						}
						min={8}
						max={128}
						step={1}
						className="w-full"
					/>
				</div>
				<div className="space-y-2">
					<Label className="text-white/80">
						Font Weight: {selectedTextShape?.fontWeight}px
					</Label>
					<Slider
						value={[selectedTextShape?.fontWeight]}
						onValueChange={([value]) =>
							updateTextProperty("fontWeight", value)
						}
						min={100}
						max={900}
						step={100}
						className="w-full"
					/>
				</div>
				<div className="space-y-3">
					<Label className="text-white/80">Style</Label>
					<Toggle
						pressed={selectedTextShape?.fontWeight >= 600}
						onPressedChange={(pressed) =>
							updateTextProperty(
								"fontWeight",
								pressed ? 700 : 400
							)
						}
						className="data-[state=on]:bg-blue-500 data-[state=on]:text-white"
					>
						<Bold className="w-4 h-4" />
					</Toggle>
					<Toggle
						pressed={selectedTextShape?.fontStyle === "italic"}
						onPressedChange={(pressed) =>
							updateTextProperty(
								"fontStyle",
								pressed ? "italic" : "normal"
							)
						}
						className="data-[state=on]:bg-blue-500 data-[state=on]:text-white"
					>
						<Italic className="w-4 h-4" />
					</Toggle>
					<Toggle
						pressed={
							selectedTextShape?.textDecoration === "underline"
						}
						onPressedChange={(pressed) =>
							updateTextProperty(
								"textDecoration",
								pressed ? "underline" : "none"
							)
						}
						className="data-[state=on]:bg-blue-500 data-[state=on]:text-white"
					>
						<Underline className="w-4 h-4" />
					</Toggle>
					<Toggle
						pressed={
							selectedTextShape?.textDecoration === "line-through"
						}
						onPressedChange={(pressed) =>
							updateTextProperty(
								"textDecoration",
								pressed ? "line-through" : "none"
							)
						}
						className="data-[state=on]:bg-blue-500 data-[state=on]:text-white"
					>
						<Strikethrough className="w-4 h-4" />
					</Toggle>
				</div>
				<div className="space-y-2">
					<Label className="text-white/80 flex items-center gap-2">
						<Palette className="w-4 h-4" />
						Text Color
					</Label>
					<div className="flex gap-2">
						<Input
							className="bg-white/5 border-white/10 text-white flex-1"
							value={colorInput}
							onChange={(e) => handleColorChange(e.target.value)}
							placeholder="#ffffff"
						/>
						<div
							className="w-10 h-10 rounded border border-white/20 cursor-pointer"
							style={{
								backgroundColor:
									selectedTextShape?.fill || "#ffffff",
							}}
							onClick={() => {
								const input = document.createElement("input");
								input.type = "color";
								input.value =
									selectedTextShape?.fill || "#ffffff";
								input.onchange = (e) => {
									const color = (e.target as HTMLInputElement)
										.value;
									setColorInput(color);
									updateTextProperty("fill", color);
								};
								input.click();
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TextSideBar;
