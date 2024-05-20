const multer = require("multer");
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: (req, file, cb) => {
      let folder;
      switch (file.fieldname) {
        case 'profile_picture':
          folder = 'profile_picture';             
          break;
        case 'identity':
          folder = 'identity';
          break;
        case 'certificate':
          folder = 'certificate';
          break;
        default:
          folder = '';
      }
      cb(null, folder);
    },
 
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
