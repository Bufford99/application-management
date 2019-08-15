import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availability'
})
export class AvailabilityPipe implements PipeTransform {

  transform(data: number, args?: any): string {
    const availability = {
      '0': 'Unavailable',
      '1': 'All-day',
      '2': 'Mornings',
      '3': 'Nights'
    }
    
    return availability[data];
  }

}
