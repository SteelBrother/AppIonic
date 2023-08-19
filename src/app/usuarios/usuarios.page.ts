import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  Allusers: any = []
  constructor(
    private Router:Router,
    private Http:HttpClient
  ) { }

  ngOnInit() {
    this.getUsers().subscribe(res => {
      console.log("res",res)
      this.Allusers = res
    })
  }

  getUsers()
  {
    return this.Http.get("assets/Files/Users.json")
                    .pipe(
                     map((res:any) =>
                     {
                      return res.data;
                     }))
  }

}
