import Navigation from '../navigation/nav';

const MainLayout = (props) => {
    return(
        <div>
            <header>
                <Navigation/>
            </header>
            <div className="container main_wrapper">
                {props.children}
            </div>
        </div>
    )
}

export default MainLayout;