export class Usuario {
    public _id: string;
    public usuarioNombre: string;
    public usuarioApellido1: string;
    public usuarioApellido2: string;
    public usuarioEmail: string;
    public usuarioTel: Number;
    public usuarioDireccion : string;
  
    constructor(
      _id: string,
      usuarioNombre: string,
      usuarioApellido1: string,
      usuarioApellido2: string,
      usuarioEmail: string,
      usuarioTel: Number,
      usuarioDireccion : string
    ) {
      this._id = _id;
      this.usuarioNombre = usuarioNombre;
      this.usuarioApellido1 = usuarioApellido1;
      this.usuarioApellido2 = usuarioApellido2;
      this.usuarioEmail = usuarioEmail;
      this.usuarioTel = usuarioTel;
      this.usuarioDireccion = usuarioDireccion;
    }
  }
  