export class Message {
  constructor(public author: string, public message: string, public image: string) {
  }
}

export interface MessageData {
  author: string | null,
  message: string,
  image: File | null
}
