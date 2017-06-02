import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'dataTables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  title = 'MEJORVE!';

  ngAfterViewInit() {
    $('table').dataTable();
  }
}
