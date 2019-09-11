import {Component, OnInit} from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-hello-list',
  templateUrl: './hello-list.component.html',
  styleUrls: ['./hello-list.component.css']
})
export class HelloListComponent implements OnInit {

  constructor(private heroService: HeroService) {
  }

  heros: Hero[] = [];

  ngOnInit() {
    this.heros = this.heroService.list();
  }

}
