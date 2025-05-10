import {Component, Input} from '@angular/core';
import {IAnforderung} from '../../Models/Interfaces/IAnforderung';
import {DialogService} from '../../Services/dialog.service';
import {DataService} from '../../Services/data.service';
import {AnforderungDialogViewModel} from '../../Models/ViewModels/AnforderungDialogViewModel';
import {ConfirmDialogViewModel} from '../../Models/ViewModels/ConfirmDialogViewModel';
import {TaskComponent} from '../task/task.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-anforderung',
  imports: [
    TaskComponent,
    NgForOf
  ],
  templateUrl: './anforderung.component.html',
  styleUrl: './anforderung.component.css'
})
export class AnforderungComponent {

  tasks = ["hi", "opfer", "schwanz", "cock", "Nudel"];

  @Input() anforderung!: IAnforderung;
  isMenuVisible: boolean = false;

  constructor(private dataService: DataService, private dialogService: DialogService) {

  }

  onBtnMenuClicked() {
    this.isMenuVisible = true;
  }

  onMenuBackgroundClicked() {
    this.isMenuVisible = false;
  }

  onBtnEditClicked() {
    let anforderungDialogViewModel: AnforderungDialogViewModel = {
      anforderung: this.anforderung,
      onSaveClick: this.onEditSaveClicked,
      onCancelClick: this.onEditCancelClicked
    };
    this.dialogService.showAnforderungDialog(anforderungDialogViewModel)
  }

  onBtnDeleteClicked() {
    let confirmDialogViewModel: ConfirmDialogViewModel = {
      title: "",
      beschreibung: "",
      onConfirmClicked: this.onDeleteConfirmClicked,
      onCancelClicked: this.onDeleteCancelClicked
    }

    this.dialogService.showConfirmDialog(confirmDialogViewModel);
  }

  onBtnAddTaskClicked() {
    this.dataService.addEmptyTaskToAnforderungByAnforderungId(this.anforderung.id!);
  }

  onEditSaveClicked = (anforderung: IAnforderung) => {
    this.dataService.editAnforderung(anforderung);
    this.dialogService.isAnforderungDialogVisible = false;
  }

  onEditCancelClicked = () => {
    this.dialogService.isAnforderungDialogVisible = false;
  }

  onDeleteConfirmClicked = (id?: number) => {
    if(id !== undefined) {
      this.dataService.deleteAnforderungById(id);
    }
    this.dialogService.isConfirmDialogVisible = false;
  }

  onDeleteCancelClicked = () => {
    this.dialogService.isConfirmDialogVisible = false;
  }

}
