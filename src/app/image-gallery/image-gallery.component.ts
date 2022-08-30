import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-imagegallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})

export class GalleryComponent implements OnChanges {
  images:any[];
  filterBy?: string = 'all'
 allImages:any[] = [];

  constructor(private imageService: ImageService) {
    this.allImages = this.imageService.getImages();
  }
  ngOnChanges() {
    this.allImages = this.imageService.getImages();
  }
}   
