export class Manga {
  public _id: String;
  public mangaName: String;
  public mangaDescription: String;
  public mangaDemography: String;
  public mangaGender: String;
  public mangaPrecio: Number;
  public imagePath : String;

  constructor(
    _id: String,
    mangaName: String,
    mangaDescription: String,
    mangaDemography: String,
    mangaGender: String,
    mangaPrecio: Number,
    imagePath : String
  ) {
    this._id = _id;
    this.mangaName = mangaName;
    this.mangaDescription = mangaDescription;
    this.mangaDemography = mangaDemography;
    this.mangaGender = mangaGender;
    this.mangaPrecio = mangaPrecio;
    this.imagePath = imagePath;
  }
}
