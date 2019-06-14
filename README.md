# getDecimal.js

### **`getDecimal(value, precision)`**
Javascript converter of the specified string in a decimal number with a given precision

## Install
```bash
npm i getdecimal
```

## Usage
```html
<script type="text/javascript" src="dist/getDecimal.min.js">
<script type="text/javascript">
    // Integer
    console.log(getDecimal(123)); // 123

    // Real
    console.log(getDecimal(123.45)); // 123.45
    console.log(getDecimal(123.45678)); // 123.46
    
    // String
    console.log(getDecimal('123')); // 123
    console.log(getDecimal('123,45')); // 123.45
    console.log(getDecimal('123.45678')); // 123.46
    console.log(getDecimal(' 123 ')); // 123
    console.log(getDecimal(' 123,45 ')); // 123.45
    console.log(getDecimal(' 123.45 ')); // 123.45
    
    // Real with precision
    console.log(getDecimal(123.45, 3)); // 123.45
    console.log(getDecimal(123.45678, 3)); // 123.457

    // String with precision
    console.log(getDecimal('123,45', 3)); // 123.45
    console.log(getDecimal('123.45678', 3)); // 123.457
    console.log(getDecimal(' 123,45678 ', 3)); // 123.457
    console.log(getDecimal(' 123.45678 ', 3)); // 123.457
</script>
```