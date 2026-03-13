import '../index.css';

export default function FriendList({ friends }) {
    return (
        <ul className="sidebar">
            {friends.map((friend) => (
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
    function displayBalance(name, balance) {
        let displayMessage;
        if (balance < 0) {
            displayMessage = (
                <p className="red">
                    You owe {name} ${Math.abs(balance)}
                </p>
            );
        } else if (balance === 0) {
            displayMessage = <p>You and {name} are even</p>;
        } else {
            displayMessage = (
                <p className="green">
                    {name} owes you ${balance}
                </p>
            );
        }
        return displayMessage;
    }
    return (
        <li>
            <img src={image} alt="Friend Avatar" />
            <h3>{name}</h3>
            {displayBalance(name, balance)}
            <button className="button">
                {balance <= 0 ? 'Select' : 'Close'}
            </button>
        </li>
    );
}
