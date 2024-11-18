import * as ko from "knockout";

class Notification {
  constructor(message) {
    this.message = message;
  }
}

export const notifications = ko.observableArray();

export function addNotification(message, blockTimeout) {
  const newNotification = new Notification(message);

  notifications.push(newNotification);

  if (!blockTimeout) {
    window.setTimeout(() => notifications.remove(newNotification), 3000);
  }

  return newNotification;
}

export function removeNotification(notification) {
  notifications.remove(notification);
}
