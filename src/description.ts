export type KeyValue<V> = { [key: string]: V };

export enum CommandOption {
  commandKey,
  commandValue,
  shortDescription,
  longDescription,
}

export enum ArgType {
  string = "string",
  boolean = "boolean",
  number = "number",
  object = "object",
  any = "any",
}

export interface IArgument {
  type: ArgType;
  values?: any[];
  shortDescription: string;
  longDescritpion: string;
}

export type IArgumentProperties = KeyValue<IArgument>; // { [key: string]: IArgument };

export interface ICommand {
  commandArgs: IArgumentProperties;
  validate(...values: any[]): boolean;
  exampleInput: any;
  exampleOutput: any;
}

export interface IDescription {
  name: string;
  description: string;
  help: string;
  installProperties: IArgumentProperties;
  commands: KeyValue<ICommand>;
}
