import { UTTERANCES_API } from './utterances-api';
import { param } from './deparam';

export const token = { value: null as null | string };

// tslint:disable-next-line:variable-name
export function getLoginUrl(redirect_uri: string) {
  // redirect_uri sets which url to return to after authorisation
  return `${UTTERANCES_API}/authorize?${param({ redirect_uri })}`;
}

// get the token, as the cookie is HTTP only, only the server can read its contents
export async function loadToken(): Promise<string | null> {
  if (token.value) {
    return token.value;
  }
  const url = `${UTTERANCES_API}/token`;
  const response = await fetch(url, { method: 'POST', mode: 'cors', credentials: 'include' });
  if (response.ok) {
    const t = await response.json();
    token.value = t;
    return t;
  }
  return null;
}
