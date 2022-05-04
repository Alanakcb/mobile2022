export interface CardSocialProps {
    children: JSX.Element
  }
  export interface CardProps {
    data: {
      id: number,
      nome: string,
      data: Date,
      titulo: string,
      mensagem: string,
      topico: {
        id: number,
        comentario: string
      }[]
    }
  }