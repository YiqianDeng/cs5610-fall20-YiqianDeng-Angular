import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})

export class MultipleChoiceQuestionComponent implements OnInit {

  @Output()
  statusChange = new EventEmitter<string>();

  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: ''};
  grading = false;
  faCheck = faCheck;
  faTimes = faTimes;

  grade = () => {
    this.grading = true;
  };

  answerChange = () => this.statusChange.emit(this.question.answer)

  ngOnInit(): void {
  }

}
