"use client";
import { fetchProjectSuccess } from "@/redux/slice/projects";
import { useAppDispatch } from "@/redux/store";
import React, { useEffect } from "react";

type Props = {
	children: React.ReactNode;
	initialProjects: { _valueJSON?: unknown };
};

const ProjectsProvider = ({ children, initialProjects }: Props) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (initialProjects?._valueJSON) {
			const projectsData = Array.isArray(initialProjects._valueJSON)
				? initialProjects._valueJSON
				: [];
			dispatch(
				fetchProjectSuccess({
					projects: projectsData,
					total: projectsData.length,
				})
			);
		}
	}, [dispatch, initialProjects]);

	return <>{children}</>;
};

export default ProjectsProvider;
