const { Student } = require('../models/student');

exports.getStudentById = async (req, res, next) => {
    const { id } = req.params
    try {
        let found = await Student.findOne({
            _id: id
        }, {
            "_id": 0
        })
            .sort({ id: 1, timestamp: -1 })
            .limit(1);
        res.status(200).json({
            success: true,
            message: "Success finding student!",
            found
        })
    } catch (err) {
        next(err)
    }
}

exports.searchStudent = async (req, res, next) => {
    const { name } = req.body
    try {
        let found = await Student.find({
            $text: {
                $search: `${name}`
            },
        }, { "_id": 0, "email": 0 }
        ).sort({ timestamp: -1 })
        // .limit(1);
        if (found.length == 0) {
            res.status(404).json({
                success: false,
                message: `No students matched with ${name}`
            })
        } else {
            res.status(200).json({
                success: true,
                message: `These all matched with ${name}`,
                found
            })
        }
    } catch (err) {
        next(err)
    }
}