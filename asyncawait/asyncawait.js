async function manejadorpeticiones(req, res) {
    try { // aqui se ejecuta el codigo
        const user = await User.findById(req.userId)
        const tasks = await Tasks.findById(user.taskId)
        tasks.completed = true
        await tasks.saved()
        res.send('tarea exitosa')
    }
    catch (e) { // error , camputa de errores
        res.send(e)
    }



}