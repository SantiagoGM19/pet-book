import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ImageService } from '../image.service';
import { Component, Pipe, PipeTransform } from '@angular/core';

import { GalleryComponent } from './image-gallery.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';


describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let ImageServiceInject: ImageService;

  @Component({
    template: ''
  })
  class DummyComponent {

  }

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

    TestBed.configureTestingModule({
      declarations: [GalleryComponent, MockFilterImagesPipe, DummyComponent],
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([
          { path: 'image/:id', component: DummyComponent }
        ])
      ],
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

  it('Debe dirigirse y mostrar la imagen de la mascota en otra pagina al dar click en la imagen',
    async(inject([Router, Location], (router: Router, location: Location) => {
      fixture.debugElement.query(By.css('a')).nativeElement.click();
      fixture.whenStable().then(() => {
        expect(location.path()).toEqual('/image/1')
      });
    })));
});
