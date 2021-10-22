
const express = require('express')
const router = require('express').Router()

const {isAuthenticated} = require('../../../controllers/election_admin/elections/electionController');
const votercontroller = require('../../../controllers/election_admin/voter/voter_roll_controller');

router.get('/manageV',isAuthenticated,votercontroller.manage_get);   

router.get('/view/:eid',isAuthenticated,votercontroller.view);   

router.get('/manage2V/:eid',isAuthenticated,votercontroller.manage);


// disqualify
router.get('/reason/:rid',isAuthenticated,votercontroller.disqualify_voter_get);
router.post('/reason_save',isAuthenticated,votercontroller.disqualify_voter);


 module.exports  = router


