//rafc

export const HandleEvent = () => {
    const alertMessage = () => {
        alert('Hello BC53')
    }

    const alertMessageWithParam = (param) => {
        alert(param)
    }

    // Mọi sự kiện(event) ở trong react đều trả về 1 tham số event

    return (
        <div className="container mt-3">
            <h1>HandleEvent</h1>
            <div>
                {/* Trường họp gọi hàm ko có tham số */}
                <button className="btn btn-success" onClick={alertMessage}>
                    Alert Message
                </button>

                {/* Trường hợp gọi hàm có tham số */}
                <button
                    className="btn btn-danger"
                    onClick={(event) => {
                        console.log('event: ', event);
                        console.log('event target: ', event.target);
                        console.log('Hello');
                        alertMessageWithParam('Nguyễn Văn C')
                    }}

                    // onClick={(event) => alertMessageWithParam('Nguyễn Văn B')}
                >
                    Alert Message With Param
                </button>
            </div>
        </div>
    )
}
