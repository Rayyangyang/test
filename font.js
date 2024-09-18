
var Fontmin = require('fontmin');

var fontmin = new Fontmin()
  .src('./src/assets/SourceHanSansCN-Normal.otf')
  .dest('./src/assets/fontmin/')
  .use(
    Fontmin.glyph({
      text: '01234567890qwertyuiopasdfghjklzxcvbnm',
    })
  );

fontmin.run(function (err, files) {
  if (err) {
    throw err;
  }
});