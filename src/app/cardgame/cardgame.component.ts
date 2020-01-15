import { Component, OnInit } from '@angular/core';
import { CardInterface } from '../card-interface';
import { FormBuilder } from '@angular/forms';
import { CarddataService } from '../carddata.service';
import { ActivatedRoute } from '@angular/router';
import { TimelineInterface } from '../timeline-interface';

@Component({
  selector: 'app-cardgame',
  templateUrl: './cardgame.component.html',
  styleUrls: ['./cardgame.component.css']
})
export class CardgameComponent implements OnInit {

  cardDateForm;
  cardList: CardInterface[];
  cardListLength : number ;
  cardListmin : number = 0;
  cardToplay :CardInterface ;
  guessedCardList: CardInterface[]  = [];
  timelineList: TimelineInterface[];
  timeline : TimelineInterface;

  constructor(private cardDataService: CarddataService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    // CAS POUR OK + KO
    // constructor(private cardDataService: CarddataService) {
    //   cardDataService.getCardList().subscribe(cardList => {
    //     console.log(cardList);
    //     this.cardList = cardList;
    //   });
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.cardDataService.getCardList(+params.get('timelineId')).subscribe(cardList => {
          console.log(cardList);
            this.cardList = cardList;
            this.cardListLength = this.cardList.length - 1;
            this.cardToplay = this.randomCard(this.cardList);
          });
          this.cardDateForm = this.formBuilder.group({
            dateToGuess: ''
          });
    });
  }

  randomCard(cardList){       
    console.log("max = " + this.cardListLength);
    return cardList[this.getRandomInt(this.cardListmin, cardList.length)];
  }

  getRandomInt(cardListmin, cardListLength){

    // return Math.floor(Math.random() * (Math.floor(cardListLength - cardListmin)) + cardListmin);
    let randomNum = Math.floor(Math.random() * (Math.floor(cardListLength - cardListmin)) + cardListmin);
    console.log("random calcul : " + randomNum);
    return randomNum;
    // return Math.floor(Math.random() * (Math.floor(cardListLength - cardListmin)) + cardListmin);
    // return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onGuess(dateToGuess) {

    let dateForm = Date.parseDate(this.cardToplay.date);
    if (dateToGuess == dateForm {
      this.guessedCardList.push(this.cardToplay);
      this.cardList.splice(this.cardList.indexOf(this.cardToplay), 1);
  
    })


    console.log (dateToGuess);

  }
}