import { IBrowserToolkit } from "./browser-toolkit";
import { IDescription } from "./description";

export interface Tool {
  name: string;
  //description: IDescription;
  //describe(): string;
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
