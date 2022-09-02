import { Pipe, PipeTransform } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, ParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject } from 'rxjs';
import { GalleryComponent } from '../image-gallery/image-gallery.component';
import { ImageService } from '../image.service';

import { ImageDetailComponent } from './image-details.component';

describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;
  let activatedRoute;
  let ImageServiceInject: ImageService;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ ImageDetailComponent ],
      providers:[
        {
          provide: ImageService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot:{
              params:{}
            }
          }
        }
      ]
    })
    .compileComponents();
    ImageServiceInject = TestBed.inject(ImageService);
    spyOn(ImageServiceInject, 'getImage').and.returnValue({"id": 3, "brand": "gato", "url": "assets/images/gato1.jpg"})
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
