import {NotificationManager} from 'react-notifications';

const Notify = (type, message, next = null) => {

    switch (type) {
        case 'info':
            NotificationManager.info('', message,3000,() => {
                if(next){
                    next();
                }
            });
            break;
        case 'success':
            NotificationManager.success('', message,3000,() => {
                if(next){
                    next();
                }
            });
            break;
        case 'warning':
            NotificationManager.warning('', message,3000,() => {
                if(next){
                    next();
                }
            });
            break;
        case 'error':
            NotificationManager.error('', message,7000,() => {
                if(next){
                    next();
                }
            });
            break;
    }
}


export default Notify;