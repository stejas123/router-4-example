// get cookie
export function getCookie(w) {
	let cName = "";
	let pCOOKIES = [];
	pCOOKIES = document.cookie.split('; ');
	for(let bb = 0; bb < pCOOKIES.length; bb++){
		let NmeVal = [];
		NmeVal = pCOOKIES[bb].split('=');
		if(NmeVal[0] === w){
			cName = unescape(NmeVal[1]);
		}
	}
	return cName;
}

// set cookie
export function setCookie(name, value, path, domain){

	let cookieStr = name + "=" + escape(value) + "; ";

	if(path){
		cookieStr += "path=" + path + "; ";
	}
	if(domain){
		cookieStr += "domain=" + domain + "; ";
	}

	document.cookie = cookieStr;
}

// delete cookie
export function deleteCookie(name) {
	document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}