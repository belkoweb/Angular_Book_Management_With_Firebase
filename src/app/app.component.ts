import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book';

  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyAv0EfCKcJ-PLmUO94TGhD8sSSTzOBRe_0",
      authDomain: "book-87bb4.firebaseapp.com",
      databaseURL: "https://book-87bb4.firebaseio.com",
      projectId: "book-87bb4",
      storageBucket: "gs://book-87bb4.appspot.com/",
      messagingSenderId: "201029765837",
      appId: "1:201029765837:web:1881fcb9f90be493"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }

}
