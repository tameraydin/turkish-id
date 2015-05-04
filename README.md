### Turkish ID Number validator & generator 
#### (T.C. Kimlik No doğrulayıcı & oluşturucu)

```bash
npm install turkish-id
# or 
bower install turkish-id
```

```javascript
var turkishId = require('turkish-id.js');
// or window.turkishId

var aRandomId = turkishId.generate();
turkishId.validate(aRandomId); // true
```

## License

MIT [http://tameraydin.mit-license.org/](http://tameraydin.mit-license.org/)
