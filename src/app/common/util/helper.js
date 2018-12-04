//import moment from 'moment';
export const createNewPeople = (user, photoURL, people) => {
    //people.date = moment(people.date).toDate();
    return {
       ...people, 
       photoURL : photoURL || '/assets/user.png'
        
    }
}
export const createNewDish= (photoURL, dish) => {
    //people.date = moment(people.date).toDate();
    return {
       ...dish, 
       photoURL : photoURL || '/assets/user.png'
        
    }
}
export const objectToArray = (object) => {
    if (object) {
      return Object.entries(object).map(e => Object.assign(e[1], {id: e[0]}))
    }
  }
  