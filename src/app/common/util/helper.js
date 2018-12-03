import moment from 'moment';
export const createNewPeople = (user, photoURL, people) => {
    people.date = moment(people.date).toDate();
    return {
        ...people, 
        created : Date.now
    }
}