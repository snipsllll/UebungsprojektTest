import {Component, Input, OnInit} from '@angular/core';
import {AnforderungDialogViewModel} from '../../Models/ViewModels/AnforderungDialogViewModel';
import {IAnforderung} from '../../Models/Interfaces/IAnforderung';

@Component({
  selector: 'app-anforderung-dialog',
  imports: [],
  templateUrl: './anforderung-dialog.component.html',
  styleUrl: './anforderung-dialog.component.css'
})
export class AnforderungDialogComponent implements OnInit{
  @Input() viewModel!: AnforderungDialogViewModel;
  private oldAnforderung?: IAnforderung;

  constructor() {

  }

  ngOnInit() {
    this.viewModel.anforderung = {
      id: this.viewModel?.anforderung?.id ?? -1,
      data: {
        title: this.viewModel?.anforderung?.data.title ?? "",
        beschreibung: this.viewModel?.anforderung?.data.beschreibung ?? "",
        tasks: this.viewModel?.anforderung?.data.tasks ?? []
      }
    }

    this.oldAnforderung = {
      id: this.viewModel?.anforderung?.id ?? -1,
      data: {
        title: this.viewModel?.anforderung?.data.title ?? "",
        beschreibung: this.viewModel?.anforderung?.data.beschreibung ?? "",
        tasks: this.viewModel?.anforderung?.data.tasks ?? []
      }
    }
  }

  onBtnSaveClicked() {
    if(this.canSave()) {
      this.viewModel?.onSaveClick(this.viewModel!.anforderung!);
    }
  }

  onBtnCancelClicked() {
    this.viewModel?.onCancelClick();
  }

  private canSave() {
    return this.hasChanged();
  }

  private hasChanged() {
    return this.viewModel?.anforderung?.data.title !== this.oldAnforderung?.data.title ? true
      : this.viewModel?.anforderung?.data.beschreibung !== this.oldAnforderung?.data.beschreibung;
  }
}
