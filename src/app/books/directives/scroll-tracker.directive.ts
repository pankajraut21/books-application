import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
	selector: '[scrollTracker]'
})
export class ScrollTrackerDirective {
    
  @Output() scrollingFinished = new EventEmitter<void>();

  emitted = false;

  @HostListener("window:scroll", [])
  onScroll(): void {
    
  	console.log('jjjjjjjjjjjjjjjjj');
  	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.emitted) {
  		this.emitted = true;
  		this.scrollingFinished.emit();
  		console.log('aaaaaaaaaa');
  	} else if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
  		this.emitted = false;
  	}
  }
}