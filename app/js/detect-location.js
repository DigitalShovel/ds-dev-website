// Author: Nicholas Panayotakos

// Description: Detect the user's timezone and set the timezone in the select element with id 'timezone'

let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// set the timezone in the select element with id 'timezone'
document.getElementById("Timezone").value = timezone;
