// import path from 'path'
import multer from 'multer'

const upload = multer({ dest: "uploads/" });

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//         const ext = path.extname(file.originalname)
//         cb(null, Date.now() + ext)
//     }
// })

// const upload = multer({
//     storage: storage,
//     fileFilter: function (req, file, cb) {
//         if (
//             file.mimetype == 'image/png' ||
//             file.mimetype == 'image/jpg' ||
//             file.mimetype == 'image/jpeg'
//         ) {
//             cb(null, true)
//         } else {
//             console.log("Only png, jpeg and jpg files are supported")
//             cb(null, false)
//         }
//     },
//     limits: {
//         fileSize: 5 * 1024 * 1024
//     }
// })

export default upload