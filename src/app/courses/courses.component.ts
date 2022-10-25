import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = "List of courses";
  List=['Maths','Physic','Literature','Course4','Course5','Course6'];
  constructor(private router:Router) { }

  ngOnInit() {
    this.List.forEach(element => {
      console.log(element);
    });
}
goToCourse(){
  this. router. navigate(['./course.componenet.html']);
}
}
