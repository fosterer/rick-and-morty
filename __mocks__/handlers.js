import { graphql } from "msw";
import exampleData from "./api-response-1.json";

export const handlers = [
  graphql.query("myQuery", (req, res, ctx) => {
    return res(ctx.data(exampleData));
  }),
];
