## NextWhiskeyBar
-------------
### NextWhiskeyBar app is intended to help to select a "random" place to have lunch

#### Start page
GET /  

#### Make your vote
GET /vote  
POST /vote/add {"place-id":number}  

#### List and edit places
GET /places  
POST /places/add {"name":"place_name","distance_from_office":kilometers_number}  
GET /places/id  
PUT /places/id {"id":"place_id","name":"place_name","address":"place_address","info":"some_notes"}  
DELETE /places/id  

#### Voting history
GET /history  
GET /log  
