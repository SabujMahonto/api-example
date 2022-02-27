

const randomFriends = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayFriendsList(data))
}
randomFriends()


const displayFriendsList = data =>{
    // console.log(data.results);
    const friends = data.results;
    const parentDiv = document.getElementById('friend_list')
    for(const friend of friends){
      const div = document.createElement('div')
      div.classList.add('friend_list')
      const li = document.createElement('li');
      li.innerText = `${friend.name.title} ${friend.name.first} `
   div.appendChild(li)
        parentDiv.appendChild(div)
    }
}