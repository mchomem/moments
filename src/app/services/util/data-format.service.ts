import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataFormatService {

  constructor() { }

  redux(value: string, limit: number) {
    if (value.length > limit)
      return `${value.substring(0, limit)} ...`
    else
      return value
  }
}
