import Notification from './notification';
import 'this';

const notificationBar = new Notification(".notification-bar");
let countClick = 0;

notificationBar.showMessage("Welkom op deze pagina");

document.addEventListener("click",
                          () => {
                              countClick++;
                              notificationBar.showMessage(`je hebt ${countClick}x geklikt`);
                          });