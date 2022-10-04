/** @type {import('./$types').RequestHandler} */
import { json } from '@sveltejs/kit';

export async function GET() {
  let token = import.meta.env.VITE_APITOKEN
  let subdomain = import.meta.env.VITE_SUBDOMAIN
  let appid = import.meta.env.VITE_APPID
  const parameters = 'query=order by Record_number asc';
  const getRecordsURL = `https://${subdomain}.kintone.com/k/v1/records.json?app=${appid}&${parameters}`

  console.log(`GETTING FROM: ${getRecordsURL}`)
  const fetchOptions = {
    method: 'GET',
    headers: {
      'X-Cybozu-API-Token': token,
    }
  }

  let response = await fetch(getRecordsURL, fetchOptions);
  const responseData = await response.json();

  console.log(responseData.records);
  return new json(responseData.records);
}

export async function POST({ request }) {
  let token = import.meta.env.VITE_APITOKEN
  let subdomain = import.meta.env.VITE_SUBDOMAIN
  let appid = import.meta.env.VITE_APPID
  const postRecordsURL = `https://${subdomain}.kintone.com/k/v1/record.json?app=${appid}`

  const body = await request.json();
  let title = await body.title;
  let color = await body.color
  const requestBody = {
    'app': appid,
    'record': {
      'title': {
        'value': title
      },
      'color': {
        'value': color
      }
    }
  }
  console.log(`POSTING TO: ${postRecordsURL} title: ${requestBody.record.title.value}, color: ${requestBody.record.color.value}`)
  const fetchOptions = {
    method: 'POST',
    headers: {
      'X-Cybozu-API-Token': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody)
  }

  try {
    let response = await fetch(postRecordsURL, fetchOptions);
    const responseData = await response.json();
    return new json(responseData);
  } catch (error) {
    console.log(error)
  }
}