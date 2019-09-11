import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hello-form',
  templateUrl: './hello-form.component.html',
  styleUrls: ['./hello-form.component.css']
})
export class HelloFormComponent implements OnInit {

  constructor(private heroService: HeroService) {
  }

  heros: Hero[] = [];

  name: string;
  img: string;

  ngOnInit() {
    this.name = '';
    this.img = '';
  }

  doSubmit() {
    console.log(this.name + ',' + this.img);
    this.heros.push(new Hero(this.name, this.img));
    this.name = '';
    this.img = '';
  }
}
