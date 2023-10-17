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
}

export const btPhoneReducer = (state = initialState, action) => {
    console.log('action: ', action)
    switch (action.type) {
        case 'SET_PRD_DETAIL': {
            return { ...state, productDetail: action.payload }
        }
        default:
            return state
    }
}
