const express = require('express');
const router = express.Router();
const CampingController=require("../controllers/CampingController");



router.post("/add", CampingController.createComping);
router.get("/show", CampingController.getAllCampings);
router.put("/update/:campingId",CampingController.updateCamping);
router.delete("/delete/:id",CampingController.deleteCampingById);
router.get("/sortCampingsAscending", CampingController.sortCampingsAscending);
router.get("/sortCampingsDescending", CampingController.sortCampingsDescending);
router.get('/filter-name', CampingController.filterCampingByName);
module.exports = router;