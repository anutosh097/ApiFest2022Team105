# ApiFest2022Team105

API Fest ‘22 is mainly focused on encouraging API-First Development to help develop code modularity and abstraction of processes.
Here's the documentation link https://documenter.getpostman.com/view/19340037/UVeCPoEB

TEAM 105 API TEST APIS
Introduction
pet
GET
hello world
Team 105 API test apis
AUTHORIZATION
Basic Auth
Username
<username>
Password
<password>
pet
AUTHORIZATION
Basic Auth
This folder is using Basic Auth from collectionTeam 105 API test apis
{id}
AUTHORIZATION
Basic Auth
This folder is using Basic Auth from collectionTeam 105 API test apis
GETSingle Pet
https://0b0b7edf-9773-47c2-ac77-a894527ea6d4.mock.pstmn.io/pet/:id
AUTHORIZATION
Basic Auth
This request is using Basic Auth from collectionTeam 105 API test apis
PATH VARIABLES
id
ad Lorem
(Required) ID of the pet

Example Request
Single Pet
curl --location --request GET 'https://0b0b7edf-9773-47c2-ac77-a894527ea6d4.mock.pstmn.io/pet/ad Lorem' \
--header 'Authorization: Basic <credentials>'
Example Response
200 OK
BodyHeader
(1)
{
"id": "adipisicing eiusmod",
"name": "ut Ut ex",
"breed": "eiusmod",
"picture": "minim",
"location": "dolor veniam",
"email": "eiusmod",
"phone": "amet dolore dolor"
}
PUTUpdate a Pet
https://0b0b7edf-9773-47c2-ac77-a894527ea6d4.mock.pstmn.io/pet/:id
AUTHORIZATION
Basic Auth
This request is using Basic Auth from collectionTeam 105 API test apis
HEADERS
Content-Type
application/json
PATH VARIABLES
id
t1R86gHbhy4CCNpVRcBeN
(Required) ID of the pet

BODYraw
{
"name": "Updated",
"breed": "Updated breed",
"picture": "minim",
"location": "dolor veniam",
"email": "eiusmod",
"phone": "amet dolore dolor"
}

Example Request
Update Pet
View More
curl --location --request PUT 'https://0b0b7edf-9773-47c2-ac77-a894527ea6d4.mock.pstmn.io/pet/ad Lorem' \
--header 'Authorization: Basic <credentials>' \
--data-raw '{
"id": "adipisicing eiusmod",
"name": "ut Ut ex",
"breed": "eiusmod",
"picture": "minim",
"location": "dolor veniam",
"email": "eiusmod",
"phone": "amet dolore dolor"
}'
Example Response
204 No Content
BodyHeader
(1)
{
"id": "adipisicing eiusmod",
"name": "ut Ut ex",
"breed": "eiusmod",
"picture": "minim",
"location": "dolor veniam",
"email": "eiusmod",
"phone": "amet dolore dolor"
}
DELDelete a Pet
https://0b0b7edf-9773-47c2-ac77-a894527ea6d4.mock.pstmn.io/pet/:id
AUTHORIZATION
Basic Auth
This request is using Basic Auth from collectionTeam 105 API test apis
PATH VARIABLES
id
ad Lorem
(Required) ID of the pet

Example Request
Delete Pet
curl --location --request DELETE 'https://0b0b7edf-9773-47c2-ac77-a894527ea6d4.mock.pstmn.io/pet/ad Lorem' \
--header 'Authorization: Basic <credentials>'
Example Response
204 No Content
BodyHeader
(1)
No response body
This request doesn't return a response body
GETList of Pets
https://0b0b7edf-9773-47c2-ac77-a894527ea6d4.mock.pstmn.io/pet
AUTHORIZATION
Basic Auth
This request is using Basic Auth from collectionTeam 105 API test apis

Example Request
List of Pets
curl --location --request GET 'https://0b0b7edf-9773-47c2-ac77-a894527ea6d4.mock.pstmn.io/pet' \
--header 'Authorization: Basic <credentials>'
Example Response
200 OK
BodyHeader
(1)
View More
[
{
"id": "veniam",
"name": "anim irure sunt elit ut",
"breed": "sed adipisicing",
"picture": "ipsum laborum pariatur",
"location": "consequat anim quis",
"email": "culpa magna id",
"phone": "consectetur"
},
{
POSTAdd a Pet
https://0b0b7edf-9773-47c2-ac77-a894527ea6d4.mock.pstmn.io/pet
AUTHORIZATION
Basic Auth
This request is using Basic Auth from collectionTeam 105 API test apis
HEADERS
Content-Type
application/json
BODYraw
{
"id": "adipisicing eiusmod",
"name": "ut Ut ex",
"breed": "eiusmod",
"picture": "minim",
"location": "dolor veniam",
"email": "eiusmod",
"phone": "amet dolore dolor"
}

Example Request
Add a Pet
View More
curl --location --request POST 'https://0b0b7edf-9773-47c2-ac77-a894527ea6d4.mock.pstmn.io/pet' \
--header 'Authorization: Basic <credentials>' \
--data-raw '{
"id": "adipisicing eiusmod",
"name": "ut Ut ex",
"breed": "eiusmod",
"picture": "minim",
"location": "dolor veniam",
"email": "eiusmod",
"phone": "amet dolore dolor"
}'
Example Response
201 Created
BodyHeader
(1)
{
"id": "adipisicing eiusmod",
"name": "ut Ut ex",
"breed": "eiusmod",
"picture": "minim",
"location": "dolor veniam",
"email": "eiusmod",
"phone": "amet dolore dolor"
}
GEThello world
No request URL found. It will show up here once added.
AUTHORIZATION
Basic Auth
This request is using Basic Auth from collectionTeam 105 API test apis

Example Request
hello world
curl --location --request GET ''
