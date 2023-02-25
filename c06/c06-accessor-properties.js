

const obj = {
    x: 1,
    get getX() {return this.x},
    /**
     * @param {number} val
     */
    set setX(val) {this.x = val}
}

console.log(obj.getX)
