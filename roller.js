/*
 * roller-js
 * @author: jerryliao26 (jerryliao26@gmail.com)
 * @member id: HTML element id
 * @member max: The maximum of digit increase
 * @member mode: 0 Normal, 1 Filled(with 0)
 * @member interval: digit increase interval
 *
 */
class roller {
  constructor(conf) {
    this.id = conf.id;
    this.max = conf.max;
    this.mode = conf.mode;
    this.interval = conf.interval;
    // Check main settings
    if (this.id == undefined || this.max == undefined) {
      console.error('Roller settings wrong, id or max not set');
    }
    // Optional settings
    if (this.mode != 0 && this.mode != 1) {
      this.mode = 0;
    }
    if (this.interval == undefined) {
      this.interval = 0.1;
    }
  }

  /*
   * Change configs
   *
   */
  setId(id) {
    this.id = id;
  }
  setMax(max) {
    this.max = max;
  }
  setMode(mode) {
    this.mode = mode;
  }
  changeInterval(interval) {
    this.interval = interval;
  }

  /*
   * Roller main function
   *
   */
  roll() {
    let num = 0;
    // Get max bits
    let max_bits = 0;
    while (true) {
      let tester = Math.pow(10, max_bits);
      if (this.max / tester < 1) {
        break;
      }
      max_bits++;
    }
    let timerId = setInterval(function () {
      if (num <= this.max) {
        let ele = document.getElementById(this.id);
        if (this.mode == 0 || this.max == 0 || num == 0) { // Normal mode or zero
          ele.innerHTML = num;
        }
        else if (this.mode == 1) { // Filled mode
          // Check current bits
          let num_bits = 0;
          while (true) {
            let tester = Math.pow(10, num_bits);
            if (num / tester < 1) {
              break;
            }
            num_bits++;
          }
          // Generate zeros
          let suffix = '';
          let fill = max_bits - num_bits;
          while (fill > 0) {
            suffix += '0';
            fill--;
          }
          ele.innerHTML = suffix + num;
        }
        num++;
      }
      else {
        clearInterval(timerId);
      }
    }.bind(this), this.interval * 1000);
  }

  /*
   *
   *
   */
  stop() {

  }

  /*
   *
   *
   */
  go() {

  }
}
