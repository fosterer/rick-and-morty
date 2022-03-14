export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

export type Character = {
  __typename?: "Character";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  species?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["String"]>;
  origin?: Maybe<Location>;
  location?: Maybe<Location>;
  image?: Maybe<Scalars["String"]>;
  episode: Array<Maybe<Episode>>;
  created?: Maybe<Scalars["String"]>;
};

export type Characters = {
  __typename?: "Characters";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: "Episode";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  air_date?: Maybe<Scalars["String"]>;
  episode?: Maybe<Scalars["String"]>;
  characters: Array<Maybe<Character>>;
  created?: Maybe<Scalars["String"]>;
};

export type Episodes = {
  __typename?: "Episodes";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  name?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  species?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  gender?: InputMaybe<Scalars["String"]>;
};

export type FilterEpisode = {
  name?: InputMaybe<Scalars["String"]>;
  episode?: InputMaybe<Scalars["String"]>;
};

export type FilterLocation = {
  name?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  dimension?: InputMaybe<Scalars["String"]>;
};

export type Info = {
  __typename?: "Info";
  count?: Maybe<Scalars["Int"]>;
  pages?: Maybe<Scalars["Int"]>;
  next?: Maybe<Scalars["Int"]>;
  prev?: Maybe<Scalars["Int"]>;
};

export type Location = {
  __typename?: "Location";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  dimension?: Maybe<Scalars["String"]>;
  residents: Array<Maybe<Character>>;
  created?: Maybe<Scalars["String"]>;
};

export type Locations = {
  __typename?: "Locations";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: "Query";
  character?: Maybe<Character>;
  characters?: Maybe<Characters>;
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  location?: Maybe<Location>;
  locations?: Maybe<Locations>;
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
  episode?: Maybe<Episode>;
  episodes?: Maybe<Episodes>;
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
};

export type QueryCharacterArgs = {
  id: Scalars["ID"];
};

export type QueryCharactersArgs = {
  page?: InputMaybe<Scalars["Int"]>;
  filter?: InputMaybe<FilterCharacter>;
};

export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type QueryLocationArgs = {
  id: Scalars["ID"];
};

export type QueryLocationsArgs = {
  page?: InputMaybe<Scalars["Int"]>;
  filter?: InputMaybe<FilterLocation>;
};

export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type QueryEpisodeArgs = {
  id: Scalars["ID"];
};

export type QueryEpisodesArgs = {
  page?: InputMaybe<Scalars["Int"]>;
  filter?: InputMaybe<FilterEpisode>;
};

export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};
