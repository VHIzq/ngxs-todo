import { Post } from "../../interfaces/post.interface";

export class AgregarPost {
  static readonly type = '[Post Page] AgregarPost'
  constructor(public payload: Post) {}
}

export class EliminarPost {
  static readonly type = '[Post Page] EliminarPost'
  constructor (public id: string) {}
}