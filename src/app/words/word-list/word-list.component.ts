import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {

  modalTitle: string;
  words: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.words = this.af.database.list('/words', {
          query: {
            orderByChild: 'unit',
            equalTo: params['id']
          }
        });
      }
    );
  }

  addWord(wordModal: any) {
    this.modalTitle = 'New word';
    wordModal.open();
  }

  editWord(wordModal: any, word: any) {
    this.modalTitle = 'Edit word';
    wordModal.open();
  }

  removeWord(wordId: string) {
    //this.af.database.
  }

}
