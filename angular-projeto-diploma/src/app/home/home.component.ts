import { BlockchainService } from './../service/blockchain.service';
import { AuthService } from './../service/auth.service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  resultadoPositivo:any;
  resultadoNegativo:any;

  constructor( private authservice:AuthService, private blockchainService:BlockchainService) { }

  ngOnInit() {
  }

  login(email,senha){
    this.authservice.login(email,senha);
  }

  getAutenticacao(hash){
    return this.blockchainService.getTransaction(hash).subscribe(
    data =>{
      this.resultadoPositivo = data;
    },
    error =>{
      this.resultadoNegativo = error;
    }
    )
  }
}
