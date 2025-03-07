import {Injectable} from '@angular/core';
import {IAnforderung} from '../Models/Interfaces/IAnforderung';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() {

  }

  loadData(): IAnforderung[] {
    return [];
  }

  saveData(data: IAnforderung[]) {

  }
}
