const initialFriends = [
    {
        id: 118836,
        name: 'Clark',
        image: 'https://i.pravatar.cc/48?u=118836',
        balance: -7,
    },
    {
        id: 933372,
        name: 'Sarah',
        image: 'https://i.pravatar.cc/48?u=933372',
        balance: 20,
    },
    {
        id: 499476,
        name: 'Anthony',
        image: 'https://i.pravatar.cc/48?u=499476',
        balance: 0,
    },
];

export default function FriendList() {
    return (
        <ul>
            {initialFriends.map((friend) => (
                <Friend
                    name={friend.name}
                    image={friend.image}
                    balance={friend.balance}
                    key={friend.id}
                />
            ))}
        </ul>
    );
}

function Friend({ name, image, balance }) {
    return (
        <li>
            <img src={image} alt="Friend Avatar" />
            <h3>{name}</h3>
            <p>{balance}</p>
        </li>
    );
}
