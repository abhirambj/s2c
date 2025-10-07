import { StyleGuide } from "@/redux/api/style-guide";

export const mockStyleGuide: StyleGuide = {
	theme: "Modern Creative",
	description:
		"A clean, modern theme for CTAs, UI elements, and brand highlights.",
	colorSelections: [
		{
			title: "Primary Colors",
			swatches: [
				{
					name: "Sky Blue",
					hexColor: "#DBEAFE",
					description: "Calming blue for secondary actions",
				},
				{
					name: "Peach",
					hexColor: "#FFD7BA",
					description: "Warm peach for CTAs and highlights",
				},
			],
		},
		{
			title: "Secondary & Accent Colors",
			swatches: [
				{
					name: "Sunshine Yellow",
					hexColor: "#FEF3C7",
					description:
						"Cheerful yellow for attention-grabbing elements",
				},
				{
					name: "Emerald",
					hexColor: "#34D399",
					description: "Accent for success and highlights",
				},
			],
		},
		{
			title: "UI Component Colors",
			swatches: [
				{
					name: "Rose Quartz",
					hexColor: "#FCE7F3",
					description: "Soft pink for component borders and dividers",
				},
				{
					name: "Charcoal",
					hexColor: "#27272A",
					description: "Default for text and UI backgrounds",
				},
			],
		},
		{
			title: "Utility & Form Colors",
			swatches: [
				{
					name: "Slate Gray",
					hexColor: "#94A3B8",
					description: "Utility fields, disabled/intermediate states",
				},
				{
					name: "Frost White",
					hexColor: "#F9FAFB",
					description: "Form backgrounds and card surfaces",
				},
			],
		},
		{
			title: "Status & Feedback Colors",
			swatches: [
				{
					name: "Error Red",
					hexColor: "#F87171",
					description: "Errors and destructive actions",
				},
				{
					name: "Success Green",
					hexColor: "#4ADE80",
					description: "Success, completion, confirmations",
				},
				{
					name: "Info Blue",
					hexColor: "#38BDF8",
					description: "Information, active states",
				},
			],
		},
	],
	typographySections: [
		{
			title: "Headings — Fun",
			styles: [
				{
					name: "Heading 1",
					fontFamily: "Inter, sans-serif",
					fontSize: "2.25rem",
					fontWeight: "700",
					lineHeight: "2.75rem",
					letterSpacing: "0.01em",
					description: "Bold sans-serif for page major headings.",
				},
				{
					name: "Heading 2",
					fontFamily: "Playfair Display, serif",
					fontSize: "1.75rem",
					fontWeight: "700",
					lineHeight: "2.25rem",
					letterSpacing: "0.02em",
					description: "Elegant serif for subheadings.",
				},
				{
					name: "Heading 3",
					fontFamily: "Montserrat, sans-serif",
					fontSize: "1.25rem",
					fontWeight: "600",
					lineHeight: "1.75rem",
					letterSpacing: "0.01em",
					description: "Geometric sans-serif for section titles.",
				},
			],
		},
		{
			title: "Body & Paragraph",
			styles: [
				{
					name: "Body Large",
					fontFamily: "Roboto, Arial, sans-serif",
					fontSize: "1.125rem",
					fontWeight: "400",
					lineHeight: "1.75rem",
					letterSpacing: "0.01em",
					description: "Clean and modern for main body text.",
				},
				{
					name: "Body Small",
					fontFamily: "Georgia, serif",
					fontSize: "0.95rem",
					fontWeight: "400",
					lineHeight: "1.5rem",
					letterSpacing: "0.01em",
					description: "Classic serif for notes and details.",
				},
				{
					name: "Paragraph",
					fontFamily: "Lato, Helvetica, sans-serif",
					fontSize: "1rem",
					fontWeight: "400",
					lineHeight: "1.65rem",
					letterSpacing: "0em",
					description: "Neutral sans-serif for paragraphs.",
				},
			],
		},
		{
			title: "UI & Special",
			styles: [
				{
					name: "Button Text",
					fontFamily: "Inter, sans-serif",
					fontSize: "1rem",
					fontWeight: "600",
					lineHeight: "1.25rem",
					letterSpacing: "0.03em",
					description: "Strong for primary buttons and CTAs.",
				},
				{
					name: "Input Field",
					fontFamily: "SF Mono, Menlo, monospace",
					fontSize: "0.95rem",
					fontWeight: "500",
					lineHeight: "1.25rem",
					letterSpacing: "0.02em",
					description: "Monospace for input/custom fields.",
				},
				{
					name: "Caption",
					fontFamily: "Open Sans, Arial, sans-serif",
					fontSize: "0.875rem",
					fontWeight: "400",
					lineHeight: "1.1rem",
					letterSpacing: "0.03em",
					description: "Subdued font for captions/help text.",
				},
			],
		},
	],
};

export default mockStyleGuide;
