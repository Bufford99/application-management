import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asList'
})
export class AsListPipe implements PipeTransform {

  transform(value: object, args?: any): string[] {
    return Object.values(value);
  }

}
