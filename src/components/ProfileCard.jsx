export function titleCase(text){

    if(text==='') return '';


    const arr = text.split(' ');
    const result = [];
    for(let elem of arr){
        result.push(elem[0].toUpperCase()+elem.substring(1).toLowerCase());
    }
    return result.join(' ');
}

const ProfileCard =({name,age})=> {
  return (
    <div>ProfileCard</div>
  )
}

export default ProfileCard;
