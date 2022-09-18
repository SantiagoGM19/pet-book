import { Component, OnChanges } from '@angular/core';
import { ImageService } from '../image.service';
import { ImageDetail } from '../types';

@Component({
  selector: 'app-imagegallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})

export class GalleryComponent implements OnChanges {
  images:ImageDetail[];
  filterBy?: string = 'all'
 allImages:ImageDetail[] = [];

  constructor(private imageService: ImageService) {
    this.allImages = this.imageService.getImages();
  }
  ngOnChanges() {
    this.allImages = this.imageService.getImages();
  }
}
