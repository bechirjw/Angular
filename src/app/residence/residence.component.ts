import { Component } from '@angular/core';
import { Residence } from '../models/residence';
import { ServiceService } from '../service.service';

@Component({  
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  constructor (private rs:ServiceService){}
 color !: string;
 dispo !:string;
  getStatusClass(status: string): string {
    switch (status) {
      case 'Disponible': return 'badge-success';
      case 'Vendu': return 'badge-danger';
      case 'En Construction': return 'badge-warning';
      default: return 'badge-secondary';
    }
  }
  listResidences !: Residence[] ;
  likee (i:number){
  
 this.listResidences[i].like++
  }
  ngOnInit(){
    this.rs.getResidences().subscribe(
      (data) => this.listResidences = data
    )
  }
  delete( id :number){
    this.rs.deleteResidence(id).subscribe(
      ()=> this.ngOnInit()
    )
  }
  /*listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"https://www.amc-archi.com/mediatheque/8/4/4/000343448_large/photo-23365-1393972-k4-k1-3222883-jpg.jpg", status: "Disponible",like :0},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"https://wallpaperaccess.com/full/4967739.jpg", status:
    "Disponible" ,like:0},
    {id:3,"name": "El Arij",
    "address":"Rades","image":"https://th.bing.com/th/id/OIP.0MVgnBrmSbtDx0NT8hZAugHaHk?rs=1&pid=ImgDetMain", status:
    "Vendu",like:0},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"https://th.bing.com/th/id/OIP.WGksD0bDoLgeQf94WVgkRwHaE8?rs=1&pid=ImgDetMain", status: "En Construction",like:0}
    ];*/

}
