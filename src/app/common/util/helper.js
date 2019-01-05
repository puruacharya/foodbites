import moment from 'moment';
export const createNewPeople = (user, photoURL, people) => {
    //people.date = moment(people.date).toDate();
    return {
       ...people, 
       photoURL : photoURL || '/assets/user.png'
        
    }
}
export const createNewDish= (user,photoURL, dish) => {
    //people.date = moment(people.date).toDate();
    return {
       ...dish,
       manId : user.uid, 
       photoURL : photoURL || '/assets/user.png',
        created: Date.now()
    }
}
export const objectToArray = (object) => {
    if (object) {
      return Object.entries(object).map(e => Object.assign(e[1], {id: e[0]}))
    }
  }
  