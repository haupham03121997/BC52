import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'
import { Navigation } from './Navigation'

export const BTComponent = () => {
    return (
        <div className="container">
            <h2>BTComponent</h2>
            <Header />
            <div className="row">
                <div className="col-4 pe-0">
                    <Navigation />
                </div>
                <div className="col-8 ps-0">
                    <Content />
                </div>
            </div>
            <Footer />
        </div>
    )
}

// ml mr => ms me
