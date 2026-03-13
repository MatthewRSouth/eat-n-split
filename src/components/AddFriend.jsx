import { useState } from 'react';

export default function AddFriend({ onClose, addFriend }) {
    const [name, setName] = useState('');
    const [url, setUrl] = useState(getRandomUrl);

    function handleSubmit(e) {
        e.preventDefault();
        const newFriend = { id: url, name, image: url, balance: 0 };
        addFriend(newFriend);
    }

    function uniqueId() {
        return Math.floor(Math.random() * 999999 - 100000) + 100000;
    }
    function getRandomUrl() {
        return `https://i.pravatar.cc/48?u=${uniqueId()}`;
    }

    return (
        <div>
            <form className="form-add-friend" onSubmit={handleSubmit}>
                <label htmlFor="friendName">👯‍♂️Friend Name</label>
                <input
                    type="text"
                    id="friendName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="friendImage">🌅Image URL</label>
                <input
                    type="text"
                    id="friendImage"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button className="button">Add</button>
            </form>
            <button className="button" onClick={onClose}>
                close
            </button>
        </div>
    );
}
