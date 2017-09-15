   module.exports =function (req, res) {       
       console.log(req.params.id);
       const pug = require('pug');  
       var table = 'School';       
       const School = require('C:/nodeJs/proj_D/db').School;
       const Pupil = require('C:/nodeJs/proj_D/db').Pupil;
       Pupil.destroy({
           where: {
               id: req.params.id
           }
       })                                    
       .then(()=>res.end('Pupil with id '+req.params.id+' is deleted'))
   }