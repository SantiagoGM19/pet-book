import { Component } from '@angular/core';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router'
import { ImageDetail } from '../types';

@Component({
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailComponent {
  image:ImageDetail

  constructor(private imageService: ImageService,
    private route: ActivatedRoute) { }

  ngOnInit(){
    this.image = this.imageService.getImage(
      this.route.snapshot.params['id']
    )
  }
}
