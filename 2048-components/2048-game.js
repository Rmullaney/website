import './2048-tile.js'

class Outer extends HTMLElement {
    constructor() {
        super();
        this.currentGrid = -1;
    }

    //sets gridArray before functionality. 
    //left-shift oriented is default
    executeMove(direction) {
        let gridArray = this.getStandardGrid();
        this.currentGrid = [...gridArray];
        console.log("currGrid at start of execution: " + this.currentGrid);
        switch (direction) {
            case "Up":
                //rotateRight90
                for (let i=0; i<3; i++){
                    gridArray = this.rotate90Right(gridArray);
                }
                break;
            case "Down":
                //rotateRight90 + flipRows
                gridArray = this.rotate90Right(gridArray);
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
        console.log("executeMove just shifted this array: " + gridArray);
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
            for (let k=3; k>=0; k--){
                if (tempArray[k] == 0){
                    tempArray.splice(k, 1);
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

            //put new elements back in gridArray
            for (let j=0; j<4; j++){
                gridArray[(4*i) + j] = tempArray[j];
            }
        }
        console.log("runshifts just ran all the logic and produced this array: " + gridArray);
        this.setElementValues(gridArray, direction);
    }

    shiftRecurse(array) {
        if (array.length < 2){
            return array;
        } else {
            if (array[0] == array[1]){
                let item = array[0];
                array.splice(0, 2);
                return [String(item*2)].concat(this.shiftRecurse(array));
            } else {
                let item = array[0];
                array.splice(0, 1);
                return [item].concat(this.shiftRecurse(array));
            }
        }
    }

    //puts the new elements back into the actual grid
    setElementValues(gridArray, direction) {
        //restore grid direction
        switch (direction) {
            case "Up":
                //rotateRight90 + fliprows
                gridArray = this.rotate90Right(gridArray);
                break;
            case "Down":
                //(rotateRight90 x 3)
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
        console.log("setElementValues just reshifted the grid into the following array for replacement: " + gridArray);

        //replace values
        for (let i=0; i<16; i++){
            document.querySelector(`#tile-${i}`).setAttribute('value', gridArray[i])
        }
        
        //add new tile if a board change occured (for any valid move. invalid moves do not yield board change)
        console.log("gridArray: " + gridArray);
        console.log("this.currentGrid: " + this.currentGrid);
        if (!this.compareArrays(gridArray, this.currentGrid)){
            this.addNewTile();
        }
        
    }

    compareArrays(arr1, arr2) {
        if (arr1.length == arr2.length){
            for (let i=0; i<arr1.length; i++){
                if (arr1[i] != arr2[i]){
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }
    }

    addNewTile() {
        //get empty tiles
        let emptyArray = [];
        for (let i = 0; i < 16; i++){
            if (document.querySelector(`#tile-${i}`).getAttribute('value') == '0'){
                emptyArray.push(i);
            }
        }

        //get random
        let randomIndex = Math.floor(Math.random() * emptyArray.length);
        randomIndex = emptyArray[randomIndex];

        //place block
        let tile = document.querySelector(`#tile-${randomIndex}`);
        tile.setAttribute('value', '2');
    }

    connectedCallback() {
        window.addEventListener("keydown", (event) => {
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
                            <tile-2048 class="tile" id="tile-0" value="0"></tile-2048>
                            <tile-2048 class="tile" id="tile-1" value="0"></tile-2048>
                            <tile-2048 class="tile" id="tile-2" value="0"></tile-2048>
                            <tile-2048 class="tile" id="tile-3" value="0"></tile-2048>
                        </div>
                        <div class="d-flex flex-row">
                            <tile-2048 class="tile" id="tile-4" value="0"></tile-2048>
                            <tile-2048 class="tile" id="tile-5" value="0"></tile-2048>
                            <tile-2048 class="tile" id="tile-6" value="0"></tile-2048>
                            <tile-2048 class="tile" id="tile-7" value="0"></tile-2048>
                        </div>
                        <div class="d-flex flex-row">
                            <tile-2048 class="tile" id="tile-8" value="0"></tile-2048>
                            <tile-2048 class="tile" id="tile-9" value="0"></tile-2048>
                            <tile-2048 class="tile" id="tile-10" value="0"></tile-2048>
                            <tile-2048 class="tile" id="tile-11" value="0"></tile-2048>
                        </div>
                        <div class="d-flex flex-row">
                            <tile-2048 class="tile" id="tile-12" value="0"></tile-2048>
                            <tile-2048 class="tile" id="tile-13" value="0"></tile-2048>
                            <tile-2048 class="tile" id="tile-14" value="0"></tile-2048>
                            <tile-2048 class="tile" id="tile-15" value="0"></tile-2048>
                        </div>
                    </div>
                </div>
                <br>
                <br>
            </div>
            
        `;

        this.addNewTile();
        this.addNewTile();

    }
}

customElements.define('game-2048', Outer);