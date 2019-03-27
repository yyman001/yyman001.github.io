interface RootObject {
  tiles: Tile[];
}

interface Tile {
  id: number;
  properties: Property[];
  terrain: number[];
}