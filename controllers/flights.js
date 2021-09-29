const Flight = require("../models/flight");

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        res.render('flights/show', {airline: 'Airline', flight: flight});
    });
}

function index(req, res){

    Flight.find({}, function(err, flightsDocuments){

        console.log(flightsDocuments, 'Flight documents')

        res.render('flights/index', {
            flights: flightsDocuments,
            airline: 'flights'
        })
    })
}

function newFlight(req, res){

    res.render('flights/new', {airline: 'New Flight'});
}

function create(req, res){


    console.log(req.body)

    req.body.flightNo = parseInt(req.body.flightNo);

    req.body.departs = parseInt(req.body.departs);

    req.body.arrival = parseInt(req.body.arrival)

    Flight.create(req.body, function(err, createdFlight){
        if(err) {
            console.log(err)
            return res.redirect('/flights/new');
        }

        console.log(createdFlight, "<-createdFlight");

        res.redirect('/flights')
    })


    // res.send('working')
}