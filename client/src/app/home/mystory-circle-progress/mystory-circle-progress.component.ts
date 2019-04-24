import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-mystory-circle-progress',
  templateUrl: './mystory-circle-progress.component.html',
  styleUrls: ['./mystory-circle-progress.component.css']
})
export class MystoryCircleProgressComponent implements OnInit {
  color: string;
  backgroundColor:string;
  @Input() percent: any;
  constructor() { }

  ngOnInit() {
    switch(true){
      case(this.percent>=50):
        this.color = '#6ab519';
        this.backgroundColor = '#edf9de';
        break;
      case(this.percent<50):
        this.color = '#f5a623';
        this.backgroundColor = '#fff3e0';
        break;
    }
  }

}
