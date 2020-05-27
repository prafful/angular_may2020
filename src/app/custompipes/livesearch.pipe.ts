import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'livesearch'
})
export class LivesearchPipe implements PipeTransform {

  transform(value: any, args?: any): unknown {
    if(!args){
      return value
    }

    return value.filter(v=>v.name.toLowerCase().includes(args.toLowerCase()))


  }

}
