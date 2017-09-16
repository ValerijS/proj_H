   module.exports =function (req, res) {       
       console.log(req.params.id);
       const pug = require('pug');  
       var table = 'School';       
       const School = require(process.cwd()+'/'+'/db').School;
       const Pupil = require(process.cwd()+'/'+'/db').Pupil;
       Pupil.destroy({
            where: {
                school: req.params.id
            }
       })         
       .then(()=>{
           School.destroy({
               where: {
                   id: req.params.id
               }
           })        
        })                                  
        .then(()=>res.end('School with id '+req.params.id+' and its pupils are deieted'))
}