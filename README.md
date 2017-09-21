## roller-js
A simple js component to roll the numbers over!

### Usage
```html
<script src="./roller.js"></script>
<p id="block"></p>
<script>
  let conf = {
    mode: 1,
    max: 100,
    id: 'block'
  };
  let wow = new roller(conf);
  wow.roll();
</script>
```

### Configurable
- **id:** HTML element id
- **max:** The maximum of digit increase
- **mode:** 0 Normal, 1 Filled(with 0)
- **interval:** Digit increase interval

### Under development
The roller will be able to stop and go soon
