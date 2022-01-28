import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Livro } from 'src/livro';

@Component({
  selector: 'app-confirmation-box',
  templateUrl: './confirmation-box.component.html',
  styleUrls: ['./confirmation-box.component.sass']
})
export class ConfirmationBoxComponent implements OnInit {

  element!: Livro;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Livro,
    public dialogRef: MatDialogRef<ConfirmationBoxComponent>
  ) { }

  ngOnInit(): void {
  }

  confirmarAcao(){

  }
}
