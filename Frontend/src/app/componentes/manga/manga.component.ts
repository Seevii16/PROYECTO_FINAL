import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { MangasService } from "../../services/mangas.service";
@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {
  
  id!: string;

  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private mangasService : MangasService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.id = params['id']
      this.mangasService.getManga(this.id).subscribe(
        res => console.log(res)
        
      )
    }) 
  }

}
