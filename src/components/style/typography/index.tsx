import { Type } from "lucide-react";
import React from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

type TypographyStyle = {
	name: string;
	fontFamily: string;
	fontSize: string;
	fontWeight: string;
	lineHeight: string;
	letterSpacing?: string;
	description: string;
};
type TypographySection = {
	title: string;
	styles: TypographyStyle[];
};
type Props = {
	typographyGuide: TypographySection[];
};

const StyleGuideTypography: React.FC<Props> = ({ typographyGuide }) => {
	if (!typographyGuide.length) {
		return (
			<div className="space-y-8">
				<div className="text-center py-20">
					<div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-muted flex items-center justify-center">
						<Type className="w-8 h-8 text-muted-foreground" />
					</div>
					<h3 className="text-lg font-medium text-foreground mb-2">
						No typography generated yet
					</h3>
					<p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
						Generate or select a style guide to preview typography
						recommendations for your brand or project.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-10">
			{typographyGuide.map((section, sIdx) => (
				<div key={sIdx}>
					<div className="uppercase tracking-wide text-base font-bold text-foreground/70 mb-6">
						{section.title}
					</div>
					<div className="flex flex-col gap-6">
						{section.styles.map((style, idx) => (
							<div key={idx} className="pb-4">
								<div className="flex items-center gap-2 mb-1">
									<span className="text-xl font-semibold text-foreground">
										{style.name}
									</span>
									<Tooltip>
										<TooltipTrigger asChild>
											<button className="p-1 rounded-full hover:bg-muted/40 transition">
												<Type className="w-4 h-4 text-primary/70" />
											</button>
										</TooltipTrigger>
										<TooltipContent className="max-w-xs px-4 py-3 shadow-xl">
											<div className="font-semibold mb-1">
												{style.name}
											</div>
											<div className="text-xs text-muted-foreground mb-2 italic">
												{style.description}
											</div>
											<div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
												<span>
													<strong>Font:</strong>{" "}
													{style.fontFamily}
												</span>
												<span>
													<strong>Size:</strong>{" "}
													{style.fontSize}
												</span>
												<span>
													<strong>Weight:</strong>{" "}
													{style.fontWeight}
												</span>
												<span>
													<strong>
														Line Height:
													</strong>{" "}
													{style.lineHeight}
												</span>
												{style.letterSpacing && (
													<span>
														<strong>
															Spacing:
														</strong>{" "}
														{style.letterSpacing}
													</span>
												)}
											</div>
										</TooltipContent>
									</Tooltip>
								</div>
								<div className="text-sm text-muted-foreground mb-2">
									{style.description}
								</div>
								<div
									style={{
										fontFamily: style.fontFamily,
										fontSize: style.fontSize,
										fontWeight: style.fontWeight,
										lineHeight: style.lineHeight,
										letterSpacing: style.letterSpacing,
									}}
									className="text-foreground"
								>
									The quick brown fox jumps over the lazy dog
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default StyleGuideTypography;
