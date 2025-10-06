export interface ColorSwatch {
	name: string;
	hexColor: string;
	description?: string;
}

export interface ColorSelection {
	title:
		| "Primary Colors"
		| "Secondary & Accent Colors"
		| "UI Component Colors"
		| "Utility & Form Colors"
		| "Status & Feedback Colors";
	swatches: ColorSwatch[];
}

export interface TypographyStyle {
	name: string;
	fontFamily: string;
	fontSize: string;
	fontWeight: string;
	lineHeight: string;
	letterSpacing?: string;
	description: string;
}

export interface TypographySection {
	title: string;
	styles: TypographyStyle[];
}

export interface StyleGuide {
	theme: string;
	description: string;
	colorSelections: [
		ColorSelection,
		ColorSelection,
		ColorSelection,
		ColorSelection,
		ColorSelection,
	];
	typographySections: [
		TypographySection,
		TypographySection,
		TypographySection,
	];
}
