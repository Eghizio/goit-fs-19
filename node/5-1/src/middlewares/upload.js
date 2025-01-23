import multer from "multer";
import { nanoid } from "nanoid";
import { UPLOAD_DIRECTORY } from "../config.js";

const storage = multer.diskStorage({
  destination: UPLOAD_DIRECTORY,
  filename: (req, file, callback) => {
    const date = Date.now();
    const id = nanoid();
    const fileName = [date, id, file.originalname].join("_");

    callback(null, fileName);
  },
  limits: { fileSize: 1_000_000 },
});

const fileFilter = (req, file, callback) => {
  const isForbiddenFile = !file.originalname.includes("monke");

  callback(null, isForbiddenFile);
};

export const upload = multer({ storage, fileFilter });
