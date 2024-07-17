// src/utils/googleCalendar.js
import { gapi } from 'gapi-script';

const CLIENT_ID = '31527095202-367oomsbv0frbfo63a8amkeja8co4nqd.apps.googleusercontent.com';
const API_KEY = 'AIzaSyByWHrqcGRG0oU-zsXOJn02Ez7I-htOAhA';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

export const initClient = () => {
    return new Promise((resolve, reject) => {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            }).then(() => {
                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
                resolve();
            }).catch(error => {
                reject(error);
            });
        });
    });
};

const updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
        listUpcomingEvents();
    }
};

export const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
};

export const handleSignoutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
};

const listUpcomingEvents = () => {
    gapi.client.calendar.events.list({
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime'
    }).then(response => {
        const events = response.result.items;
        if (events.length > 0) {
            console.log('Upcoming events:', events);
        } else {
            console.log('No upcoming events found.');
        }
    });
};
