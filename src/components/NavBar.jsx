export function NavBar(){

    const tabs = ['Hi!', 'About me', 'Projects', 'Contact']

    return(
        <div className="tab-container">
            {tabs.map((tab) => <p className="tab">{tab}</p>)}
        </div>
    )
}