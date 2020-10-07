const express = require('express');
const viewController = require('./../controller/viewController.js');
const authenticationController = require('./../controller/authenticationController');

const router = express.Router();

router.use(authenticationController.isLoggedIn);

router.get(
  '/',
  authenticationController.isLoggedIn,
  viewController.getOverview
);
router.get(
  '/tour/:slug',
  authenticationController.isLoggedIn,
  viewController.getTours
);
router.get(
  '/login',
  authenticationController.isLoggedIn,
  viewController.getLogin
);
router.get('/me', authenticationController.protect, viewController.getAccount);

module.exports = router;
