import { Component } from '@angular/core';
import {DialogService} from './Services/dialog.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UebungsprojektTest';

  constructor(protected dialogService: DialogService) {

  }
}
