import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterimagesPipe } from '../filterimages.pipe';
import { ImageService } from '../image.service';
import { Pipe, PipeTransform } from '@angular/core';

import { GalleryComponent } from './image-gallery.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageDetailComponent } from '../image-details/image-details.component';
import { By } from '@angular/platform-browser';

describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let ImageServiceInject: ImageService;

  beforeEach(async(() => {

    @Pipe({ name: 'filterimages' })
    class MockFilterImagesPipe implements PipeTransform {
      transform(items: any[], laptop: string): any {
        if (laptop === 'all') { return items } else
          return items.filter(item => {
            return item.brand === laptop;
          });
      }
    }

    //const mockImageService = jasmine.createSpyObj(['getImages', 'getImage'])


    TestBed.configureTestingModule({
      declarations: [GalleryComponent, MockFilterImagesPipe],
      providers: [
        {
          provide: ImageService
        }
      ]
    })
      .compileComponents();
    ImageServiceInject = TestBed.inject(ImageService);
    spyOn(ImageServiceInject, 'getImages').and.returnValue([
      { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },
      { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
      { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
      { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
      { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
    ])
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //btnPerros = fixture.debugElement.queryAll(By.css('.btn'))[1];
    //btnGatos = fixture.debugElement.queryAll(By.css('.btn'))[2];
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe filtrar todas las mascotas al hacer click en el boton All', () => {
    let btnAll = fixture.debugElement.queryAll(By.css('button.btn'))[0];
    btnAll.nativeElement.click();
    fixture.detectChanges();
    let imagenes = fixture.debugElement.queryAll(By.css('.img'));
    expect(imagenes.length).toEqual(5);
  })

  it('Debe filtrar todos los perros unicamente al hacer click en el boton Perro', () => {
    let btnPerro = fixture.debugElement.queryAll(By.css('button.btn'))[1];
    btnPerro.nativeElement.click();
    fixture.detectChanges();
    let imagenes = fixture.debugElement.queryAll(By.css('.img'));
    expect(imagenes.length).toEqual(3);
  })

  it('Debe filtrar todos los gatos unicamente al hacer click en el boton Gato', () => {
    let btnGato = fixture.debugElement.queryAll(By.css('button.btn'))[2];
    btnGato.nativeElement.click();
    fixture.detectChanges();
    let imagenes = fixture.debugElement.queryAll(By.css('.img'));
    expect(imagenes.length).toEqual(2);
  })

  it('Debe dirigirse y mostrar la imagen de la mascota en otra pagina al dar click en la imagen', () => {
    
  })
});
