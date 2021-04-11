import { browser, dev } from '$app/env';
import { accessTokenKey } from './constants';
import Cookie from 'cookie-universal';
const cookies = Cookie();

async function send({ method, path, params, data }) {
const fetch =
typeof window !== 'undefined'
    ? window.fetch
    : await import('node-fetch').then((mod) => mod.default);

  const opts = {
    method,
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      lang: cookies.get('eshop_lang') || 'en'
    },
    credentials: 'include'
  }

  if (data) {
    opts.body = JSON.stringify(data)
  }

  const accessToken = browser ? localStorage.getItem(accessTokenKey) : '';
  opts.headers['Authorization'] = `Bearer ${accessToken}`

  const api_url = dev ? 'http://localhost:4000' : '';

  let url = new URL(`${api_url}/${path}`)

  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    )
  }

  try {
    let response = await fetch(url, opts)
    let json = await response.text()
    if (!response.ok) {
      throw json
    }
    try {
      return JSON.parse(json)
    } catch (e) {
      return json
    }
  } catch (e) {
    throw e
  }
}

function get(path, params) {
  return send({ method: 'GET', path, params })
}

function del(path) {
  return send({ method: 'DELETE', path })
}

function post(path, data) {
  return send({ method: 'POST', path, data })
}

function put(path, data) {
  return send({ method: 'PUT', path, data })
}

export { get, del, post, put }