// rafc

export const RenderWithCondition = () => {
    const isLogin = true
    const fullName = 'Nguyễn Văn A'

    const isShowMessage = true

    const renderLogin = () => {
        if (isLogin) {
            return <p>Hello, {fullName}</p>
        } else {
            return <button className="btn btn-success">Đăng nhập</button>
        }
    }
    return (
        <div className="container mt-3">
            <h1>RenderWithCondition</h1>
            <div>
                {/* {isLogin ? (
                    <p>Hello, {fullName}</p>
                ) : (
                    <button className="btn btn-success">Đăng nhập</button>
                )} */}
                
                {renderLogin()}

                {isShowMessage ? <p>Hello BC53</p> : ''}

                {isShowMessage && <p>Hello BC53</p>}
            </div>
        </div>
    )
}
