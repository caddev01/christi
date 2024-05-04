import Table from 'react-bootstrap/Table';

export default function UsersTable () {
    return(
        <table class="mx-auto mt-4 table table-borderless" style={{width:'70%'}}>
            <thead>
                <tr>
                <th scope="col">User</th>
                <th scope="col">Spirituality</th>
                <th scope="col">Rating</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Ulu_Osi</td>
                <td>Leader</td>
                <td>5.5</td>
                </tr>
                <tr>
                <td>Tobi_Baka</td>
                <td>Convert</td>
                <td>3.0</td>
                </tr>
                <tr>
                <td>Nuel_Demy</td>
                <td>Anointed</td>
                <td>6.5</td>
                </tr>
            </tbody>
        </table>
    );
};