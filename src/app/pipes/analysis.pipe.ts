import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'analysis'
})
export class AnalysisPipe implements PipeTransform {

  transform(objects : any = []) {
    return Object.values(objects);
  }

}
