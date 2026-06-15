importScripts('https://www.gstatic.com/firebasejs/12.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.14.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCJM0W44W3GSvEsaZCtF3ritvGMD2Ox9pQ",
  authDomain: "nigerian-grade-gpa-calculator.firebaseapp.com",
  projectId: "nigerian-grade-gpa-calculator",
  storageBucket: "nigerian-grade-gpa-calculator.firebasestorage.app",
  messagingSenderId: "1014568265983",
  appId: "1:1014568265983:web:fe8a83e6eb9c25190304ca",
  measurementId: "G-YBXQ37DEJM"
});

const messaging = firebase.messaging();

// Handle background push notifications
messaging.onBackgroundMessage(function(payload) {
  const { title, body } = payload.notification || {};
  const notificationOptions = {
    body: body || 'You have a new update!',
    icon: '/icon.png',
    badge: '/icon.png',
    data: payload.data || {}
  };
  return self.registration.showNotification(title || 'Nigerian GPA Calculator', notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const url = event.notification.data?.link || 'https://nigerian-gpa-calculator.vercel.app';
  event.waitUntil(clients.openWindow(url));
});
