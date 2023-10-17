const initialState = {
    productDetail: {
        maSP: 1,
        tenSP: 'VinSmart Live',
        manHinh: 'AMOLED, 6.2, Full HD+',
        heDieuHanh: 'Android 9.0 (Pie)',
        cameraTruoc: '20 MP',
        cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
        ram: '4 GB',
        rom: '64 GB',
        giaBan: 5700000,
        hinhAnh: './images/vsphone.jpg',
    },
    carts: [
        {
            maSP: 1,
            tenSP: 'VinSmart Live',
            manHinh: 'AMOLED, 6.2, Full HD+',
            heDieuHanh: 'Android 9.0 (Pie)',
            cameraTruoc: '20 MP',
            cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
            ram: '4 GB',
            rom: '64 GB',
            giaBan: 5700000,
            hinhAnh: './images/vsphone.jpg',
            soLuong: 1,
        },
    ],
}

export const btPhoneReducer = (state = initialState, action) => {
    console.log('action: ', action)
    switch (action.type) {
        case 'SET_PRD_DETAIL': {
            return { ...state, productDetail: action.payload }
        }
        case 'ADD_CART': {
            const newCarts = [...state.carts]

            const index = newCarts.findIndex((value) => value.maSP === action.payload.maSP)

            if (index !== -1) {
                newCarts[index].soLuong += 1
            } else {
                newCarts.push({ ...action.payload, soLuong: 1 })
            }

            return {
                ...state,
                carts: newCarts,
            }
        }
        case 'HANDLE_CART_QUANTITY': {
            const newCarts = [...state.carts]
            const index = newCarts.findIndex((value) => value.maSP === action.payload.productId)
            newCarts[index].soLuong = newCarts[index].soLuong + action.payload.quantity || 1
            return { ...state, carts: newCarts }
        }
        case 'DELETE_CART': {
            const newCarts = state.carts.filter((value) => value.maSP !== action.payload)

            return { ...state, carts: newCarts }
        }
        default:
            return state
    }
}
