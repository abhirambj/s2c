import Toolbar from "@/components/canvas/toolbar";
import React from "react";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="w-full h-screen">
			{children}
			<Toolbar />
		</div>
	);
};

export default Layout;
