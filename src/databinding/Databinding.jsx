// rafc

export const Databinding = () => {
    const fullName = 'Nguyễn Viết Hải'

    const sum = (a, b) => {
        return a + b
    }

    return (
        <div className="container mt-3">
            <h1>Databinding</h1>
            <p className="fs-3 fw-bold text-danger">{fullName}</p>
            <p className="fs-3">Sum: {sum(10, 20)}</p>
        </div>
    )
}
