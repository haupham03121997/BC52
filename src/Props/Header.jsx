// rafc
export const Header = (props) => {
    console.log('props: ', props)
    const { bgColor = 'red', children } = props
    console.log('children: ', children)
    return (
        <div
            className="p-5 text-center text-white fs-4"
            style={{
                background: bgColor,
            }}
        >
            Header
            {children}
        </div>
    )
}
