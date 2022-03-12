function ChapterCard ({ chapter }) {

    return (
        <div className="surah-card bg-white rounded-xl p-6 cursor-pointer shadow-sm col-span-2 hover:shadow-lg hover:scale-[102%] duration-75" key={ chapter.id }>
            <div className="card-header flex justify-between">
                <div className="surah-number bg-green-100 w-8 h-8 flex justify-center items-center rounded-full">
                    <span className="text-sm font-medium text-green-800">{ chapter.id }</span>
                </div>
                <button>
                    <svg width="24" height="24" viewBox="0 0 297 251" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M148.5 250.96C146.928 250.96 145.355 250.6 143.911 249.877C142.456 249.149 107.883 231.728 72.811 202.502C51.987 185.149 35.336 167.213 23.323 149.192C7.847 125.979 0 102.504 0 79.421C0 35.65 35.61 0.0400009 79.381 0.0400009C108.985 0.0400009 134.855 16.326 148.5 40.412C162.145 16.326 188.016 0.0400009 217.619 0.0400009C261.389 0.0400009 297 35.65 297 79.421C297 102.504 289.153 125.979 273.677 149.192C261.663 167.213 245.013 185.149 224.189 202.503C189.118 231.729 154.544 249.15 153.089 249.877C151.645 250.6 150.072 250.96 148.5 250.96ZM79.381 20.564C46.928 20.564 20.525 46.967 20.525 79.42C20.525 155.151 125.109 216.351 148.497 229.085C171.876 216.335 276.476 155.041 276.476 79.42C276.476 46.967 250.073 20.564 217.62 20.564C185.166 20.564 158.764 46.967 158.764 79.42C158.764 85.087 154.168 89.683 148.501 89.683C142.834 89.683 138.238 85.087 138.238 79.42C138.237 46.968 111.835 20.564 79.381 20.564Z" fill="black"/>
                    </svg>
                </button>
            </div>
            <div className="card-body flex justify-between items-end pt-4">
                <div>
                    <h2 className="text-md font-medium">{ chapter.name_pron_en }</h2>
                    <span className="text-sm text-gray-400">{ chapter.name_ar }</span>
                </div>
                <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{ chapter.verses_number + ' Ayah'}</span>
            </div>
        </div>
    )
}

export default ChapterCard