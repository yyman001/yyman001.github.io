// https://doc.mapeditor.org/en/stable/reference/json-map-format/#tileset
interface Tileset {
  columns: number;
  firstgid: number;
  image: string;
  imageheight: number;
  imagewidth: number;
  margin: number;
  name: string;
  properties: Property[];
  spacing: number;
  tilecount: number;
  tileheight: number;
  tilewidth: number;
}
