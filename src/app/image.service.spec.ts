import { TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageService]
    });
    service = TestBed.inject(ImageService);
  });

  it('El servicio debe ser creado', () => {
    expect(service).toBeTruthy();
  });

  describe("Obtener imagenes", () => {
    it("Debe retornar todas las imagenes de mascotas", () => {
      let allImages = service.getImages();
      expect(allImages.length).toEqual(5);
    })
  })

  describe("Obtener imagen", ()=>{

    it("Debe retornar una imagen de un gato cuyo id exista", () => {
      let imagen = service.getImage(3);
      expect(imagen.brand).toEqual("gato");
    })

    it("Debe retornar una imagen de un perro cuyo id exista", () => {
      let imagen = service.getImage(2);
      expect(imagen.brand).toEqual("perro");
    })

    it("Debe retornar indefinido si el id no exite", () => {
      let imagen = service.getImage(300);
      expect(imagen).toEqual(undefined);
    })

  })


});
