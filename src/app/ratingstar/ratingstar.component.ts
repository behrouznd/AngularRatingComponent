import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratingstar',
  templateUrl: './ratingstar.component.html',
  styleUrls: ['./ratingstar.component.css']
})
export class RatingstarComponent implements OnInit {

  @Input() lengthRate:number = 5;
  starsRating : number[] = new Array(this.lengthRate);
  @Input('DefaultValue') currentRate: number =3;
  mouseOverIndex: number=0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.lengthRate);
    if(this.lengthRate > 0)
      this.starsRating = new Array(this.lengthRate);
    else
      this.starsRating = new Array(5);

    if(this.currentRate < 0)
      this.currentRate = 0;
    else if(this.currentRate > this.lengthRate)
      this.currentRate = this.lengthRate;
  }

  mouseEnter(indx : number){
    //console.log(indx);
    this.mouseOverIndex = indx + 1;
  }

  mouseLeave(){
    this.mouseOverIndex=0;
    //console.log(this.mouseOverIndex);
  }

  click(indx:number){
    this.currentRate = indx + 1;
  }
}
