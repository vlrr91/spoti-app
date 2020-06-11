import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any[], index: number): string {
    if (images && images[index]) {
      return images[index].url;
    }
    return 'assets/images/noimage.jpg';
  }
}
