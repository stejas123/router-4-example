export function imageName(fileName) {
	let fileNameStr = fileName.replace(/%20/g, "-");
	let imagename = fileNameStr.substr(fileNameStr.lastIndexOf('/')+1, fileNameStr.length);

	return imagename;
}

// remove html tags from html string and add ellipsis
export function gridShortDescription(completeString, charCount=300) {
	let htmlTagRemovedString = completeString.replace(/<\/?[^>]+(>|$)/g, "");
	let newString;
	if(htmlTagRemovedString.length > charCount) {
		newString = htmlTagRemovedString.substr(0, charCount-3)+'...';
	} else {
		newString = htmlTagRemovedString;
	}

	return newString
}

// add ellipsis to string (title)
export function addEllipsis(string, charCount=30) {
	let ellipsisString;
	if(string.length > charCount) {
		 ellipsisString = string.substr(0, charCount-3)+ '...';
	} else {
		ellipsisString = string;
	}

	return ellipsisString;
}

export function toCapitalize(str) {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}