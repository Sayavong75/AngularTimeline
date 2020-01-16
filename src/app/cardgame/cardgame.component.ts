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
    this.cardDateForm = this.formBuilder.group ({
      dateToGuess: ''
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.cardDataService.getCardList(+params.get('timelineId')).subscribe(cardList => {
          console.log(cardList);
            this.cardList = cardList;
            this.cardListLength = this.cardList.length - 1;
            this.cardToplay = this.randomCard(this.cardList);
          });
    });
  }

  randomCard(cardList): CardInterface {
    return cardList[this.getRandomInt(this.cardListmin, this.cardListLength)];
  }

  getRandomInt(cardListmin, cardListLength) {
    let randomNum = Math.floor(Math.random() * (Math.floor(cardListLength - cardListmin + 1)) + cardListmin);
    return randomNum;
  }

  onGuess(formData) {

    if (this.cardList.length !== 0) {

      let dateCardToPlay = this.cardToplay.date;
      let yearCardToPlay = dateCardToPlay.substring(0, 4);

      console.log(yearCardToPlay);
      let yearForm = formData.dateToGuess;
      if (yearCardToPlay === yearForm) {
        this.guessedCardList.push(this.cardToplay);
        this.cardList.splice(this.cardList.indexOf(this.cardToplay), 1);
        this.cardListLength = this.cardList.length - 1;
        this.cardToplay = this.randomCard(this.cardList);
        console.log('Year values are matching');
      }
      else {
        let form = document.getElementById('cardDateInput');
        // Add a class that defines an animation
        form.classList.add('error');  
        // remove the class after the animation completes
        setTimeout(function() {
          form.classList.remove('error');
        }, 300);
        // alert('Year values are not matching');
      }
    }
    else {
      alert('No cards to play in this timeline');
    }
  }
}