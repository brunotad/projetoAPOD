class Model {
  constructor(imagem){
      this._imagem = imagem
  }

  get modelo(){
      return {
        imagem: this._imagem
      }
  }

}