import { Request, Response } from 'express';

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}
  handle(request: Request, response: Response): Response {
    const categories = this.listSpecificationsUseCase.execute();

    return response.status(201).json(categories);
  }
}

export { ListSpecificationsController };
