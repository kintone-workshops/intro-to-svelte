<script>
	// Our cards array. We'll need to fill this with cards from our Kintone database...
	let cards = [];
	// Default color of red, and the text on each card.
	let color = 'Red';
	let title = '';

	// A function to GET cards from our backend.
	const getCards = async () => {
		const cardsRequest = await fetch('/kintone', {
			method: 'GET',
			credentials: 'same-origin',
			headers: {
				'content-type': 'application/json'
			}
		});
		const cardsInfo = await cardsRequest.json();

		// Resetting our array in case the GET button is pressed multiple times.
		cards.length = 0;

		cardsInfo.forEach((card) => {
			// TODO We need to add our cards to our card array here!
		});
		console.log(cards);
	};

	// Our POST request to our backend.
	const addCard = async (addCardTitle, addCardColor) => {
		try {
			const cardsRequest = await fetch('/kintone', {
				method: 'POST',
				credentials: 'same-origin',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({
					title: addCardTitle,
					color: addCardColor
				})
			});
			const cardResponse = await cardsRequest.json();
			// Reset the title value of our add card.
			title = '';
			// Re-GET the cards after we posted a new one!
			getCards();
		} catch (error) {
			console.log(error);
		}
	};
</script>

<div class="main">
	<div class="grid-container">
		<div class="left">
			<button on:click={getCards}> Get Cards </button>
			<div class="card-row">
				{#each cards as card, i}
				<!-- TODO: Here, we'll need to loop through our cards Array, and display each card, with its title and color. -->
				{/each}
			</div>
		</div>
		<div class="right">
			<button on:click={addCard(title, color)}> Add Card </button>
			<div class:blue-card={color === 'Blue'} class:red-card={color === 'Red'}>
				<input type="text" bind:value={title} placeholder="My Card Title" />
				<label>
					<input type="radio" bind:group={color} value="Red" name="addCard" />
					Red
				</label>
				<label>
					<input type="radio" bind:group={color} value="Blue" name="addCard" />
					Blue
				</label>
			</div>
		</div>
	</div>
</div>

<style>
	.main {
		color: aliceblue;
	}

	.main p {
		font-size: large;
	}

	.main label {
		font-size: large;
	}

	.blue-card {
		background-color: #2196f3;
		/* Add shadows to create the "card" effect */
		box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.3);
		transition: 0.3s;
		padding: 20px;
		margin: 10px;
		display: flex;
		flex-direction: column;
		align-items: baseline;
	}

	.red-card {
		background-color: tomato;
		/* Add shadows to create the "card" effect */
		box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.3);
		transition: 0.3s;
		padding: 20px;
		margin: 10px;
		display: flex;
		flex-direction: column;
		align-items: baseline;
	}

	.red-card:hover {
		box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.5);
	}

	.blue-card:hover {
		box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.5);
	}

	.left {
		grid-area: left;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.card-row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.right {
		grid-area: right;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.grid-container {
		display: grid;
		grid-template-areas:
			'header header header header'
			'left left right right'
			'footer footer footer footer';
		gap: 10px;
		background-color: #1e2931;
		padding: 10px;
	}

	.grid-container > div {
		background-color: rgba(255, 255, 255, 0.8);
		text-align: center;
		padding: 10px 0;
		font-size: 35px;
	}
</style>
