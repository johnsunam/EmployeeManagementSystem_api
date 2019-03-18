const Organization = require('../model/organizationModel')

const getOrganization = (req, res) => {
    
    return Organization.find({}).then(result => res.json(result)).catch(err => res.json(err))


}

const createOrganization = (req, res) => {
    const { name } = req.body;
    let organization = new Organization();
    organization.name = name;
    return organization.save(err => {
        if(err)
            res.json(err)
        else
        res.json({
            message: 'Organization created',
            data: organization
        })
    })

}

const getOrganizationById = (req, res) => {
    const { id } = req.params
    return Organization.findById(id)
                .then(result => {
                    res.json(result)
                })
                .catch(err => res.json(err))
}



module.exports = { getOrganization, createOrganization, getOrganizationById }