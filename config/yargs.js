const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
};
const completado = {
    demand: true,
    alias: 'c',
    desc: 'marca como pendiente una tarea'
};


const argv = require('yargs')
    .command('crear', 'craer un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}