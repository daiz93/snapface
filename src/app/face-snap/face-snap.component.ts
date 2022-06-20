import { Component , OnInit, Input} from '@angular/core';

import {FaceSnap} from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})


export class FaceSnapComponent  {

@Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  dateCreate!: Date;
  snaps!:number;
  imageUrl!:string;
  snaped!:boolean;
  buttonText!:string;


  ngOnInit(){

    this.buttonText = 'Oh snap';
  }

  onAddSnap()
  {
    this.faceSnap.snaps ++;
    this.buttonText = 'Oups Snaped';
  }

  onUndoSnap()
  {
    this.faceSnap.snaps --;
    this.buttonText = 'Oh snap';
  }

  onSnaped()
  {
    if (this.buttonText === 'Oh snap')
    {
      this.onAddSnap();
    
    }
    else
    {

      var r=confirm("Voulez-vous supprimer votre snap ?");
      if (r===true)
      {
        this.onUndoSnap();
      }
 
     // alert("Voulez-vous supprimer votre snap ?"? this.onUndoSnap() :this.onAddSnap());

    }
    
  }

}
