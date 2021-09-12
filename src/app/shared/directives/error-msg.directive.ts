import { Directive, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ErrorMsg]'
})
export class ErrorMsgDirective implements OnInit {

  private _color: string = "red"
  private _mensaje: string = "Este campo es requerido"

  htlmElement: ElementRef<HTMLElement>;
  
  @Input() set color(valor: string) {
    this._color = valor
    this.setColor()
  }
  
  @Input() set msg(valor: string) {
    this._mensaje = valor
    this.setMsg()
  }

  @Input() set valido(valor: boolean) {
    if(valor) {
      this.htlmElement.nativeElement.classList.add('hidden')
    } else {
      this.htlmElement.nativeElement.classList.remove('hidden')
    }
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htlmElement = this.el;
   }

  ngOnInit() {
    this.setEstilo()
    this.setColor()
    this.setMsg()
  }

  setEstilo():void {
    this.htlmElement.nativeElement.classList.add('form-text')
  }

  setColor(): void {
    this.htlmElement.nativeElement.style.color = this._color
  }

  setMsg():void {
    this.htlmElement.nativeElement.innerText = this._mensaje
  }

}
