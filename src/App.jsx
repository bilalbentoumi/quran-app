import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import ChapterCard from './components/ChapterCard'
import chaptersJson from './data/chapters.json'

function App() {

    const [ chapters, setChapters ] = useState(null)

    useEffect(() => {
        setChapters(chaptersJson)
    }, [])

    return (
        <div className="app h-full flex flex-col">
            <NavBar />
            <div className="app-content flex flex-grow overflow-hidden">
                <Sidebar />
                <div className="main flex-grow bg-gray-100 md:rounded-tl-3xl shadow-inner overflow-hidden relative">
                    <div className="bg-gradient-to-b from-gray-200 h-2 absolute z-10 top-0 left-0 right-0 pointer-events-none" />
                    <div className="grid gap-4 absolute left-0 right-0 top-0 bottom-0 p-10 overflow-auto" style={ {"gridTemplateColumns": "repeat(auto-fit, minmax(120px, 1fr))"} }>
                        { chapters?.map((chapter) => (
                            <ChapterCard chapter={ chapter } key={ chapter.id } />
                        )) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
