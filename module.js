const colors = require('./colors.json');

module.exports = (namedColors) => {
    return colors[namedColors];
}