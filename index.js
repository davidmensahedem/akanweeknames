let namesData = [
    {
        "day":"Sunday",
        "male":"Kwesi",
        "female":"Akosua"
    },
    {
        "day":"Monday",
        "male":"Kojo",
        "female":"Adjoa"
    },
    {
        "day":"Tuesday",
        "male":"Kwabena",
        "female":"Abena"
    },
    {
        "day":"Wednesday",
        "male":"Kweku",
        "female":"Akua"
    },
    {
        "day":"Thursday",
        "male":"Yao",
        "female":"Yaa"
    },
    {
        "day":"Friday",
        "male":"Kofi",
        "female":"Afia"
    },
    {
        "day":"Saturday",
        "male":"Kwame",
        "female":"Ama"
    }    
];

let genders = ["male","female"];

function getAkanWeekDayName(day, gender) {
    if (!day) {
        return null;
    }

    if (!gender) {
        return null;
    }

    if(genders.find(x => x == gender.toLowerCase()) == null){
        return null;
    }

    let result = namesData.find(nd=>nd.day.toLowerCase() == day.toLowerCase());

    if(!result){
        return null;
    }else{
        return gender == "female" ? result.female : result.male; 
    }

}

module.exports = getAkanWeekDayName;

