import {PhotoType} from "../../types/type.photo";
import photoDao from "./dao";
const createPhoto = async (photo: PhotoType) => {
    const newPhoto = await photoDao.createPhoto(photo);
    const photoRes = await photoDao.getPhotoById(newPhoto.id)
    return photoRes
}

export default {createPhoto}
