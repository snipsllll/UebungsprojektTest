import { Component } from '@angular/core';
import {DialogService} from './Services/dialog.service';
import {AnforderungComponent} from './Components/anforderung/anforderung.component';

@Component({
  selector: 'app-root',
  imports: [
    AnforderungComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UebungsprojektTest';

  constructor(protected dialogService: DialogService) {

  }
}
