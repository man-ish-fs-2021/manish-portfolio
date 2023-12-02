class Mouse {
  constructor() {
    this.centx = 0;
    this.centy = 0;
    this.x = 0;
    this.y = 0;
  }

  updatePosition(event) {
    var e = event || window.event;
    this.x = e.clientX - this.centx;
    this.y = (e.clientY - this.centx) * -1;
  }
  setOrigin(e) {
    console.log({
      offl: e.offsetLeft,
      offw: e.offsetWidth,
      offt: e.offsetTop,
      offh: e.offsetHeight,
    });
    this.centx = e.offsetLeft + Math.floor(e.offsetWidth / 2);
    this.centy = e.offsetTop + Math.floor(e.offsetHeight / 2);
    console.log("set origin", this.centx, this.centy);
  }
  show() {
    return (
      "( x, y" +
      this.x +
      ", " +
      this.y +
      ") + ( centx, centy" +
      this.x +
      ", " +
      this.y +
      ")"
    );
  }
}
export default Mouse;
