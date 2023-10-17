// rafc

import { Header } from './Header'

export const DemoProps = () => {
    return (
        <div className="container mt-3">
            <h1>DemoProps</h1>
            {/* <img src="" alt="" /> */}
            <Header bgColor="red" textColor="red" padding={100} />
            {/* bg-yellow */}
            <Header bgColor="yellow" margin={50} children={10} />
            {/* bg-green */}
            <Header />
            <Header>
                <div>Nguyễn Văn A</div>
            </Header>
        </div>
    )
}
