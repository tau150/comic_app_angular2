import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe} from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',

})
export class ResultsComponent implements OnInit {

  searchTerm:string;
  heroes:Heroe[]=[];
  

  constructor( private _heroesService:HeroesService,
               private router:Router,
               private activatedRoute:ActivatedRoute )

  {


}

seeHero(index:number){
  this.router.navigate(['/heroe', index]);
}

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
        this.searchTerm = params['searchTerm'];

    });

    this.heroes = this._heroesService.searchHeroe(this.searchTerm);

  }



}
