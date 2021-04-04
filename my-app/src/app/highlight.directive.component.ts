import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]', //选择器：.class #id tag [prop]
})
export class AppHighlightDirective { 

  @Input() appHighlight;
  // 注入ElementRef对象
  constructor(private el: ElementRef){
    // el.nativeElement 就是DOM节点
    // if(this.appHighlight == null){
    //   el.nativeElement.style.background = 'pink';
    // }else{
    //   el.nativeElement.style.background = this.appHighlight;
    // }
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log('appHighlight', this.appHighlight);
    // if(this.appHighlight == ''){
    //   this.el.nativeElement.style.background = 'pink';
    // }else{
    //   this.el.nativeElement.style.background = this.appHighlight;
    // }
  }

  // 事件控制颜色
  @HostListener('mouseover') onMouseover(){
    console.log('appHighlight', this.appHighlight);
    if(this.appHighlight == ''){
      this.el.nativeElement.style.background = 'pink';
    }else{
      this.el.nativeElement.style.background = this.appHighlight;
    }
  }
  @HostListener('mouseout') onMouseout(){
    this.el.nativeElement.style.background = '';
  }
  
}