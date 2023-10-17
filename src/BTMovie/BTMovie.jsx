// rafc
import phims from './data.json'

export const BTMovie = () => {
    console.log('phims: ', phims)
    return (
        <div className="container mt-3">
            <h1>BTMovie</h1>
            <p className='title'>Danh sách phim</p>
            <div className="row">
                {phims.map((phim) => {
                    return (
                        <div key={phim.maPhim} className="col-3 mt-3">
                            <div className="card">
                                <img
                                    style={{
                                        height: 450,
                                    }}
                                    src={phim.hinhAnh}
                                    alt="..."
                                />
                                <div className="card-body">
                                    <p
                                        style={{
                                            height: 80,
                                        }}
                                        className="fs-3"
                                    >
                                        {phim.tenPhim}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
