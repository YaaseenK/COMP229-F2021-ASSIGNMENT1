/* COMP229Assignment1 */
/* Student Name: Yaaseen Khan */
/* Student Number: 301164475 */
/* OCT/9/2021 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Yaaseen',});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Yaaseen ',});
});

/* GET ABOUT US page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About',});
});

/* GET PRODUCTS page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects',});
});

/* GET SERVICES page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services',});
});


/* GET CONTACT US page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact',});
});

module.exports = router;
