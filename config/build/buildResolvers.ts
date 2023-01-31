import { ResolveOptions } from "webpack";

export function builderResolvers(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
