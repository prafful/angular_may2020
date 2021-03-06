import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortstring'
})
export class SortStringArrayPipe implements PipeTransform {

  transform(value: String[], args?: String): unknown {
    console.log(value);
    console.log(args);
    if(args === 'asc'){
      return value.sort()
    }
    if(args === 'dsc'){
      return value.sort().reverse()
    }

    return value.sort()
  }

}
