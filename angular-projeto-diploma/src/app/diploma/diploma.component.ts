import { Faculdade } from './../model/faculdade.model';
import { BlockchainService } from './../service/blockchain.service';
import { Diploma } from './../model/diploma.model';
import { Component, OnInit } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-diploma',
  templateUrl: './diploma.component.html',
  styleUrls: ['./diploma.component.css']
})

export class DiplomaComponent implements OnInit {

  diploma:Diploma
  faculdade:Faculdade
  base64:any
  file:File
  md5:any

  constructor( public blockchainService:BlockchainService) { }

  ngOnInit() {
    this.getDiploma();
    this.diploma = new Diploma();
    this.md5 = new Md5()
  }

  onSubmit(){

  }

  getDiploma(){
    return this.blockchainService.getFaculdade().subscribe(
      data =>{
        this.faculdade = data;
        console.log(this.faculdade)
      },
      error =>{
        alert(error)
      }
      )

  }

  onFileChange(event){
     this.file = event.target.files[0];
      var myReader:FileReader= new FileReader()

    myReader.onloadend = (e) => {
      this.base64 = myReader.result;
      console.log(this.md5.appendStr(this.base64).end());
    }
    myReader.readAsDataURL(this.file);
  }

}
