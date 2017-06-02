import { Component, AfterViewInit } from '@angular/core';
declare var $:any;
declare var moment:any;
declare var deepmerge:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  title = 'MEJORVE!';

  ngAfterViewInit() {
    //loader
    $.LoadingOverlay('show');
    setTimeout(() => { $.LoadingOverlay('hide') }, 2000);

    //Datatable
    $('table').dataTable();

    //iCheck
    $('form input[type=radio]').iCheck({
      checkboxClass: 'icheckbox_minimal',
      radioClass: 'iradio_minimal',
      increaseArea: '20%'
    });

    //timer
    let $timer = $('#timer');
    setInterval(() => {
      $timer.text(moment().format('DD/MM/YYYY HH:mm:ss'));
    }, 1000);

    //datepicker
    $('form input.datetimepicker').datetimepicker({
        locale: 'es',
        useCurrent: false,
        showTodayButton: true,
        sideBySide: true,
        toolbarPlacement: 'bottom'
      });

    //deepmerge
    let x = {
      foo: { bar: 3 },
      array: [{
          does: 'work',
          too: [ 1, 2, 3 ]
      }]
    }

    let y = {
      foo: { baz: 4 },
      quux: 5,
      array: [{
          does: 'work',
          too: [ 4, 5, 6 ]
      }, {
          really: 'yes'
      }]
    }

    console.log(deepmerge(x, y));

    //toaster message
    $().toastmessage('showNoticeToast', 'some message here');
    $().toastmessage('showSuccessToast', "some message here");
    $().toastmessage('showWarningToast', "some message here");
    $().toastmessage('showErrorToast', "some message here");
  }
}
