import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { v4 as uuidv4 } from 'uuid';
import { Post } from '../../interfaces/post.interface';
import { AgregarPost } from '../store/posts.actions';


@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {

  nombre: string = 'Angular';
  descripcion: string = 'Framework de Js'

  constructor( 
    private toastr: ToastrService, 
    private store: Store 
    ) { }

  ngOnInit() {
  }

  agregarPost() {
    const hasName = !!this.nombre
    const hasDescription = !!this.descripcion

    if(!hasName && !hasDescription)  return this.toastr.error('Ambos campos son obligatorios', 'Error')
    
    const post: Post = {
      id: uuidv4(),
      nombre: this.nombre,
      descripcion: this.descripcion
    }

    this.store.dispatch(new AgregarPost(post))

    this.toastr.success(`El post ${this.nombre.toUpperCase()} fue agregado`, 'Proceso Exitoso')

    this.resetForm();
  }

  resetForm() {
    this.nombre = '';
    this.descripcion = '';
  }


 }