import {Request, Response} from "express";
import  photoService  from './service'
const creatPhoto = async (req: Request, res: Response) => {
    console.log(req)
    const {name ,description, filename,views,isPublished} = req.body;
    const photo = await photoService.createPhoto({name ,description, filename,views,isPublished})
    res.status(200).json({
        status: 'success',
        result: photo
    })
}

export default { creatPhoto}
