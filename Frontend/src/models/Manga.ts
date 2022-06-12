export class Manga {
  public _id: string;
  public mangaName: string;
  public mangaDescription: string;
  public mangaDemography: string;
  public mangaGender: string;
  public mangaPrecio: Number;
  public imagePath : string;

  constructor(
    _id: string,
    mangaName: string,
    mangaDescription: string,
    mangaDemography: string,
    mangaGender: string,
    mangaPrecio: Number,
    imagePath : string
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
