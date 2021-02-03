import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }

  @Output()
  statusChange = new EventEmitter<string>();

  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''}
  grading = false;
  faCheck1 = faCheck; faTimes = faTimes;

  grade = () => { this.grading = true; };

  answerChange = () => this.statusChange.emit(this.question.answer);

  ngOnInit(): void {
  }

}
