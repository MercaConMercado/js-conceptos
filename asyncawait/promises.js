

//promesas
function manjeadorpeticion(req, res) {
    User.findById(req, userId)
        .then(function (user){ //  el metodo then se usa cuando todo va bien
            res.send(user )
            return Task.fundById(user.taskId)
        })  
        .then(function (tasks){
            tasks.comopleted = true
            return task.save()
            
        })
        .then(function(){
             return('proceso exitoso')
        })
        .catch(function (errors){ // el metodo carch es cunado se tienen errores
            res.send(errors)
        })
}