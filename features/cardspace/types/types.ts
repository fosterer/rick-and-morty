export interface Character {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
}

interface Characters {
  results: Character[];
}

export interface Location {
  name: string;
  type: string;
  dimension: string;
}

export interface Episode {
  name: string;
  air_date: string;
  episode: string;
}

interface Episodes {
  results: Episode[];
}

interface Locations {
  results: Location[];
}

export interface RickAndMortyQuery {
  characters: Characters | null;
  episodes: Episodes | null;
  locations: Locations | null;
}
