import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const combinedSlug = (name: string, maxLen = 80): string => {
	const base = name;
	if (!base) return "untitled";
	let s = base
		.normalize("NFKD")
		.replace(/\p{M}+/gu, "")
		.toLowerCase()
		.replace(/\s+/g, "")
		.replace(/[^a-z0-9]/g, "");
	if (!s) s = "untitled";
	if (s.length > maxLen) s = s.slice(0, maxLen);
	return s;
};

export const polylineBox = (
	points: ReadonlyArray<{ x: number; y: number }>
) => {
	let minX = Infinity,
		minY = Infinity,
		maxX = -Infinity,
		maxY = -Infinity;

	for (let i = 0; i < points.length; i++) {
		const { x, y } = points[i];
		if (x < minX) minX = x;
		if (y < minY) minY = y;
		if (x > maxX) maxX = x;
		if (y > maxY) maxY = y;
	}

	return {
		minX,
		minY,
		maxX,
		maxY,
		width: maxX - minX,
		height: maxY - minY,
	};
};
