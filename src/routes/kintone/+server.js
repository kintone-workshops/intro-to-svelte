/** @type {import('./$types').RequestHandler} */
import { json } from '@sveltejs/kit';


// Our GET route. Sending a GET request to /kintone will activate this function!
// We want to "GET" our cards from our Database here, so let's make a fetch request to our Kintone DB.
export async function GET() {
	// Our ENV file values.
	let token = import.meta.env.VITE_APITOKEN
	let subdomain = import.meta.env.VITE_SUBDOMAIN
	let appid = import.meta.env.VITE_APPID
	// Sorting our results from Kintone.
	const parameters = 'query=order by Record_number asc';
	// The full URL we will pass to our fetch request.
	const getRecordsURL = `https://${subdomain}.kintone.com/k/v1/records.json?app=${appid}&${parameters}`

	console.log(`GETTING FROM: ${getRecordsURL}`)
	// Our API token for our request. Very important!
	const fetchOptions = {
		method: 'GET',
		headers: {
			'X-Cybozu-API-Token': token,
		}
	}

	// Our new variable "response" will be equal to the results of our Kintone API call.
	let response = await fetch(getRecordsURL, fetchOptions);
	// Turn it into JSON, and return the records to our front-end.
	const responseData = await response.json();
	return new json(responseData.records);
}

// Our POST route. Similar to above, but with a request body.
export async function POST({ request }) {
	let token = import.meta.env.VITE_APITOKEN
	let subdomain = import.meta.env.VITE_SUBDOMAIN
	let appid = import.meta.env.VITE_APPID
	const postRecordsURL = `https://${subdomain}.kintone.com/k/v1/record.json?app=${appid}`

	// Get the variables passed to our back-end.
	const body = await request.json();
	// Separate them for our POST request to our Kintone API call.

	// TODO: Get our title and color of the card to POST to Kintone

	const requestBody = {
		'app': appid,
		'record': {
			'title': {
				'value': null
			},
			'color': {
				'value': null
			}
		}
	}
	console.log(`POSTING TO: ${postRecordsURL} title: ${requestBody.record.title.value}, color: ${requestBody.record.color.value}`)
	// Put our request body into our options.
	const fetchOptions = {
		method: 'POST',
		headers: {
			'X-Cybozu-API-Token': token,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(requestBody)
	}
	// And fetch from Kintone, and return the JSON to our front-end. (Not used however.)
	try {
		// TODO: Try filling out this POST fetch to Kintone
	} catch (error) {
		console.log(error)
	}
}