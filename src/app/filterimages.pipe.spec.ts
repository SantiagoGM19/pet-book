
import { TestBed } from '@angular/core/testing';
import { FilterimagesPipe } from './filterimages.pipe';

describe('FilterimagesPipe', () => {

  let pipe : FilterimagesPipe
  let todasLasMascotas: any[]

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterimagesPipe]
    });
    pipe = TestBed.inject(FilterimagesPipe)
    todasLasMascotas = [
      { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },
      { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
      { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
      { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
      { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
    ];
  })

  it('crea una instancia', () => {
    expect(pipe).toBeTruthy();
  });


  it('debe filtrar todas las mascotas cuando laptop es all', () => {
    let mascotas = pipe.transform(todasLasMascotas, 'all')
    expect(mascotas.length).toEqual(5)
  })

  it('debe filtrar solo los perros cuando laptop es perro', () => {
    let mascotas = pipe.transform(todasLasMascotas, 'perro')
    expect(mascotas.length).toEqual(3)
  })

  it('debe filtrar todas las mascotas cuando laptop es gato', () => {
    let mascotas = pipe.transform(todasLasMascotas, 'gato')
    expect(mascotas.length).toEqual(2)
  })

  it('debe filtrar nada si laptop es distinto de all, perro o gato', () => {
    let mascotas = pipe.transform(todasLasMascotas, 'leon')
    expect(mascotas.length).toEqual(0)
  })

});
