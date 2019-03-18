const ExperienceModel = require('../model/experienceModel');

const createExperience = (req, res) => {
    console.log('experience created', req.body)
    const data = req.body;
    data.createdAt = new Date();
    let experience = new ExperienceModel(data);
    return experience.save(err => {
        if(err) {
            res.json(err)
        } else {
            res.json({
                message: 'experience added.',
                data: experience
            })
        }
    })
}

const getExperience = (req, res) => {
    let { id } = req.params;
    ExperienceModel.find({user: id})
                    .then(result => res.json(result))
                    .catch(err => res.json(err))
}

const updateExperience = (req, res) => {
    let {body, params:{id}} = req;
    console.log('body', body, 'params', id)
    ExperienceModel.findByIdAndUpdate(id, body, {new: true})
            .then(result => res.json(result))
            .catch(err => res.json(err))
}

const deleteExperience = (req, res) => {
    let { id } = req.params;
    ExperienceModel.findByIdAndDelete(id)
                    .then(res => res.json({
                        message: 'Sucessfully deleted'
                    }))
                    .catch(err => res.json(err))
}


module.exports = { createExperience, getExperience, updateExperience, deleteExperience }