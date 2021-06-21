import db from "../database/models/index";
import { Op } from "sequelize";
import { Request, Response } from "express";
import moment from "moment";

class ReservationsController {
  async bookTable(req: Request, res: Response) {

    const { name, people, forbook, atbook } = req.body;

    const momForbook = moment(forbook, "DD-MM-YYYY").format('YYYY-MM-DD');

    if(name && people && forbook && atbook){
      const result = await db.reservation.create({
          name,
          people,
          forbook: momForbook,
          atbook,
          confirm: 1
      });

      res.status(200).json(await result);
    } else {
      res.status(400).json({message: 'Error to insert data.'});
    }

  }

  async bookTableSearch(req: Request, res: Response) {

    const { forbook, atbook } = req.body;

    const momForbook = moment(forbook, "DD-MM-YYYY").format('YYYY-MM-DD');

    if(forbook && atbook){
      const result = await db.reservation.findAll({
        attributes: ['id'],
        where: {
          forbook: momForbook,
          atbook,
          confirm: 1
        }
      });
      console.log(await result)

      res.status(200).json(await result);
    } else {
      res.status(400).json({message: 'Error to receive data.'});
    }

  }
}

export { ReservationsController };