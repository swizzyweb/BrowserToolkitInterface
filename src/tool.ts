import { IBrowserToolkit } from "./browser-toolkit";

export interface Tool {
    name: string
}

export interface InstallToolProps {
    toolkit: IBrowserToolkit;
}

export interface InstallableTool {
    install: (installToolProps: InstallToolProps) => Tool;
}

export interface IToolInstaller extends Tool {
	installTool(props: any): Promise<void>;
}
