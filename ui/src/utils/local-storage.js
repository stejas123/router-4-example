// Retrieve locally save data
export function getLocalData(label) {
	if(label && localStorage[label]) {
			return JSON.parse(localStorage[label]);
	} else {
			return '';
	}
}

// Store data locally
export function storeLocally(label, data) {
  let localData = getLocalData(label);

  // Check if parameters are provided
	if(label && data !== null && typeof data === 'object') {

    // Check if the localStorage  alread
    if(localData) {

      for (let prop in data) {
        localData[prop] = data[prop];
      }

      localStorage.setItem(label, JSON.stringify(localData));

    } else {
      localStorage.setItem(label, JSON.stringify(data));
    }

	}
}