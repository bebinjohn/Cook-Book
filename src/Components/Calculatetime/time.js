import moment from 'moment'


//Function to set the current time
//return the cuurent type
export const time=()=>{
    const hour=moment().format('HH')
    if(hour>=3&&hour<=8) return 'breakfast'
    else if(hour>=9&&hour<=16) return 'main course'
    else return 'salad'
}
