   module.exports =function (req, res) {       
       console.log('a3',req.query.id);
       const pug = require('pug');  
       var table = 'School';       
       const School = require(process.cwd()+'/'+'/db').School;
       const Pupil = require(process.cwd()+'/'+'/db').Pupil;
       Pupil.destroy({
            where: {
                school: req.query.id
            }
       })         
       .then(()=>{
           School.destroy({
               where: {
                   id: req.query.id
               }
           })        
        })                                  
        .then(()=>res.end('School with id '+req.query.id+' and its pupils are deieted'))
}