import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'sortnumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(value: number[], args?:string): unknown {

    if(args === 'asc'){
      return value.sort((a, b)=>a-b)
    }
    if(args === 'dsc'){
      return value.sort((a, b)=>b-a)
    }

    return value.sort((a, b)=>a-b)

    //return value.sort(function(a, b){
    //  return a-b
   // })
    
    //return value.sort(this.useMeToSortNumber)

    //return value.sort((a, b) => a-b);
  }

  /* useMeToSortNumber(a, b){
    return b-a
  }
 */
}
