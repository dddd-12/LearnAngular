import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myWord'})
export class myWordPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if(args.length < 2){
      args = ['<--', '--<<<'];
    }
    return args[0] + ' ' + value + ' ' + args[1];
  }
}