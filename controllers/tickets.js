const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create,
  addToFlight
};


function addToFlight(req, res){
	console.log(req.body)

	
	Flight.findById(req.params.id, function(err, flightDoc){

		flightDoc.cast.push(req.body.ticketId);
		flightDoc.save(function(err){
			res.redirect(`/flight/${flightDoc._id}`)
		})

	})	
}
function create(req, res) {

    console.log(req.body)
     
    
     const t = req.body;
     req.body = 
     Ticket.create(req.body, function (err, ticket) {
       console.log(ticket)
   
       res.redirect('/ticket/new');
       
     });
   } 


function newTicket(req, res) {
  Ticket.find({}, function (err, tickets) {
	  console.log(tickets)
    res.render('ticket/new', {
      airline: 'Add Ticket',
      Tickets
    });
  })
}