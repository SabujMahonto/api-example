

const randomFriends = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayFriendsList(data))
}


const displayFriendsList = data =>{
    // console.log(data.results);
    const friends = data.results;
    const elements = document.getElementById('friend_list')
    for(const friend of friends){
      const li = document.createElement('li');
      li.style='list-style:none; background-color:orange; margin:10px; font-size:30px;  '
      li.innerText = `Name: ${friend.name.title} ${friend.name.first}
      ${friend.name.last} 
      Email:${friend.email} 
   `;
      elements.appendChild(li)
    }
}