const routes = require('express').Router()

const {
  findAll,
  findById,
  save,
  update
} = require('./../controllers/controll-restaurant')

/**
 * @swagger
 * /restaurants:
 *  get:
 *    summary : Lista de restaurantes
 *    description : Método que retorna una lista de restaurantes
 *    responses:
 *      '200':
 *        description: Respuesta satisfactoria
 *        content:
 *          application/json:
 *            schema:
 *              type : object
 *              properties:
 *                id:
 *                  type : integer
 *                  description: Indica el ID del restaurante
 *                  example: 3
 *                name:
 *                  type : string
 *                  description: Especifica el Nombre
 *                  example: Donde Rosita
 *                street:
 *                  type : string
 *                  description: Especifica la dirección
 *                  example : Al lado del puente de pesca
 *                city:
 *                  type: string
 *                  description: Ciudad de Ubicacion
 *                  example: Sogamoso
 *      '501':
 *        description: Error
 *        content:
 *          text/plain:
 *            schema:
 *              type: string
 *              example: Algo ha salido mal
 */
routes.get('/',findAll)
routes.get('/:id',findById)
routes.post('/',save)
routes.put('/:idR',update)

module.exports = routes