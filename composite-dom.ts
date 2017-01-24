interface IDomElement {
  print();
}

class TextNode implements IDomElement{
  private text: string;
  
  constructor(text){
    this.text = text;
  }

  print(){
    console.log(this.text);
  }
}

class DomElement implements IDomElement {
  private elementName: string;
  private elements: IDomElement[];

  constructor(elementName, elements = []){
    this.elementName = elementName;
    this.elements = elements;
  }

  addElement(element: IDomElement){
    this.elements.push(element);
  }

  print(){
    console.log('<' + this.elementName + '>');
    for(let x of this.elements){
      x.print();
    }
    console.log('</' + this.elementName + '>');
  }  
}

var html: DomElement = new DomElement('html');
var body: DomElement = new DomElement('body');
var p1: DomElement = new DomElement('p');
var text1: TextNode = new TextNode('Hello World!');
p1.addElement(text1);
body.addElement(p1);
html.addElement(body);
html.print();
