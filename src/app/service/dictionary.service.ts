import {Injectable} from '@angular/core';
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Word[] = [
    {
      word: "dog",
      mean: "chó"
    },{
      word: "cat",
      mean: "mèo"
    },{
      word: "chicken",
      mean: "gà"
    },{
      word: "mouse",
      mean: "chuột"
    },]
getAll(){
    return this.dictionary;
}
tran(word:string){
    this.dictionary.find(item=>item.word==word);
}
  constructor() {
  }
}
