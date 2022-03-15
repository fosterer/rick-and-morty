import { graphql } from "msw";
import charactersTestData from "./api-characters-1.json";
import episodesTestData from "./api-episodes-1.json";
import locationsTestData from "./api-locations-1.json";

export const handlers = [
  graphql.query("useCharactersDataQuery", (req, res, ctx) => {
    return res(ctx.data(charactersTestData));
  }),
  graphql.query("useEpisodesDataQuery", (req, res, ctx) => {
    return res(ctx.data(episodesTestData));
  }),
  graphql.query("useLocationsDataQuery", (req, res, ctx) => {
    return res(ctx.data(locationsTestData));
  }),
];
