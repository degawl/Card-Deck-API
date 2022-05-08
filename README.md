# Card Deck Api

## Run the application

In the project root directory, we can use docker compose to create a network
of the REST API and PostgreSQL database at once.

```sh
docker-compose up --build -d
```

The application will be accessible at

http://localhost:3000/

## Migrate the database

Get the container name of the REST API (It will most likely be the second created one).

```sh
docker ps
```

To migrate the database with our models run this command with the container name

```sh
docker exec [container_name] npm run migrate
```

In my case it was "card_deck_api-server-1"

```sh
docker exec card_deck_api-server-1 npm run migrate
```

Use the explorer at
http://localhost:3000/explorer/
to test the functionality of the API.

## Creating a new Deck

Create a new deck at http://localhost:3000/explorer/#/DeckController/DeckController.create
or use a tool such as Postman to send a POST request to http://localhost:3000/decks with request body with expected schema

```sh
{
  "type": "FULL",
  "shuffled": true
}
```

Type must be either FULL or SHORT.
The shuffled attribute is a boolean and will determine whether the created cards in the deck will be shuffled or not.

Save the deckId from the response as you can use it in the next endpoints.

## Open a Deck

To open a deck use http://localhost:3000/explorer/#/DeckController/DeckController.findById or use a tool such as Postman to send a GET request to http://localhost:3000/decks/{deckId}

Use the deckId from the response of the Create a Deck endpoint otherwise there will be no deck with entered deckId found.

## Draw a Card

To draw a card use http://localhost:3000/explorer/#/DeckController/DeckController.drawFromDeckById or use a tool such as Postman to send a GET request to http://localhost:3000/decks/{deckId}/draw?count={count}

Count is a required query paramater that is an integer and must be smaller than the remaining cards in the deck.

Drawing cards will remove them from the deck and adjust the deck's remaining value. It will also return the drawn cards as a response.

```sh
[
	{
		"value": "ACE",
		"suit": "SPADES",
		"code": "AS"
	},
	{
		"value": "KING",
		"suit": "HEARTS",
		"code": "KH"
	},
	{
		"value": "3",
		"suit": "HEARTS",
		"code": "3H"
	}
]
```

## Run tests

To run tests use the container name to run the command

```sh
docker exec [container_name] npm run test
```

## Shut down application

```sh
docker-compose down
```
