import { Request, Response } from "express";
import { BaseModel } from "./BaseModel";

export class BaseController<Model extends BaseModel> {
	model: Model

	constructor(model: Model) {
		this.model = model;
	}

	setModel(model: Model) {
		this.model = model;
	}

	// Todo -> This must return the model instance
	protected getDataFromRequest(request: Request) {
		return request.body
	}

	async get(request: Request, response: Response) {
		try {
			response.json(await this.model.list().then(data => console.log(data)));
		} catch (error) {
			console.log(error);
			return error;
		}
	}

	create(request: Request, response: Response) {
		try {
			const model: BaseModel = this.getDataFromRequest(request)
			model.save().then(data => console.log(data));

		} catch (error) {

			response.json(error);
		}
	}

	async update(request: Request, response: Response) {
		if (!request.query.id) {
			response.status(403).json('Page ID not informed');
			return
		}

		try {
			let data: Model = this.getDataFromRequest(request);
			
			const createdService = await data.save()
			// TODO -> Update should be executed by method save() on instance with data changed
			// const createdService = await this.model.update(Number(data.id), data);

			response.status(201).json(createdService);
		} catch (error) {

			response.json(error);
		}
	}
}