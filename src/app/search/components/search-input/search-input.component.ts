import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'sp-search-input',
  templateUrl: './search-input.component.html',
  styles: [
  ]
})
export class SearchInputComponent implements OnInit, OnDestroy {
  searchCtrl: FormControl;
  searchCtrlSub: Subscription;
  @Output() value = new EventEmitter<string>();

  constructor() {
    this.searchCtrl = new FormControl(
      '',
      [Validators.required, Validators.minLength(3)]
    );
  }

  ngOnInit() {
    this.searchCtrlSub = this.searchCtrl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => {
        if (this.searchCtrl.valid) {
          this.value.emit(value);
        } else {
          this.value.emit('');
        }
      });
  }

  get searchCtrlIsValid(): boolean {
    return this.searchCtrl.dirty && this.searchCtrl.valid;
  }

  get searchCtrlIsInvalid(): boolean {
    return this.searchCtrl.dirty && this.searchCtrl.invalid;
  }

  ngOnDestroy() {
    this.searchCtrlSub.unsubscribe();
  }
}
