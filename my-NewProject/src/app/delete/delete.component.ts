import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomServiceService } from '../custom-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: CustomServiceService,public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  ok(){
    this.service.deleteUser(this.data.id);
    this.dialogRef.close();
  }
  cancel(){
    
    this.dialogRef.close();
  }
}
