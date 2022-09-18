import { Pipe, PipeTransform } from '@angular/core';
import { ImageDetail } from './types';

@Pipe({
  name: 'filterimages'
})
export class FilterimagesPipe implements PipeTransform {
  transform(items: ImageDetail[], laptop: string): ImageDetail[] {
    if(laptop === 'all'){ return items }
    else{
      return items.filter(item =>{
        return item.brand === laptop;
      });
    }
  }

}
