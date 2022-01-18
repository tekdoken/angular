import { Injectable } from '@angular/core';
import {Iword} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Iword[] = [{
    word: "dog",
    mean: "chó"
  }, {
    word: "dog",
    mean: "chó"
  }, {
    word: "dog",
    mean: "chó"
  }, {
    word: "dog",
    mean: "chó"
  }]
  getAll(){
    return this.dictionary;
  }
  tran(word:String){
    return this.dictionary.find(item=>item.word==word);
  }
  constructor() { }
}
