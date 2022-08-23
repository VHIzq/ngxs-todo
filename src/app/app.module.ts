import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ToastrModule } from 'ngx-toastr';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';


import { ListarPostComponent } from './components/listar-post/listar-post.component';
import { NuevoPostComponent } from './components/nuevo-post/nuevo-post.component';
import { PostState } from './components/store/posts.state';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,  
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    NgxsModule.forRoot([PostState], {}),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  
  ],
  declarations: [ AppComponent, ListarPostComponent, NuevoPostComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
