import '../index.css';

export default function FriendList({
    friends,
    onAddButton,
    modal,
    onSplitBillActive,
    onSplitBillClose,
    selectedFriend,
    handleSelect,
}) {
    return (
        <ul className="sidebar">
            {friends.map((friend) => (
                <Friend
                    friend={friend}
                    onSelect={handleSelect}
                    name={friend.name}
                    image={friend.image}
                    balance={friend.balance}
                    key={friend.id}
                    selectedFriend={selectedFriend}
                    onSplitBillActive={onSplitBillActive}
                    onSplitBillClose={onSplitBillClose}
                />
            ))}
            {!modal ? (
                <button className="button" onClick={onAddButton}>
                    Add Friend
                </button>
            ) : (
                ''
            )}
        </ul>
    ); // FIX: selct and close! Close should be if split bill is active. then it should say close
}

function Friend({
    friend,
    name,
    image,
    balance,
    onSelect,
    selectedFriend,
    onSplitBillActive,
    onSplitBillClose,
}) {
    const isSelected = selectedFriend && selectedFriend.id === friend.id;
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
            <button
                className="button"
                onClick={isSelected ? onSplitBillClose : () => onSelect(friend)}
            >
                {isSelected ? 'Close' : 'Select'}
            </button>
        </li>
    );
}
