import {Component, ElementRef, OnInit, ViewChild,Renderer2} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [` img {
    height: 10px;
    width: 10px;
  }`]
})
export class AppComponent implements OnInit {
  @ViewChild("board_table") board!: ElementRef

  constructor(private readonly render:Renderer2 ) {
  }
  title = 'WTF';

  ngAfterViewInit() {
    this.setBoard();

  }

  ngOnInit() {

  }

  async setBoard() {

    let color = "#ECDBBA";
    for (let i = 1; i <= 8; i++) {

      const trElement = this.render.createElement('tr')
      color = color == "#ECDBBA" ? "#2D4263" : "#ECDBBA";
      for (let j = 1; j <= 8; j++) {
        const thElement = this.render.createElement('th')
        color = color == "#ECDBBA" ? "#2D4263" : "#ECDBBA";

        this.render.addClass(thElement,'item')
        this.render.setStyle(thElement,'background-color',color)

        this.render.setAttribute(thElement,'id',`cell${i}-${j}`)
        this.render.appendChild(trElement,thElement)
        this.render.listen(thElement,"dragenter",this.onDragEnter);
      }

      this.render.appendChild(this.board.nativeElement,trElement);

    }

    //
      this.addImgToCell("cell1-4",true,"king");
    this.addImgToCell("cell2-4",true,"pawn");
    this.addImgToCell("cell8-4",false,"king");
    this.addImgToCell("cell7-4",false,"pawn");



//     (<HTMLElement>document.getElementById("cell1-5")).innerHTML = `<img src="assets/img/kingBlack.png " class="item">`;

  }
  onDrop(event:CdkDragDrop<HTMLElement>)
  {

  }

  addImgToCell(id: string, isBlack = true, type: 'king' | 'pawn') {
    const size = 100;

    const source = () => {
      const root  = "assets/img/";
      if(type == "king"){
        if(isBlack) return  root + "kingBlack.png"
        else return  root +"kingWhite.png"
      }else{
        if(isBlack) return  root + "pawnBlack.png"
        else return  root +"pawnWhite.png"
      }

    };
    (<HTMLElement>document.getElementById(id)).innerHTML = `<img draggable="true"  src="${source()}"  alt="pawn" style="padding: 5px;width: ${size}%;height: :${size}%;" />`
  }

  onDragEnter(event:any){
    console.log("Mouse Enter in ", event.target)
  }

}



