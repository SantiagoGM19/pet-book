import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, ParamMap, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ImageService } from '../image.service';

import { ImageDetailComponent } from './image-details.component';

describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;

  beforeEach(async(() => {

    const mockImageService = jasmine.createSpyObj(['getImages', 'getImage'])

    TestBed.configureTestingModule({
      declarations: [ ImageDetailComponent ],
      providers:[
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {params: {id: '1'},
          url: 'image/:id'}
          }
        },
        {
          provide: ImageService,
          useValue: mockImageService
        },
      ]
    })
    .compileComponents();
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
