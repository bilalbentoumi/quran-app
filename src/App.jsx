import NavBar from './NavBar'
import Sidebar from './Sidebar'

function App() {

    return (
        <div className="app h-full flex flex-col">
            <NavBar/>
            <div className="app-content flex flex-grow">
                <Sidebar/>
                <div className="main p-8 flex-grow bg-gray-100 rounded-tl-3xl shadow-inner">
                    Main
                </div>
            </div>
        </div>
    )
}

export default App
