// FUNCION CALLBACK

function manjeadorpeticion(req, res) {
    User.findById(req.userId, function (err, user) { // funcion callback , que hacer cunado responda la consulta
        if (err) { // se continua con la ejecucion del codigo en el proceso
            res.send(err)
        } else {
            User.findById(user.taskId, function (err, task) {
                if (err) {
                    res.send(err)
                } else {
                    task.completed = true
                    task.save(function (err) {
                        if (err) {
                            res.send(err)
                        } else
                            res.send('proceso exitoso')
                    })
                }
            })
        }
    })
}