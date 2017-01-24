var TextNode = (function () {
    function TextNode(text) {
        this.text = text;
    }
    TextNode.prototype.print = function () {
        console.log(this.text);
    };
    return TextNode;
}());
var DomElement = (function () {
    function DomElement(elementName, elements) {
        if (elements === void 0) { elements = []; }
        this.elementName = elementName;
        this.elements = elements;
    }
    DomElement.prototype.addElement = function (element) {
        this.elements.push(element);
    };
    DomElement.prototype.print = function () {
        console.log('<' + this.elementName + '>');
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var x = _a[_i];
            x.print();
        }
        console.log('</' + this.elementName + '>');
    };
    return DomElement;
}());
var html = new DomElement('html');
var body = new DomElement('body');
var p1 = new DomElement('p');
var text1 = new TextNode('Hello World!');
p1.addElement(text1);
body.addElement(p1);
html.addElement(body);
html.print();
