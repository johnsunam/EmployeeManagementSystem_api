const AcademicModel = require('../model/academicModel');

const createAcademic = (req, res) => {
    console.log('academic created', req.body)
    const data = req.body;
    data.createdAt = new Date();
    let academic = new AcademicModel(data);
    return academic.save(err => {
        if(err) {
            res.json(err)
        } else {
            res.json({
                message: 'Academic added.',
                data: academic
            })
        }
    })
}

const getAcademic = (req, res) => {
    let { id } = req.params;
    console.log('get academic==', id);
    AcademicModel.find({user: id})
                    .then(result => res.json(result))
                    .catch(err => res.json(err))
}

const updateAcademic = (req, res) => {
        let {body, params:{id}} = req;
        console.log('body', body, 'params', id)
    AcademicModel.findByIdAndUpdate(id, body, {new: true})
                .then(result => res.json(result))
                .catch(err => res.json(err))
}

const deleteAcademic = (req, res) => {
    let { id } = req.params;
    AcademicModel.findByIdAndDelete(id)
                    .then(res => res.json({
                        message: 'Sucessfully deleted'
                    }))
                    .catch(err => res.json(err))
}

module.exports = { createAcademic, getAcademic, updateAcademic, deleteAcademic }