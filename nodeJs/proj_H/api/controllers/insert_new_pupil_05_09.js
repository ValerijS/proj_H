module.exports =function (req, res, next) { 
    const pug = require('pug');
    var table = 'School';    
    const School = require('C:/nodeJs/proj_D/db').Pupil;
    if (req.params.L_name && req.params.F_name && req.params.school){   
        School.findOrCreate(
             {where: {firstName: req.params.F_name,
                     lastName: req.params.L_name,
                     school: req.params.school
                     }
             }
         )          
         .then(()=>{
             School.findAll({
                 attributes: {
                     exclude: ['createdAt', 'updatedAt']
                  }
              })
              .then((result) => {
                  variables = {
                      columns: Object.keys(result[0].dataValues),
                      schools: result.map(function(school) {
                          return school.dataValues;
                      })
                  }
                  res.variables = variables;
                  next()
              })   
        })
    }else{
        res.end('You must enter:"firstName/lastName/school"')
    }
}