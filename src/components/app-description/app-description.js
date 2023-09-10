import './app-description.css';

const AppDescription = function () {

    return (
        <main className="app_description_block">
            <section className="descr_section left_section">
                <p>What is CF?</p>
                <p>CF or Country Facts is an app that lets you discover several facts about anu country available in the system.</p>
                
            </section>
            <section className="descr_section right_section">
                <p>
                    How does it work?
                </p>
                <p>
                    When "Explore countries" option is selected the system displays a list of several countries downloaded from the server.
                </p>
            </section>
        </main>
    )
}

export default AppDescription;