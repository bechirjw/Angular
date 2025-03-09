import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../models/residence';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-rdetail',
  templateUrl: './rdetail.component.html',
  styleUrls: ['./rdetail.component.css']
})
export class RdetailComponent {
  getStatusClass(status: string): string {
    switch (status) {
      case 'Disponible': return 'badge-success';
      case 'Vendu': return 'badge-danger';
      case 'En Construction': return 'badge-warning';
      default: return 'badge-secondary';
    }
  }
  likee (i:number){
 this.listResidences[i].like++
  }
  listResidences!:Residence[] ;
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
 

 /* constructor(private act:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.act.snapshot.params['id'];  
  }*/
 


    id !: number; 
    constructor( private rs:ServiceService, private Act:ActivatedRoute){}
    residence!: Residence;
    ngOnInit(){
      this.id=this.Act.snapshot.params['id']
      console.log(this.id)
      this.rs.getResidenceById(this.id).subscribe( 
        (data) => this.residence = data
      )
    }
}


