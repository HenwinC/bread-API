import { Bread } from '../models/Bread.js'

export {
  index,
  show,
  create,
  update,
  deleteBread as delete
}

// Alternate method
// function index(req, res) {
//   bread.find({}, function (err, breads) {
//     if (err) return res.status(200).json(breads)
//     res.status(200).json(breads)
//   })
// }


function index(req, res) {
  Bread.find({})
  .then(breads => {
    res.status(200).json(breads)
  })
  .catch(err => {
    res.json(err)
  })
}

function show(req, res) {
  Bread.findById(req.params.id)
  .then(bread => {
    res.json(bread)
  })
}

function create(req, res) {
  Bread.create(req.body)
  .then(bread => {
    res.json(bread)
  })
  .catch(err => {
    res.json(err)
  })
}

function update(req, res) {
  Bread.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((bread) => {
    res.json(bread)
  })
}

function deleteBread(req, res) {
  Bread.findByIdAndDelete(req.params.id)
  .then(bread => {
    res.json(bread)
  })
}