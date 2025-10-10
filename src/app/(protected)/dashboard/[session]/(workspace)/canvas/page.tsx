import InfiniteCanvas from "@/components/canvas";
import ProjectProvider from "@/components/projects/provider";
import { ProjectQuery } from "@/convex/query.config";
import React from "react";

interface CanvasPageProps {
	searchParams: Promise<{ project?: string }>;
}

const Page = async ({ searchParams }: CanvasPageProps) => {
	const params = await searchParams;
	const projectId = params.project;

	if (!projectId) {
		return (
			<div className="w-full h-screen flex items-center justify-center">
				<p className="text-muted-foreground">No project selected</p>
			</div>
		);
	}

	const { project, profile } = await ProjectQuery(projectId);
	if (!profile) {
		return (
			<div className="w-full h-screen flex items-center justify-center">
				<p className="text-muted-foreground">Authentication required</p>
			</div>
		);
	}

	const projectValue =
		typeof project === "object" &&
		project !== null &&
		"_valueJSON" in project
			? (project as any)._valueJSON
			: undefined;

	if (!projectValue) {
		return (
			<div className="w-full h-screen flex items-center justify-center">
				<p className="text-red-500">
					Project not found or access denied
				</p>
			</div>
		);
	}
	return (
		<ProjectProvider initialProject={{ _valueJSON: projectValue }}>
			<InfiniteCanvas />
		</ProjectProvider>
	);
};

export default Page;
