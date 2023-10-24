// rafc
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { btFormActions } from '../store/BTForm/slice'

export const ProductForm = () => {
    const [formValue, setFormValue] = useState({
        id: '',
        image: '',
        name: '',
        productType: '',
        price: '',
        description: '',
    })

    const dispatch = useDispatch()

    const { productEdit } = useSelector((state) => state.btForm)
    console.log('productEdit: ', productEdit)

    console.log('formValue: ', formValue)

    // const handleFormValue = (ev, name) => {
    //     setFormValue({
    //         ...formValue,
    //         [name]: ev.target.value,
    //     })
    // }

    // currying function
    const handleFormValue = (name) => (ev) => {
        setFormValue({
            ...formValue,
            [name]: ev.target.value,
        })
    }

    useEffect(() => {
        if (productEdit) {
            // console.log('productEdit: ', productEdit)
            setFormValue(productEdit)
        }
    }, [productEdit])

    // button ở trong form => type = 'submit
    // => onSubmit ở form
    return (
        <div>
            <form
                className="row"
                id="btForm"
                onSubmit={(ev) => {
                    // ngăn sự kiện reload của browser
                    ev.preventDefault()
                    // console.log('ev: ', ev)

                    dispatch(btFormActions.addProduct(formValue))
                }}
            >
                <h2 className="p-3 bg-dark text-warning">Product Info</h2>
                <div className="col-6">
                    <div>
                        <p>ID</p>
                        <input
                            id="id"
                            type="text"
                            className="form-control"
                            // onChange={(event) => {
                            //     // console.log('e: ', event.target.value)
                            //     setFormValue({
                            //         ...formValue,
                            //         id: event.target.value,
                            //     })
                            // }}
                            onChange={handleFormValue('id')}
                            // value={productEdit?.id}
                            value={formValue.id}
                        />
                    </div>
                    <div className="mt-3">
                        <p>NAME</p>
                        <input
                            type="text"
                            className="form-control"
                            // onChange={(ev) => {
                            //     setFormValue({
                            //         ...formValue,
                            //         name: ev.target.value,
                            //     })
                            // }}
                            onChange={handleFormValue('name')}
                            // value={productEdit?.name}
                            value={formValue.name}
                        />
                    </div>
                    <div className="mt-3">
                        <p>PRICE</p>
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleFormValue('price')}
                            value={formValue.price}
                        />
                    </div>
                </div>
                <div className="col-6">
                    <div>
                        <p>IMAGE</p>
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleFormValue('image')}
                            value={formValue.image}
                        />
                    </div>
                    <div className="mt-3">
                        <p>PRODUCT TYPE</p>
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleFormValue('productType')}
                            value={formValue.productType}
                        />
                    </div>
                    <div className="mt-3">
                        <p>DESCRIPTION</p>
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleFormValue('description')}
                            value={formValue.description}
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <button
                        className="btn btn-success"
                        // onClick={() => {
                        //     dispatch(btFormActions.addProduct(formValue))
                        // }}
                    >
                        Create
                    </button>
                    <button className="btn btn-info ms-3">Update</button>
                </div>
            </form>
            {/* <button form="btForm">Submit</button> */}
        </div>
    )
}
