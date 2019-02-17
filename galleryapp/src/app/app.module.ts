import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //
import { HttpClientModule } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MultimediaDetailComponent } from './multimedia-detail/multimedia-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { RegisterComponent } from './register/register.component';
import { ClipsComponent } from './clips/clips.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    MultimediaDetailComponent,
    MessagesComponent,
    RegisterComponent,
    ClipsComponent,
    NgbModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
