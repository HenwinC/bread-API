import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Bread
}

const breadSchema = new Schema({
  name: {type: String, required: true},
  type: {type: String, default: "Doughy"},
})

const Bread = mongoose.model("Bread", breadSchema)