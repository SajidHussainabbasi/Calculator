
# Calculator

## The Calculator project is a a simple calculator that offers:
	•	User-Friendly Interface: A clean layout with large, easy-to-read buttons and display.
	•	Essential Functions: Inclusion of basic arithmetic operations without overwhelming users with advanced features.
	
## Setup

- create a repo(Calculator) from the
  template([HackYourFutureBelgium/template-html-css](https://github.com/sammou00/js-starter))
- protect the main branch
- turn on github pages
- open discussions about project

---

## Home page

### Header

This feature developed on a branch 'calculator-implementation`

#### HTML

- create a `header`
- create a `div` with class `calculator`
- create a heading with `h1`
- create a `div` with class `display` and id `display`
- create a `div` with class `buttons` and id `buttons`


#### JavaScript

- Create two variable  display & buttons to get element.
- create an array of my data/ 
- create variable result for Store the input expression.
- create a variable btn and store the dom button element in btn
-  Attach the click handler
-  Evaluate the expression
-   Append clicked button value to result.
-   Update display

#### CSS

- style the`calculator` class with background-color, padding, border-radius, box-shadow
- style the`display` class with  height: 50px;width: 93%; background-color,black;color,text-align, padding,
    font-size,border-radius,margin-bottom, overflow
- style the `buttons`class with display,grid-template-columns
- style the `btn` with background-color color,padding, font-size, border, border-radius,cursor,transition
- style the dom element btn.operator with background-color ,color and .btn.clear with background-color color
.btn.equal, background-color colo, grid-column, and .btn.zero with grid-column an btn with background-color