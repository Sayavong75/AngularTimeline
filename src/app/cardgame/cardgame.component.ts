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
    this.route.paramMap.subscribe(params => {
      this.cardDataService.getCardList(+params.get('timelineId')).subscribe(cardList => {
          console.log(cardList);
            this.cardList = cardList;
            this.cardListLength = this.cardList.length - 1;
            this.cardToplay = this.randomCard(this.cardList);
          });
    });
    // CAS POUR OK + KO
    // constructor(private cardDataService: CarddataService) {
    //   cardDataService.getCardList().subscribe(cardList => {
    //     console.log(cardList);
    //     this.cardList = cardList;
    //   });
    this.cardDateForm = this.formBuilder.group ({
      dateToGuess: ''
    });
  }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.cardDataService.getCardList(+params.get('timelineId')).subscribe(cardList => {
    //       console.log(cardList);
    //         this.cardList = cardList;
    //         this.cardListLength = this.cardList.length - 1;
    //         this.cardToplay = this.randomCard(this.cardList);
    //       });
    //       this.cardDateForm = this.formBuilder.group({
    //         dateToGuess: ''
    //       });
    // });
  }

  randomCard(cardList): CardInterface {
    return cardList[this.getRandomInt(this.cardListmin, this.cardListLength)];
  }

  getRandomInt(cardListmin, cardListLength) {
    let randomNum = Math.floor(Math.random() * (Math.floor(cardListLength - cardListmin + 1)) + cardListmin);
    console.log("nombre d'objets :" + cardListLength);
    return randomNum;
  }

  onGuess(dateInput) {
    var dateCardToPlay = this.cardToplay.date;
    var yearCardToPlay = dateCardToPlay.substring(0, 4);
    console.log(yearCardToPlay);
    let yearForm = dateInput.dateToGuess;
    if (yearCardToPlay == yearForm) {
      this.guessedCardList.push(this.cardToplay);
      this.cardList.splice(this.cardList.indexOf(this.cardToplay), 1);
      this.cardToplay = this.randomCard(this.cardList);
      console.log('Year values are matching');
    } else
    {
      console.log('Year values are not matching');
    }

    // let dateForm = Date.parse(this.cardToplay.date);
    // if (dateInput == dateForm {
    //   this.guessedCardList.push(this.cardToplay);
    //   this.cardList.splice(this.cardList.indexOf(this.cardToplay), 1);}


  }
}