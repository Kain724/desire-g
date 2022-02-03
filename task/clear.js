const del = require('del') // каждый раз удаляет public с неактуальной сборкой

//Конфигурация 
const path = require('../config/path.js')


// Удаление директории
const clear = () => {
    return del(path.root)
}


module.exports = clear