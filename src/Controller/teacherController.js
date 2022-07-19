const teacherSchema = require("../Model/teacherSchema");


const createTeacher = async (req, res) =>{
    try {
       //const {teacher, subject , address, email, whatsapp, specialty} = req.body;
         const newTeacher = new teacherSchema({
             teacher: req.body.teacher,
             subject: req.body.teacher,
             district: req.body.address,
             email: req.body.email,
             whatsapp: req.body.whatsapp,
             specialty: req.body.specialty,
             createdAt: new Date()
        });

        const savedTeacher = await newTeacher.save();
        if(savedTeacher){
            res.status(201).send({
                "message": "Teacher registered successfully",
                savedTeacher
            })
        }
    } catch (error) {
        console.error(error);
        
    }
};

const getAll = async (req,res) =>{
    try {
        const allteacher = await teacherSchema.find();
        res.status(200).send(allteacher);
    } catch (error) {
        console.error(error)
    };
};

module.exports ={
    createTeacher,
    getAll
}