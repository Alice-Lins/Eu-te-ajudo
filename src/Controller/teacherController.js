const teacherSchema = require("../Model/teacherSchema");


const createTeacher = async (req, res) =>{
    try {
       //const {teacher, subject , district, email, whatsapp, specialty} = req.body;
         const newTeacher = new teacherSchema({
             teacher: req.body.teacher,
             subject: req.body.subject,
              district: req.body.district,
              email: req.body.email,
              whatsapp: req.body.whatsapp,
              specialty: req.body.specialty,
              createdAt: new Date()
         });

        const savedTeacher = await newTeacher.save();
        if(savedTeacher){
            res.status(201).send({
                "message": "Professora cadastrada com sucesso",
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


const updateTeacher = async (req, res) => {
    try {
        const findTeacher= await teacherSchema.findById(req.params.id)
        console.log("PROFESSORA ENCONTRADA", findTeacher);

        if(!findTeacher){
            res.status(404).send({
                "message": "Professora não encontrada",
                "statusCode": 404
            })
        }

        // confiro as informações atualizadas
        findTeacher.teacher = req.body.teacher || findTeacher.teacher
        findTeacher.whatsapp = req.body.whatsapp || findTeacher.whatsapp

        // salvo as atualizações
        const savedTeacher = await findTeacher.save()

        // envio a resposta
        res.status(200).send({
            "message": "Professora atualizada com sucesso",
            savedTeacher
        })

    } catch(err) {
        console.error(err)
    }
   
};

const deleteTeacher = async (req,res) => {
    try {
        // acessar o documento a ser deletado
        // const findNote = await NoteSchema.findById(req.params.id)

        // deletar esse documento
        // await findNote.delete()

        const deletedTeacher = await teacherSchema.findByIdAndDelete(req.params.id)

        res.status(200).send({
            "message": "Professora deletada com sucesso",
            deletedTeacher
        })
    } catch(err) {
        console.error(err);
    };
};

module.exports = {
    createTeacher,
    getAll,
    updateTeacher,
    deleteTeacher
}