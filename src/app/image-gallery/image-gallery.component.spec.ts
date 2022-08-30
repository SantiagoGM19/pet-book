import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterimagesPipe } from '../filterimages.pipe';
import { ImageService } from '../image.service';
import { Pipe, PipeTransform } from '@angular/core';

import { GalleryComponent } from './image-gallery.component';

describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {

    @Pipe({ name: 'filterimages' })
    class MockFilterImagesPipe implements PipeTransform {
      transform(items: any[], laptop: string)  {
        //Do stuff here, if you want
        return items
      }
    }

    const mockImageService = jasmine.createSpyObj(['getImages', 'getImage'])
    TestBed.configureTestingModule({
      declarations: [GalleryComponent, MockFilterImagesPipe],
      providers: [
        {
          provide: ImageService,
          useValue: mockImageService
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
