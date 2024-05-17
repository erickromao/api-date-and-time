export const returnDateTime = {
     date: new Date(),
    returnDate(){
       return returnDateTime.date.toLocaleDateString()
    },
    returnTime(){
        return returnDateTime.date.toLocaleTimeString()
    }
}

