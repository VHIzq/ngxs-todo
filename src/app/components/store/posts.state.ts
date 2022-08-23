import { Injectable } from '@angular/core';
import { StateContext } from '@ngxs/store';
import { Action, State } from '@ngxs/store';
import { AgregarPost, EliminarPost } from './posts.actions';
import { PostStateModel } from './posts.model';

@State<PostStateModel>({
  name: 'posts',
  defaults: {
    listPostrs: [],
  },
})
@Injectable()
export class PostState {

  @Action(AgregarPost) agregarPost(
    { getState, setState }: StateContext<PostStateModel>,
    { payload }: AgregarPost
  ) {
    const state = getState();
    setState({
      ...state,
      listPostrs: [...state.listPostrs, payload],
    });
  }

  @Action(EliminarPost) eliminarPost(
   {getState, patchState}: StateContext<PostStateModel>, 
   { id } : EliminarPost
   ){ 
      patchState({
        listPostrs: [
          ...getState().listPostrs.filter(post => post.id !== id)
        ]
      })
   }
  
 /*  @Action(AgregarPost) agregar(
    { getState, patchState }: StateContext<PostStateModel>,
    { payload }: AgregarPost
  ) {
    patchState({
      ...getState(),
      listPostrs: [...getState().listPostrs, payload],
    });
    console.log(payload);
  } */
}
