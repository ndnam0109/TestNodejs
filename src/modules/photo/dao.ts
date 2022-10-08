import {Photo} from "../../entity/Photo";
import {getRepository} from "typeorm";
import {PhotoType} from "../../types/type.photo";

const createPhoto = async ( data: PhotoType) => {
    const photoRepo = getRepository(Photo);
    const photo = photoRepo.create(data)
    return await photoRepo.save(photo)
}

const getPhotoById = async (id: number) => {
    const photoRepo = getRepository(Photo);
    const photo = await photoRepo.createQueryBuilder('photo')
        .where(`photo.id = ${id}`)
        .getOne()
    return photo
}

export default {createPhoto, getPhotoById}
