import { Component } from '@angular/core';

@Component({
  selector: 'brand',
  template: `
  <h1>Company Factory</h1>
  <ul>
  <li (click)="onClick1()" *ngIf="displayT"><h2>Tricon</h2></li>
  <div *ngIf="boolT">
  <p>Name: {{companys[0].name}}</p>
  <p>Link: {{companys[0].link}}</p>
  <p>Logo: &#9827;</p>
  <p>Type: {{companys[0].typee}}</p>
  <button (click)="removeT()">Remove</button>
  </div>
  <li (click)="onClick2()" *ngIf="displayG"><h2>Genpact</h2></li>
  <div *ngIf="boolG">
  <p>Name: {{companys[1].name}}</p>
  <p>Link: {{companys[1].link}}</p>
  <p>Logo: &#9824;</p>
  <p>Type: {{companys[1].typee}}</p>
  <button (click)="removeG()">Remove</button>
  </div>
  <li (click)="onClick3()" *ngIf="displayD"><h2>DeltaX</h2></li>
  <div *ngIf="boolD">
  <p>Name: {{companys[2].name}}</p>
  <p>Link: {{companys[2].link}}</p>
  <p>Logo: &#9829;</p>
  <p>Type: {{companys[2].typee}}</p>
  <button (click)="removeD()">Remove</button>
  </div>
  <li (click)="onClick4()" *ngIf="displayO"><h2>Oracle</h2></li>
  <div *ngIf="boolO">
  <p>Name: {{companys[3].name}}</p>
  <p>Link: {{companys[3].link}}</p>
  <p>Logo: &#9830;</p>
  <p>Type: {{companys[3].typee}}</p>
  <button (click)="removeO()">Remove</button>
  </div>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class BrandComponent {
  name = 'Angular';
  public boolT = false;
  public boolG = false;
  public boolD = false;
  public boolO = false;
  public displayT = true;
  public displayG = true;
  public displayD = true;
  public displayO = true;
  onClick1(){
    this.boolT = true;
  }
  onClick2(){
    this.boolG = true;
  }
  onClick3(){
    this.boolD = true;
  }
  onClick4(){
    this.boolO = true;
  }
  removeT(){
    this.displayT = false;
    this.boolT = false;
  }
  removeG(){
    this.displayG = false;
    this.boolG = false;
  }
  removeD(){
    this.displayD = false;
    this.boolD = false;
  }
  removeO(){
    this.displayO = false;
    this.boolO = false;
  }
  companys = [ {
    name: 'Tricon Infotech Pvt Ltd',
    link: 'www.triconinfotech.com',
    logo: '',
    typee: 'Software Company'
  }, {
    name: 'Genpact Pvt Ltd',
    link: 'www.genpact.com',
    logo: '',
    typee: 'Software Company'
  }, {
    name: 'DeltaX Pvt Ltd',
    link: 'www.deltax.com',
    logo: '',
    typee: 'Software Company'
  }, {
    name: 'Oracle Pvt Ltd',
    link: 'www.oracle.com',
    logo: '',
    typee: 'Software Company'
  } ]
}