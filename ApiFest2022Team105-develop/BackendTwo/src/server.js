// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const Service = require("./service.js")
const openapiGlue = require("fastify-openapi-glue");
// const Ajv = require("ajv").default
// const ajv = new Ajv({allErrors: true})
// Ajv option allErrors is required
// require("ajv-errors")(ajv /*, {singleError: true} */)

// const schema = {
//   type: "object",
//   required: ["id","name", "picture","breed","location","email","phone"],
//   properties: {
//     id: {type: "string"},
//     name: {type: "string"},
//     picture: {type: "string"},
//     breed: {type: "string"},
//     location: {type: "string"},
//     email: {type: "string"},
//     phone: {type: "string"},
//   },
//   additionalProperties: false,
//   errorMessage: "does not match the schema",
// }

// const validate = ajv.compile(schema)
// console.log(validate({foo: "a", bar: 2})) // false
// console.log(validate.errors) // processed errors

const options = {
  specification: `${__dirname}/schema.yaml`,
  service: new Service(),
};


fastify.register(openapiGlue, options);


// Get /pets 
// fastify.get("/pet",async (req,res) => {
//   //  send back an array of restaurants
//   res.send(pets)
// })
// // Post /pets 
// fastify.post("/pet",async (req,res) => {
//   console.log(req.body)
//   //get the new pet properties
//   const newPet = req.body
//   newPet.id = nanoid();
//   //add the new pet to db
//   pets.push(newPet)
//   // send back new pet as a 201 response
//   res.code(201).send(newPet)
//   return {msg : "ok"}
// })
// // Get /pet/:id 
// fastify.get("/pet/:id", async (req,res) => {
//   //get that id from params
//     const {id} = req.params 
//   //find the pet
//     const findPet = pets.find(r => r.id === id)
//   // return the pet if exist
//   if(findPet){
//      res.send(findPet)
//   }else{
//     res.code(404).send(`No pet with id "${id}" found`)
//   }
//   // return 404 not found if not exists
// })
// // PUT /pet/:id 
// fastify.put("/pet/:id", async (req,res) => {
//   //get that id from params
//     const {id} = req.params 
//   //find the pet
//     const foundIndex = pets.findIndex(r => r.id === id)
//   // update the pet if exist
//   if(foundIndex> -1){
//     const oldData =  pets[foundIndex]
//      pets[foundIndex] = { ...oldData, ...req.body}
//      res.code(204).send()
//   }else{
//     res.code(404).send(`No pet with id "${id}" found`)
//   }
// })
//   // return 404 not found if not exists
// // Delete /pet/:id 
// fastify.delete("/pet/:id", async (req,res) => {
//   //get that id from params
//     const {id} = req.params 
//   //find the pet
//     const foundIndex = pets.findIndex(r => r.id === id)
//   // update the pet if exist
//   if(foundIndex> -1){
//     pets.splice(foundIndex, 1)
//     res.code(204).send()
//   }else{
//     res.code(404).send(`No pet with id "${id}" found`)
//   }
// })



// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()