export const userData = {
    firstName: 'Eugene', // feel free to replace the name value
    lastName: 'Rozhkov', // feel free to replace the name value
    title: 'High shaman', // feel free to replace the title value
};

export default function User() {
    return (
        <div id="user" data-testid="user">
            <h3>
                {userData.firstName} {userData.lastName}
            </h3>
            <p>{userData.title}</p>
        </div>
    );
}