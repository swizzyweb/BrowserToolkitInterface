import { InstallableTool, Tool } from "../src";
import { ArgType, CommandOption, IDescription } from "../src/description";

//Data
export const expectedOutputDescription =
  '{"name":"MyTool","description":"This is a really good command for doing things","help":"Help... This should be updated to an object","installProperties":{"apiUrl":{"type":"string","values":["http://swizzyweb.com"],"shortDescription":"Installs MyTool","longDescritpion":"Installs my tool that can be used for doing stuff"},"duration":{"type":"number","values":[1,5,100,500,1000],"shortDescription":"Duration of timeout","longDescritpion":"The duration of timeout before a request fails"}},"commands":{"get":{"commandArgs":{"key":{"type":"any","values":[],"shortDescription":"Get record from db","longDescritpion":"Get record from db calling backend api"}},"exampleInput":{"key":"MyKey"},"exampleOutput":{"key":"MyKey","value":{"whatIsIt":"MyValue is this","whoCreatedIt":"Me Dummy!"}}}}}';

export const exampleGetInput = {
  key: "MyKey",
};

export const exampleGetOutput = {
  key: "MyKey",
  value: { whatIsIt: "MyValue is this", whoCreatedIt: "Me Dummy!" },
};

export const description: IDescription = {
  name: "MyTool",
  description: "This is a really good command for doing things",
  help: "Help... This should be updated to an object",
  installProperties: {
    apiUrl: {
      type: ArgType.string,
      values: ["http://swizzyweb.com"],
      shortDescription: "Installs MyTool",
      longDescritpion: "Installs my tool that can be used for doing stuff",
    },
    duration: {
      type: ArgType.number,
      values: [1, 5, 100, 500, 1000],
      shortDescription: "Duration of timeout",
      longDescritpion: "The duration of timeout before a request fails",
    },
  },
  commands: {
    get: {
      commandArgs: {
        key: {
          type: ArgType.any,
          values: [],
          shortDescription: "Get record from db",
          longDescritpion: "Get record from db calling backend api",
        },
      },
      //          acceptedValues: []
      exampleInput: exampleGetInput,
      exampleOutput: exampleGetOutput,
      validate: (...values) => {
        console.log("TODO: Implement");
        return true;
      },
    },
  },
};
