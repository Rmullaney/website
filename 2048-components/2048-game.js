import './2048-tile.js'

class Outer extends HTMLElement {
    constructor() {
        super();
    }

    //sets gridArray before functionality. 
    //left-shift oriented is default
    executeMove(direction) {
        let gridArray = this.getStandardGrid();
        switch (direction) {
            case "Up":
                //rotateRight90
                gridArray = this.rotate90Right(gridArray);
                break;
            case "Down":
                //rotateRight90 + flipRows
                gridArray = this.flipRows(this.rotate90Right(gridArray));
                break;
            case "Left":
                //nothing
                break;
            case "Right":
                //flipRows
                gridArray = this.flipRows(gridArray);
                break;
            default:
                console.log("Something's very wrong in 2048-game/executeMove");
                break;
        }
        this.runShifts(gridArray, direction);
    }

    //flipRows
    flipRows(gridArray) {
        let temp = -1;
        for (let i=0; i<4; i++){
            let base = 4 * i;

            //first swap
            temp = gridArray[base];
            gridArray[base] = gridArray[base+3];
            gridArray[base+3] = temp;

            //second swap
            temp = gridArray[base+1];
            gridArray[base+1] = gridArray[base+2];
            gridArray[base+2] = temp;
        }
        return gridArray;
    }

    //rotate90degRight
    rotate90Right(gridArray) {
        let newArray = [];
        newArray.push(gridArray[12]);
        newArray.push(gridArray[8]);
        newArray.push(gridArray[4]);
        newArray.push(gridArray[0]);
        newArray.push(gridArray[13]);
        newArray.push(gridArray[9]);
        newArray.push(gridArray[5]);
        newArray.push(gridArray[1]);
        newArray.push(gridArray[14]);
        newArray.push(gridArray[10]);
        newArray.push(gridArray[6]);
        newArray.push(gridArray[2]);
        newArray.push(gridArray[15]);
        newArray.push(gridArray[11]);
        newArray.push(gridArray[7]);
        newArray.push(gridArray[3]);
        return newArray;
    }

    //gets the values from the current grid in standard 0-15 order
    getStandardGrid() {
        let array = [];
        for (let i=0; i<16; i++) {
            array.push(document.querySelector(`#tile-${i}`).getAttribute('value'));
        }
        return array;
    }

    //executes the actual shifts of values into new values
    runShifts(gridArray, direction) {
        //run shifts
        for (let i=0;i<4; i++){
            //get each sub-array
            let tempArray = gridArray.slice((i*4), (i*4) + 4);

            //remove zeroes
            for (let i=3; i>=0; i--){
                if (tempArray[i] == 0){
                    tempArray.splice(i, 1);
                }
            }

            //run shifts
            tempArray = this.shiftRecurse(tempArray);

            //remove leading zeroes
            while (tempArray.length > 0 && tempArray[0] == '0'){
                tempArray.splice(0, 1);
            }

            //fill if necessary
            while (tempArray.length < 4){
                tempArray.push('0');
            }
        }
        this.setElementValues(gridArray, direction);
    }

    shiftRecurse(array) {
        if (array.length < 2){
            return array;
        } else {
            if (array[0] == array[1]){
                return [String(array[0]*2)].concat(this.shiftRecurse(array.splice(0, 2)));
            } else {
                return [array[0]].concat(this.shiftRecurse(array.splice(0, 1)));
            }
        }
    }

    //puts the new elements back into the actual grid
    setElementValues(gridArray, direction) {
        //restore grid direction
        switch (direction) {
            case "Up":
                //rotateRight90 x 3
                for (let i = 0; i<3; i++){
                    gridArray = this.rotate90Right(gridArray);
                }
                break;
            case "Down":
                //flipRows + (rotateRight90 x 3)
                gridArray = this.flipRows(gridArray);
                for (let i = 0; i<3; i++){
                    gridArray = this.rotate90Right(gridArray);
                }
                break;
            case "Left":
                //nothing
                break;
            case "Right":
                gridArray = this.flipRows(gridArray);
                //flipRows
                break;
            default:
                console.log("Something's very wrong in 2048-game/executeMove");
                break;
        }
        //replace values
        for (let i=0; i<16; i++){
            document.querySelector(`#tile-${i}`).setAttribute('value', gridArray[i])
        }
    }

    connectedCallback() {
        window.addEventListener("keydown", function onEvent(event) {
            console.log(event.key)
            switch (event.key) {
                case "ArrowUp":
                    this.executeMove("Up");
                    break;
                case "ArrowDown":
                    this.executeMove("Down");
                    break;
                case "ArrowLeft":
                    this.executeMove("Left");
                    break;
                case "ArrowRight":
                    this.executeMove("Right");
                    break;
                default:
                    break;
            }
        });
        this.innerHTML = `
            <div class="justify-content-center d-flex flex-column" style="margin:0; padding:0;">
                <br>
                <br>
                <div class="d-flex justify-content-center">
                    <div class="d-flex flex-column" style="height:32vw; width:32vw;">
                        <div class="d-flex flex-row">
                            <tile-2048 id="tile-0" value="2"></tile-2048>
                            <tile-2048 id="tile-1" value="4"></tile-2048>
                            <tile-2048 id="tile-2" value="8"></tile-2048>
                            <tile-2048 id="tile-3" value="16"></tile-2048>
                        </div>
                        <div class="d-flex flex-row">
                            <tile-2048 id="tile-4" value="2"></tile-2048>
                            <tile-2048 id="tile-5" value="4"></tile-2048>
                            <tile-2048 id="tile-6" value="8"></tile-2048>
                            <tile-2048 id="tile-7" value="16"></tile-2048>
                        </div>
                        <div class="d-flex flex-row">
                            <tile-2048 id="tile-8" value="2"></tile-2048>
                            <tile-2048 id="tile-9" value="4"></tile-2048>
                            <tile-2048 id="tile-10" value="8"></tile-2048>
                            <tile-2048 id="tile-11" value="16"></tile-2048>
                        </div>
                        <div class="d-flex flex-row">
                            <tile-2048 id="tile-12" value="2"></tile-2048>
                            <tile-2048 id="tile-13" value="4"></tile-2048>
                            <tile-2048 id="tile-14" value="8"></tile-2048>
                            <tile-2048 id="tile-15" value="16"></tile-2048>
                        </div>
                    </div>
                </div>
                <br>
                <br>
            </div>
            
        `;
    }
}

customElements.define('game-2048', Outer);