export default function broadcast(message) {
    if (!('Notification' in window)) {
        console.log(`Notification supressed - this browser doesn't support notifications.`);
    } else if (Notification.permission === "granted") {
        new Notification(message);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission((permission) => {
            if (permission === "granted") {
                new Notification(message);
            }
        });
    }
}