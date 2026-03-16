import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import BillSplit from './components/BillSplit';
import './index.css';
import { useState } from 'react';

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

export default function App() {
    const [friends, setFriends] = useState(initialFriends);
    const [modal, setModal] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleAddButton() {
        setModal(true);
    }
    function handleClose() {
        setModal(false);
    }
    function handleSplitBillClose() {
        setSelectedFriend(null);
    }

    //helper functionn

    function handleName(e) {
        setName(e.target.value);
    }

    //Add Friends Logic
    function addFriend(newFriendObject) {
        setFriends([...friends, newFriendObject]);
    }
    function handleSelect(friend) {
        setSelectedFriend(friend);
    }
    return (
        <div className="app">
            <FriendList
                friends={friends}
                onAddButton={handleAddButton}
                modal={modal}
                selectedFriend={selectedFriend}
                onSplitBillClose={handleSplitBillClose}
                handleSelect={handleSelect}
            />

            <BillSplit selectedFriend={selectedFriend} />
            {modal === true ? (
                <AddFriend onClose={handleClose} addFriend={addFriend} />
            ) : null}
        </div>
    );
}
