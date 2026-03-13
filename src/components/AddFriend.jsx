export default function AddFriend() {
    return (
        <div>
            <form className="form-add-friend">
                <label htmlFor="friendName">👯‍♂️Friend Name</label>
                <input type="text" id="friendName" />
                <label htmlFor="friendImage">🌅Image URL</label>
                <input type="text" id="friendImage" />
                <button className="button">Add</button>
            </form>
            <button className="button">close</button>
        </div>
    );
}
