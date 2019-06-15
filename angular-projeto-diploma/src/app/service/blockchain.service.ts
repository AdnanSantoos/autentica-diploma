import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  constructor(public http: HttpClient) { }
  urlLink:string = 'http://localhost:3000/api';


  public getTransaction(id){
    let api_url =  this.urlLink+'/SampleTransaction/'+id.value;
    return this.http.get(api_url);
  }

  public getDiploma(){
    let api_url =  this.urlLink+'/Diploma';
    return this.http.get(api_url);
  }

  public getFaculdade(){
    let api_url =  this.urlLink+'/Faculdade';
    return this.http.get(api_url);
  }

}

