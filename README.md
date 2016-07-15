pushUnique
=======

push only unique values into array

```javascript
var pushUnique = require("@nathanfaucett/push_unique");


var array = [0, 2, 4];
pushUnique(array, 0, 1, 2, 3, 4, 5);
array === [0, 2, 4, 1, 3, 5];
```
