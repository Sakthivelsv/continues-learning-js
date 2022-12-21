let myObject = {
    Courses:'Html,CSS,Javascript and React',
    Description:'From basics to advanced Learning!!',
    language:'Tamil,English',
    price:555,

    log:function (data) {
        console.log(data);
    },
    changeLanguage : function(newLang){
        this.language = newLang;
    }
}
myObject.changeLanguage('hindi');
console.log(`My courses are ${myObject.Courses} !!! You can learn in different lang like ${myObject.language}`);
myObject.log('Happy Learning');
