import { Link } from "react-router-dom"

const PktsHome = () => {
    return (
        <>
            <Link to='/pkts/new'>Create</Link>
            <div className="card">
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Package's Name</th>
                        <th scope="col">User's Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <Link to='/pkts/1'>1</Link>
                        </th>
                        <td>Beloved</td>
                        <td>Toni Morrison</td>
                        <td>1987</td>
                        <td>
                            <Link to='/pkts/1/edit'>Edit</Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <Link to='/pkts/2'>2</Link>
                        </th>
                        <td>Moby-Dick</td>
                        <td>Herman Meliville</td>
                        <td>1851</td>
                        <td><Link to='/pkts/2/edit'>Edit</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <Link to='/pkts/3'>3</Link>
                        </th>
                        <td>The Great Gatsby</td>
                        <td>Scott Fitzgerald</td>
                        <td>1925</td>
                        <td><Link to='/pkts/3/edit'>Edit</Link></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </>
    )
}

export default PktsHome