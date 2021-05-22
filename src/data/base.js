import firebase from 'firebase/app'
import 'firebase/firestore'

var soshiyantConfig = {
	apiKey:
		'AIzaSyDCeRjkePib55LLQhjpWkkZWn2PvGHuEAY',
	authDomain: 'soshiyant-25b8e.firebaseapp.com',
	projectId: 'soshiyant-25b8e',
	storageBucket: 'soshiyant-25b8e.appspot.com',
	messagingSenderId: '1085946325327',
	appId:
		'1:1085946325327:web:3e2968a9d9b383b33d7d3a',
}

// Get a Firestore instance
export const db = firebase
	.initializeApp(soshiyantConfig)
	.firestore()
