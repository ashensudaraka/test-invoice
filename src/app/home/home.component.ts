import { Component, OnInit } from '@angular/core';
import { } from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.clickedNavColor();
  }

  //Changing navbar position color
  clickedNavColor() {
    $('.nav-link').click(function () {
      $('.nav-link').css("color", "");
      $('.nav-link').css("background-color", "");
      $(this).css("color", "black");
      $(this).css("background-color", "#D3E5F3");
    });

  }

}
