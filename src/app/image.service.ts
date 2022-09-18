import { Injectable } from '@angular/core'
@Injectable()
export class ImageService {
    allImages = [];

    getImages() {
        this.allImages = Imagesdelatils.slice(0)
        return this.allImages;
    }

    getImage(id: number) {
        return Imagesdelatils.slice(0).find(Images => Images.id === id)
    }
}
const Imagesdelatils = [
    { 'id': 1, 'brand': 'perro', 'url': 'assets/images/perro1.jpg' },
    { 'id': 2, 'brand': 'perro', 'url': 'assets/images/perro2.jpg' },
    { 'id': 3, 'brand': 'gato', 'url': 'assets/images/gato1.jpg' },
    { 'id': 4, 'brand': 'gato', 'url': 'assets/images/gato2.jpeg' },
    { 'id': 5, 'brand': 'perro', 'url': 'assets/images/perro3.jpg' },
]
