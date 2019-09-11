import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-hello-form1',
  templateUrl: './hello-form1.component.html',
  styleUrls: ['./hello-form1.component.css']
})
export class HelloForm1Component implements OnInit {
  // tao cac form controls , khai bao cac truong can lam viec trong form.
  // kem thong tin can valiate.
  formControls = {
    name: [null],
    description: [null]
  };
  // quan ly cac form controls
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private heroService: HeroService) {
  }

  ngOnInit() {
    // tao form group bang viec su dung form builder.
    this.formGroup = this.formBuilder.group(this.formControls);
  }

  doSave() {
    this.heroService.save(new Hero(this.formGroup.get('name').value, this.formGroup.get('description').value ));
    window.alert('success !');
  }
}
