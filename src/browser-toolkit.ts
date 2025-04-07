import { Tool } from "./tool";

export interface IBrowserToolkit {
  addTool(tool: Tool): void;
  getTool(toolName: string): Tool | undefined;
  printTools(): void;
}
