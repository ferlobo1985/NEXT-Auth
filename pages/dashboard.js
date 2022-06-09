import RouteGuard from "../utils/guard/routeGuard";

const Dashboard = () => {
    return(
        <RouteGuard>
            <div>
                <h1>Dashboard</h1>
            </div>
        </RouteGuard>
    )
}

export default Dashboard;