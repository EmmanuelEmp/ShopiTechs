// import multer from "multer";
// import path from "path";

// // File format validation function
// const fileFilter = (req, file, cb) => {
//     // Allowed filetypes
//     const filetypes = /jpeg|jpg|png/;
//     // Check the file extension using the test() method of the regular expression
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     // Check the MIME type
//     const mimetype = filetypes.test(file.mimetype)

//     // Check if the extension and the mimetype match any of the allowed format;
//     if(extname && mimetype) {
//         return cb(null, true);
//     } else {
//         cb(new Error('Only jpeg, jpg, and png filetypes are allowed'));
//     };    
// }

// // File size limit
// const fileSizeLimit = 5 * 1024 * 1024; // 5MB

// // Multer configuration
// const storage = multer.diskStorage({
//     destination: "../upload/images",
//     filename: (req, file, cb) =>{
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// export const upload = multer({storage:storage,fileFilter, //Apply file format validation
// limits: { fileSize: fileSizeLimit } // Applying file size limit

// })