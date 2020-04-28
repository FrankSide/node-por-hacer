const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer.',
        filter: 'Filtro de la busqueda'
    }
}

const completado = {
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea.'
    }
}
const filter = {
    filter: {
        alias: 'f',
        Desc: 'Filtro de busqueda'
    }
}

const argv = require('yargs')
    .command('listar', 'Lista los elementos por hacer.', {
        descripcion,
        filter
    })
    .command('crear', 'Crear un elemento por hacer.', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de la tarea.', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea.', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}