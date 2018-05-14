const Cookies = {
  get(name: string) {
    const cookieName = `${encodeURIComponent(name)}=`;
    const cookieStart = document.cookie.indexOf(cookieName);
    let cookieEnd;
    let cookieValue: string | null = null;

    if (cookieStart > -1) {
      cookieEnd = document.cookie.indexOf(';', cookieStart);
      if (cookieEnd === -1) {
        cookieEnd = document.cookie.length;
      }
      cookieValue = decodeURIComponent(
        document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
      );
    }
    return cookieValue;
  },
  set(
    name: string,
    value: string,
    expires: Date,
    path: string,
    domain: string,
    secure: boolean
  ) {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (expires instanceof Date) {
      cookieText += `; expires=${expires.toUTCString()}`;
    }

    if (path) {
      cookieText += `; path=${path}`;
    }

    if (domain) {
      cookieText += `; domain=${domain}`;
    }

    if (secure) {
      cookieText += '; secure';
    }

    document.cookie = cookieText;
  },
  delete(name: string, path: string, domain: string, secure: boolean) {
    this.set(name, '', new Date(0), path, domain, secure);
  }
};

export default Cookies;
