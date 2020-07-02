import { 
    addNewModel,
    getModel , 
    getModelWithID,
    updateModel,
    getModelWithMeta
}from '../controllers/playerControllers';

const routes = (app) =>{
    app.route('/models')
    //Get endpoints 
        .get(getModel)
    // POST endpoint
        .post(addNewModel);

    app.route('/models/:ModelId')
    //get specific player by id
        .get(getModelWithID)
    //update specific player by id
        .put(updateModel);
    //update specific player by id

    app.route('/modelSearch/:ModelName')
    //get specific player by id
        .get(getModelWithMeta);


        
}

export default routes;