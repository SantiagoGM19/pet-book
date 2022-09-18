import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './image-gallery/image-gallery.component';
import { ImageDetailComponent } from './image-details/image-details.component';
import { FilterimagesPipe } from './filterimages.pipe';
import { ImageService } from './image.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageDetailComponent,
    FilterimagesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //NgbModule
  ],
  providers: [ImageService, FilterimagesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
