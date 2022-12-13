class Board {
	constructor(x, y, size=2) {
		this.cells = [];
		
		this.size = size;
		this.cellSize = size/8;
		
		this.el = document.createElement('a-entity');
		this.el.setAttribute('position', {x: 0, y: 0, z: 0})
		this.el.setAttribute('rotation', '-90 90 0');
		
		document.getElementById('scene').appendChild(this.el);
		
		this.generateCells();
    this.generateCheckers();
	}

	generateCells() {
		for (let i = -3; i < 5; i++) {
			let x = i*this.cellSize;
			for (let j = -3; j < 5; j++) {
				let y = j*this.cellSize;
        let cell = new Cell(x, y, !((i+j)%2==0), this.cellSize, this.el)
        if (cell.isBlack) {
				  this.cells.push(cell);
        }
			}
		}
	}
  generateCheckers() {
    for (let i = 0; i < 12; i++) {
      let x = this.cells[i].x
      let y = this.cells[i].y
      new Checker(x, y, 'white', this.cellSize, this.el)
    }

    for (let i = 0; i < 12; i++) {
      let x = this.cells[i+20].x
      let y = this.cells[i+20].y
      new Checker(x, y, 'black', this.cellSize, this.el)
    }
  }
}


class Cell {
	constructor(x, y, isBlack, size, parent) {
		
		this.x = x;
		this.y = y;
		this.isBlack = isBlack;
		
		this.el = document.createElement('a-plane');
		this.el.setAttribute('height', size);
		this.el.setAttribute('width', size);
		
		if (isBlack) {
			this.el.setAttribute('color', '#FF9922');
      this.el.setAttribute('change-color-on-hover',"color: blue");
    } else {
			this.el.setAttribute('color', '#BBBBBB');
    }

		this.el.setAttribute('position', {x: this.x, y: this.y, z: 0})
		
		parent.appendChild(this.el);
	}
}

class Checker {
	constructor(x, y, color, size, parent) {
		
		this.x = x;
		this.y = y;
		
		this.el = document.createElement('a-cylinder');
		this.el.setAttribute('height', 0.1);
		this.el.setAttribute('radius', size/2*0.8);
    this.el.setAttribute('rotation', '-90 0 0');
		
		this.el.setAttribute('color', color);

		this.el.setAttribute('position', {x: this.x, y: this.y, z: 0})
    this.el.setAttribute('change-color-on-hover',"color: blue");
		
		parent.appendChild(this.el);
	}
}

board = new Board(0, 0, size=1);