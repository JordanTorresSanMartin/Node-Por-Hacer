const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('listar', 'Listar las tareas por hacer', {
        descripcion: {
            alias: 'l'
        }
    })
    .command('actualizar', 'actualiza una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completao o pendiente la tarea'
        }
    })
    .command('borrar', 'Borra una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'b',
            desc: 'Descripcion de una tarea borrada'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}